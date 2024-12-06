import React from "react";
import { motion, MotionProps } from "framer-motion";

interface AnimatedDivProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
}

const AnimatedDiv: React.FC<AnimatedDivProps> = ({
  children,
  delay = 0,
  ...motionProps
}) => {
  const defaultMotionProps = {
    initial: { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
  };
  return (
    <motion.div {...defaultMotionProps} {...motionProps}>
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
