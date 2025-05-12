import React, { useCallback, useEffect, useState } from "react";
import Animated from "./Animated";
import { defaultAnimationProps } from "constants/animations";
import { Contact } from "types/contact";
// import { useContact } from "hooks/useContact";
import { useSearchParams } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0 },
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<Contact>({
    name: "",
    email: "",
    message: "",
  });
  const [buttonText, setButtonText] = useState<string>("Send");
  // const [isPending, setIsPending] = useState(false);
  // const { mutateAsync } = useContact();

  const resetButtonText = useCallback(() => setButtonText("Send"), []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");

  useEffect(() => {
    if (success === "true") {
      setButtonText("😊😊😊");
      setTimeout(() => {
        resetButtonText();
        searchParams.delete("success");
        setSearchParams(searchParams);
      }, 1000);
    }
  }, [success, resetButtonText, searchParams, setSearchParams]);

  // Disabled for now as no backend deployed, using FormSubmit for now
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setButtonText("...");
  //   setIsPending(true);
  //   try {
  //     await mutateAsync(formData);
  //     setFormData({ name: "", email: "", message: "" });
  //     setButtonText("😊😊😊");
  //   } catch (error) {
  //     setButtonText("!!!");
  //   } finally {
  //     setIsPending(false);
  //     setTimeout(resetButtonText, 1000);
  //   }
  // };

  return (
    <div className="flex flex-col items-start md:h-auto overflow-y-scroll scrollbar-none">
      <Animated {...defaultAnimationProps}>
        <h1 className="text-4xl text-secondary">
          Get in <span className="font-bold text-primary">Touch</span>
        </h1>
      </Animated>
      <Animated
        {...defaultAnimationProps}
        transition={{ ...defaultAnimationProps.transition, delay: 0.5 }}
      >
        <p className="text-lg text-secondary mt-2">
          Feel free to drop me a message. I'll get back to you as soon as I can!
        </p>
      </Animated>
      <Animated
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="w-full"
      >
        <form
          action="https://formsubmit.co/sharmajeenit2000@gmail.com"
          method="POST"
          className="text-left space-y-4 mt-4 md:w-3/4 w-full"
        >
          {/* Hidden input to disable CAPTCHA */}
          {/* <input type="hidden" name="_captcha" value="false" /> */}

          <input
            type="hidden"
            name="_next"
            value={`${window.location.origin}/contact?success=true`}
          />

          <Animated variants={itemVariants}>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Name"
              className="input-base"
              required
            />
          </Animated>
          <Animated variants={itemVariants}>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="input-base"
              required
            />
          </Animated>
          <Animated variants={itemVariants}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="textarea-base"
              required
            ></textarea>
          </Animated>
          <Animated variants={itemVariants} className="text-right md:text-left">
            <button type="submit" className="button-base">
              {buttonText}
            </button>
          </Animated>
        </form>
      </Animated>
    </div>
  );
};

export default ContactForm;
