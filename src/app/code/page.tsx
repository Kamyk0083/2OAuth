"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [code, setCode] = useState("");

  const handleSendCode = async () => {
    const email = localStorage.getItem("email");
    const response = await fetch("/api/send-code/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code, email }),
    });

    const data = await response.json();
    console.log(data.message);
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
      >
        Wyślij kod
      </Button>
    </div>
  );
}
