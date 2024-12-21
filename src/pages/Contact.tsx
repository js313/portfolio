import React from "react";
import Navigation from "components/Navigation";
import { NavItem } from "types/navigation";
import BipartiteLayout from "layouts/BipartiteLayout";
import ContactForm from "components/ContactForm";

const navItems: NavItem[] = [
  { name: "Home", to: "/home" },
  { name: "Github", to: "https://www.github.com/" },
  { name: "LinkedIn", to: "https://www.linkedin.com/" },
  { name: "Email", to: "mailto:dummy@dummy.com" },
];

const Contact: React.FC = () => {
  const leftContent = <ContactForm />;

  const rightContent = <Navigation navItems={navItems} />;
  return (
    <BipartiteLayout leftContent={leftContent} rightContent={rightContent} />
  );
};

export default Contact;
