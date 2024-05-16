import { sendMail } from '@/lib/mail';

export default function Home() {
  const sendEmail = async () => {
    "use server";
    await sendMail({
      to: "tymbeixpoi@gmail.com",
      name: "Tymek",
      subject: "Test",
      body: "<h1>Teścik</h1>"
    });
  };

  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <form>
        <button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={sendEmail}>Test</button>
      </form>
    </div>
  );
}
