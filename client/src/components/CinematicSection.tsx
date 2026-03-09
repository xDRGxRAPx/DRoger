import { motion } from "framer-motion";

export default function CinematicSection({ children }: any) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.section>
  );
}
