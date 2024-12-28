import React from "react";
import Navigation from "components/Navigation";
import { NavItem } from "types/navigation";
import BipartiteLayout from "layouts/BipartiteLayout";
import ContactForm from "components/ContactForm";

const navItems: NavItem[] = [
  { name: "Home", to: "/home" },
  {
    name: "Github",
    to: process.env.REACT_APP_GITHUB_LINK || "https://www.github.com/js313",
    openInNewTab: true,
  },
  {
    name: "LinkedIn",
    to:
      process.env.REACT_APP_LINKEDIN_LINK ||
      "https://www.linkedin.com/in/jeenit-sharma",
    openInNewTab: true,
  },
  {
    name: "Email",
    to: process.env.REACT_APP_EMAIL || "mailto:sharmajeenit2000@gmail.com",
    openInNewTab: true,
  },
];

const Contact: React.FC = () => {
  const leftContent = <ContactForm />;

  const rightContent = <Navigation navItems={navItems} />;
  return (
    <BipartiteLayout leftContent={leftContent} rightContent={rightContent} />
  );
};

export default Contact;
