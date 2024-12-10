import React from "react";
import { motion, MotionProps } from "framer-motion";

interface AnimatedProps extends MotionProps {
  children: React.ReactNode;
  component?: string;
  className?: string;
  key?: string;
}

const Animated: React.FC<AnimatedProps> = ({
  children,
  component = "div", // Default to "div" if not specified
  ...motionProps
}) => {
  // Dynamically choose the motion component based on the 'component' prop
  const MotionComponent = motion[
    component as keyof typeof motion
  ] as React.ComponentType<MotionProps>;

  return <MotionComponent {...motionProps}>{children}</MotionComponent>;
};

export default Animated;
