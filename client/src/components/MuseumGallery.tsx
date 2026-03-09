import { motion } from "framer-motion";
import studioImpacto from "@/assets/images/studio-impacto.png";
import heroImg from "@/assets/images/Hero-bg.png";
import portraitImg from "@/assets/images/artist-portrait.jpeg";
import studioImg from "@/assets/images/studio.jpeg";

const artworks = [
  { src: studioImpacto, title: "Studio Impacto" },
  { src: heroImg, title: "Moments" },
  { src: portraitImg, title: "Portrait" },
  { src: studioImg, title: "Studio Sessions" }
];

export default function MuseumGallery() {
  return (
    <section className="py-32 max-w-7xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-20">Gallery</h2>

      <div className="grid md:grid-cols-2 gap-16">
        {artworks.map((artwork, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="group"
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={artwork.src}
                alt={artwork.title}
                className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <p className="mt-6 text-center opacity-70">
              {artwork.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
