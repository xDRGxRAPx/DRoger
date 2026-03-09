import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxImage({ src }: any) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-80px", "80px"]);

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.img
        src={src}
        style={{ y }}
        alt="Parallax"
        className="w-full h-[500px] object-cover"
      />
    </div>
  );
}
