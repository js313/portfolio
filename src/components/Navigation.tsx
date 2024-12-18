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
      className="flex flex-row  md:items-start md:flex-col md:space-y-4 md:space-x-0"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className="text-secondary no-underline hover:text-primary transition-colors duration-300 ml-5 md:ml-0"
        >
          <Animated
            className="inline-flex items-center space-x-2"
            variants={itemVariants}
            initial={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Animated
              className="text-primary"
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
