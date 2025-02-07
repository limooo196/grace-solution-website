
import { EmailTemplate } from '../../contact/emailTemplate/emailTemplate';
import { Resend } from 'resend';

console.log("API TEst1")
const resend = new Resend(process.env.RESEND_API_KEY);
resend.apiKeys.create({ name: 'Production' });


export async function POST() {
  console.log("API TEst")

  new Resend("prod")
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['limousine196@gmail.com'],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}