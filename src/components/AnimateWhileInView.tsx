import React from "react";
import { motion } from "framer-motion";
``;

interface AnimateWhileInViewProps {
  children: React.ReactNode;
  viewport?: number; // Options for viewport detection
  transition?: number; // Transition options
  // Define any props you need here
}

const AnimateWhileInView: React.FC<AnimateWhileInViewProps> = ({
  children,
  viewport,
  transition,
}) => {
  const defaultViewport = { once: true, amount: viewport || 0.2 };
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // Initial state (hidden, slightly below)
      whileInView={{ opacity: 1, y: 0 }} // Animate to this state when in view
      viewport={defaultViewport} // Options for viewport detection
      transition={{ duration: transition, ease: "easeOut" }} // How the animation should behave
    >
      {children}
    </motion.div>
  );
};

export default AnimateWhileInView;
