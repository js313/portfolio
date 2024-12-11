import React from "react";
import Animated from "components/Animated";
import Navigation from "components/Navigation";
import { NavItem } from "types/navigation";
import { defaultAnimationProps } from "constants/animations";
import BipartiteLayout from "layouts/BipartiteLayout";

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

const navItems: NavItem[] = [
  // TODO: Make dynamic, get form backend
  { name: "Home", to: "/home" },
  { name: "Github", to: "https://www.github.com/" },
  { name: "LinkedIn", to: "https://www.linkedin.com/" },
  { name: "Email", to: "mailto:dummy@dummy.com" },
];

const Contact: React.FC = () => {
  const leftContent = (
    <div className="flex flex-col items-start ml-10">
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
        <form className="text-left space-y-4 mt-4 w-3/4">
          <Animated variants={itemVariants}>
            <input type="text" placeholder="Name" className="input-base" />
          </Animated>
          <Animated variants={itemVariants}>
            <input type="email" placeholder="Email" className="input-base" />
          </Animated>
          <Animated variants={itemVariants}>
            <textarea
              placeholder="Message"
              className="textarea-base"
            ></textarea>
          </Animated>
          <Animated variants={itemVariants}>
            <button type="submit" className="button-base">
              Send
            </button>
          </Animated>
        </form>
      </Animated>
    </div>
  );

  const rightContent = <Navigation navItems={navItems} />;
  return (
    <BipartiteLayout leftContent={leftContent} rightContent={rightContent} />
  );
};

export default Contact;
