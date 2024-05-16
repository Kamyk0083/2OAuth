import Link from 'next/link';

export default function Home() {


  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Logowanie dwuetapowe</h1>
      <div className="space-y-2 flex items-center justify-center flex-col">
        <h1 className="text-2xl font-semibold text-blue-600">Tymoteusz Tymendorf</h1>
        <h1 className="text-2xl font-semibold text-blue-600">Ksawery Kamiński</h1>
      </div>
      <Link href="/login" legacyBehavior>
        <a className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start</a>
      </Link>
    </div>
  );
}