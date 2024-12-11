import React from "react";
import { motion, MotionProps } from "framer-motion";

interface AnimatedProps extends MotionProps {
  children: React.ReactNode;
  component?: string;
  className?: string;
  key?: string;
  type?: string;
  placeholder?: string;
}

const Animated: React.FC<AnimatedProps> = ({
  children,
  component = "div",
  ...motionProps
}) => {
  const MotionComponent = motion[
    component as keyof typeof motion
  ] as React.ComponentType<MotionProps>;

  return <MotionComponent {...motionProps}>{children}</MotionComponent>;
};

export default Animated;
