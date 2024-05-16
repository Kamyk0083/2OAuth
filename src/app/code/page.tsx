import { Button } from "@/components/ui/button";
import { compileWelcomeTemplate, sendMail } from "@/lib/mail";

export default function Home() {
  const send = async () => {
    "use server";
    await sendMail({
      to: "tymbeixpoi@gmail.com",
      name: "Vahid",
      subject: "Test Mail",
      body: "lolz",
    });
  }

  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <input type="text" className="w-64 p-3 my-2 border-2 border-black rounded-lg text-lg text-gray-800 placeholder-gray-600" placeholder="Enter code"></input>
      <form>
      <Button className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" formAction={send}>Wyślij kod</Button>
      </form>
    </div>
  );
};
