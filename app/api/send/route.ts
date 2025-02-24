import { EmailTemplate } from '../../contact/emailTemplate/emailTemplate';  // Import the template
import { Resend } from 'resend';  // Import Resend API

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Extract form data from the request body
    const { name, email, message } = await request.json();

    // Send the email using Resend with the extracted form data
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',  // Replace with your verified sender email
      to: 'limousine196@gmail.com',  // The recipient's email address (e.g., your email)
      subject: "New message from Contact Form",
      react: EmailTemplate({
        firstName: name,
        email: email,   // Pass email as a prop to the template
        message: message // Pass message as a prop to the template
      }) as React.ReactElement,  // Pass the props into the email template
    });

    if (error) {
      console.log("API Error");
      console.log(error);
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    // Return success response if email sent successfully
    return new Response(JSON.stringify({ data }), { status: 200 });

  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
