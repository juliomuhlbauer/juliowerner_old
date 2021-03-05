import { motion } from "framer-motion";

export default function Animation(props) {
  return (
    <motion.div
      layout="position"
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
      transition={{ duration: 1, type: "spring", bounce: 0 }}
    >
      {props.children}
    </motion.div>
  );
}
