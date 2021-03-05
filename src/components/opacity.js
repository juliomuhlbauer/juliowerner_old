import { motion } from "framer-motion";

export default function Opacity(props) {
  return (
    <motion.div
      layout="position"
      initial="initial"
      animate="animate"
      variants={{
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
      }}
      transition={{ duration: 1, type: "spring", bounce: 0 }}
    >
      {props.children}
    </motion.div>
  );
}
