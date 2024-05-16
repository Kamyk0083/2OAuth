import type { NextApiRequest, NextApiResponse } from 'next';
import { sendMail } from '@/lib/mail';

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { code } = req.body;
    try {
      await sendMail({
        to: "tymbeixpoi@gmail.com",
        name: "Vahid",
        subject: "Test Mail",
        body: `Witaj, oto Twój kod weryfikacyjny: ${code}`,
      });
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
