import React from "react";

const ContactForm: React.FC = () => {
  return (
    <form className="flex flex-col space-y-4">
      <input type="text" placeholder="Name" className="border p-2 rounded" />
      <input type="email" placeholder="Email" className="border p-2 rounded" />
      <textarea placeholder="Message" className="border p-2 rounded h-32"></textarea>
      <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Send</button>
    </form>
  );
};

export default ContactForm;
