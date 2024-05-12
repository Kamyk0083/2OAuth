import Link from 'next/link';
import gif from "../200w.gif";

export default function Home() {
  return (
<<<<<<< Updated upstream
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Logowanie dwuetapowe</h1>
      <div className="space-y-2 flex items-center justify-center flex-col">
        <h1 className="text-2xl font-semibold text-blue-600">Tymoteusz Tymendorf</h1>
        <h1 className="text-2xl font-semibold text-blue-600">Ksawery Kamiński</h1>
      </div>
      <Link href="/login" legacyBehavior>
        <a className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Start
        </a>
      </Link>
=======
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-8 text-center">Zaloguj się</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Nazwa użytkownika
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Nazwa użytkownika" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Hasło
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Zaloguj się
            </button>
          </div>
        </form>
      </div>
>>>>>>> Stashed changes
    </div>
  );
}
