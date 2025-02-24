import * as React from "react";

// Define the props type for the EmailTemplate component
interface EmailTemplateProps {
  firstName: string;
  email: string; // Add email prop
  message: string; // Add message prop
}

// Updated EmailTemplate component
export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  message,
}) => (
  <div>
    <div>
      <strong>Name:</strong> {firstName}
    </div>
    <div>
      <strong>Email:</strong> {email}
    </div>
    <div>
      <strong>Message:</strong> {message}
    </div>
  </div>
);
