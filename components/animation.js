import { motion } from "framer-motion";

export default function Animation({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
          y: 50,
        },
        animate: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{ type: "spring", bounce: 0 }}
    >
      {children}
    </motion.div>
  );
}
