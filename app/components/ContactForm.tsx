import { useState } from "react";
import { ClipLoader } from "react-spinners"; // Make sure to install this package

export default function ContactForm() {
  // 1. Provide default values here
  const [formData, setFormData] = useState({
    name: "Test User",
    email: "test@example.com",
    subject: "Testing Subject",
    message: "This is a sample message for quicker form testing.",
  });

  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage("Message sent successfully!");
        // Optional: Clear the form completely after sending
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatusMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatusMessage("An error occurred. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="bg-[#F2F2F2] py-12 px-4">
      <div className="container mx-auto lg:px-20">
        <h2 className="font-serif text-3xl font-bold text-center text-[#0B132B] mb-2">
          Send Us a Message
        </h2>
        <p className="text-center text-[#6C6C6C] mb-8">
          Let us know how we can help, and we will get back to you as soon as
          possible.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6 lg:p-12 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-[#6C6C6C] font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0F8652] outline-none"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-[#6C6C6C] font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0F8652] outline-none"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>

          {/* Subject */}
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block text-[#6C6C6C] font-semibold mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0F8652] outline-none"
              placeholder="Enter the subject"
              required
            />
          </div>

          {/* Message */}
          <div className="mb-8">
            <label
              htmlFor="message"
              className="block text-[#6C6C6C] font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0F8652] outline-none"
              placeholder="Write your message here"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#0F8652] text-white py-3 px-6 rounded-md hover:bg-[#0D7345] transition duration-300 font-semibold transform hover:scale-105 shadow-lg"
              disabled={isSending}
            >
              {isSending ? (
                <ClipLoader color="#fff" size={10} />
              ) : (
                "Send Message"
              )}
            </button>
          </div>

          {/* Status Message */}
          {statusMessage && (
            <p
              className={`text-center mt-4 ${
                statusMessage.includes("successfully")
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
