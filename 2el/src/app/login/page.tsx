"use client";

import { useState, ChangeEvent } from "react";
import axios from "axios";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const Loginin = async () => {
    if (username && password) {
      const credentials = { username, password };
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post("/api/login", credentials, config);
      const data = response.data;

      if (data.success && data.token) {
        localStorage.setItem("token", data.token);
        window.location.href = "/";
      } else {
        console.log("Niepoprawna nazwa użytkownika lub hasło");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-8 text-center">Zaloguj się</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Nazwa użytkownika
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Nazwa użytkownika..."
              onChange={handleLoginChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Hasło
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              onChange={handlePasswordChange}
              placeholder="hasło..."
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={Loginin}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Zaloguj się
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
