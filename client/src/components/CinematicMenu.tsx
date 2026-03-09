import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CinematicMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-6 right-6 z-[10000] text-white text-xl font-display font-bold tracking-widest"
      >
        MENU
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center gap-10 text-white text-4xl font-display"
          >
            <motion.a 
              whileHover={{ scale: 1.1 }} 
              href="/"
              onClick={() => setOpen(false)}
            >
              Home
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }} 
              href="#bio"
              onClick={() => setOpen(false)}
            >
              About
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }} 
              href="#impacto"
              onClick={() => setOpen(false)}
            >
              Projects
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }} 
              href="#contato"
              onClick={() => setOpen(false)}
            >
              Contact
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
