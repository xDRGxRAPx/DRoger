import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StorySection({ title, text, image }: any) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6"
    >
      <motion.div
        style={{ scale, opacity }}
        className="max-w-6xl grid md:grid-cols-2 gap-12 items-center"
      >
        <img
          src={image}
          alt={title}
          className="rounded-xl shadow-2xl"
        />

        <div>
          <h2 className="text-5xl font-bold mb-6 font-display">
            {title}
          </h2>

          <p className="text-lg opacity-80">
            {text}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
