import React from "react";
import { Link } from "react-router-dom";
import Animated from "./Animated";

const Navigation: React.FC = () => {
  const navItems = [
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
    { name: "About", to: "/about" },
  ];

  // Variants for the parent container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger each child by 0.2 seconds
      },
    },
  };

  // Variants for each item
  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <Animated
      className="flex flex-col items-center space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="relative text-textSecondary no-underline hover:text-textPrimary transition-colors duration-300"
        >
          <Animated
            className="inline-block"
            variants={itemVariants}
            initial={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Animated
              className="absolute left-[-20px] text-textPrimary"
              variants={itemVariants}
              initial={{ x: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              component="span"
            >
              &rsaquo;
            </Animated>
            <Animated
              whileHover={{ x: 5 }} // Slide text slightly to the right
            >
              {item.name}
            </Animated>
          </Animated>
        </Link>
      ))}
    </Animated>
  );
};

export default Navigation;
