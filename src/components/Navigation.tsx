import React from "react";
import { Link } from "react-router-dom";
import Animated from "./Animated";
import { NavigationProps } from "types/navigation";

const Navigation: React.FC<NavigationProps> = ({ navItems }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <Animated
      className="flex flex-col items-start space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="relative text-secondary no-underline hover:text-primary transition-colors duration-300"
        >
          <Animated
            className="inline-block"
            variants={itemVariants}
            initial={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Animated
              className="absolute left-[-20px] text-primary"
              variants={itemVariants}
              initial={{ x: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              component="span"
            >
              &rsaquo;
            </Animated>
            <Animated whileHover={{ x: 5 }}>{item.name}</Animated>
          </Animated>
        </Link>
      ))}
    </Animated>
  );
};

export default Navigation;
