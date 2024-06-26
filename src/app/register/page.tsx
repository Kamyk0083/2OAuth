"use client";

import { ChangeEvent, useState } from "react";
import axios from "axios";

export default function Register() {
  const [Name, setCompanyName] = useState("");
  const [Email, setCompanyEmail] = useState("");
  const [Password, setCompanyPassword] = useState("");

  const registerCompany = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(Email)) {
      alert("Niepoprawny adres email");
      return;
    }

    const passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    if (!passwordRegex.test(Password)) {
      alert(
        "Hasło musi mieć minimum 8 znaków, zawierać co najmniej jeden numer i jeden znak specjalny"
      );
      return;
    }

    try {
      await axios.post("/api/register", {
        username: Name,
        email: Email,
        password: Password,
      });
      window.location.href = "/login";
    } catch (error) {
      alert("Niepoprawna nazwa użytkownika lub hasło");
    }
  };

  return (
    <div className="p-8 bg-gray-100">
      <a href="/login">Powrót</a>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <header className="mb-6" text-gray-700>
          <h1 className="text-2xl font-bold">Rejestracja</h1>
        </header>
        <main className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <form onSubmit={registerCompany} className="space-y-4">
            <input
              type="text"
              placeholder="Nazwa"
              className="w-full p-2 border rounded text-black"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCompanyName(e.target.value)
              }
            />
            <input
              type="text"
              placeholder="Adres email"
              className="w-full p-2 border rounded text-black"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCompanyEmail(e.target.value)
              }
            />
            <input
              type="password"
              placeholder="Hasło"
              className="w-full p-2 border rounded text-black"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setCompanyPassword(e.target.value)
              }
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
            >
              Zarejestruj
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
