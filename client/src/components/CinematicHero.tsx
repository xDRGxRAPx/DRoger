import { motion } from "framer-motion";

export default function CinematicHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        className="absolute w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      <motion.div
        className="relative z-10 text-center text-white"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
          D ROGER
        </h1>

        <p className="mt-6 text-xl opacity-80">
          Artistic Journey
        </p>
      </motion.div>
    </section>
  );
}
