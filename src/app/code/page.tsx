"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [code, setCode] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    const lastSent = localStorage.getItem("lastCodeSentAt");
    const now = new Date().getTime();
    if (lastSent && now - parseInt(lastSent) < 30000) {
      setIsButtonDisabled(true);
      setTimeout(
        () => setIsButtonDisabled(false),
        30000 - (now - parseInt(lastSent))
      );
    }
  }, []);

  const handleSendCode = async () => {
    const email = localStorage.getItem("email");
    const now = new Date().getTime();

    setIsButtonDisabled(true);
    const response = await fetch("/api/send-code/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code, email }),
    });

    const data = await response.json();
    if (data.success) {
      localStorage.setItem("lastCodeSentAt", now.toString());
      setTimeout(() => setIsButtonDisabled(false), 30000);
    } else {
      setIsButtonDisabled(false);
    }
    console.log(data.message);
  };

  const handleVerifyCode = async () => {
    const email = localStorage.getItem("email");
    const response = await fetch("/api/verify-code/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, code }),
    });
    const data = await response.json();
    if (data.success) {
      window.location.href = "/main-page";
    } else {
      console.log("Niepoprawny kod");
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-64 p-3 my-2 border-2 border-black rounded-lg text-lg text-gray-800 placeholder-gray-600"
        placeholder="Enter code"
      />
      <Button
        onClick={handleSendCode}
        className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        disabled={isButtonDisabled}
      >
        Wyślij kod
      </Button>
      <Button
        onClick={handleVerifyCode}
        className="mt-8 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Sprawdź kod
      </Button>
    </div>
  );
}
