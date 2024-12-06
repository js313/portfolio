import React from "react";
import ContactForm from "components/ContactForm";

const Contact: React.FC = () => {
  return (
    <div className="p-12">
      <h2 className="text-2xl font-bold">Get in Touch</h2>
      <ContactForm />
      <div className="mt-4 space-x-4">
        <a href="#" className="text-blue-500 hover:underline">
          GitHub
        </a>
        <a href="#" className="text-blue-500 hover:underline">
          LinkedIn
        </a>
        <a
          href="mailto:youremail@example.com"
          className="text-blue-500 hover:underline"
        >
          Email
        </a>
      </div>
    </div>
  );
};

export default Contact;
