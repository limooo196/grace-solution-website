
import { EmailTemplate } from '../../contact/emailTemplate/emailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request: Request) {

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'info@gracesolution.com',
      subject: "Testingg",
      react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
    });

    console.log("API TEst1")

    if (error) {
      console.log("API Error")
      console.log(error)

      return Response.json({ error });
    }
    console.log("API TEst2")

    return Response.json({ data });


  } catch (error) {
    return Response.json({ error });
  }
}