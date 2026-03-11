import { motion } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import MobileNav from "@/components/layout/MobileNav";
import {
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Radio,
  Headphones,
  Mic2,
  Music4,
  GraduationCap,
  Disc3,
  Send,
  FileText,
  ArrowUpRight,
  Sparkles,
  Target,
  Users,
  Building,
  TrendingUp,
  Award,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/images/Hero-bg.png";
import portraitImg from "@/assets/images/artist-portrait.jpeg";
import studioImg from "@/assets/images/studio.jpeg";
import studioImpacto from "@/assets/images/studio-impacto.png";

/* ── Motion Config ─────────────────────────────────────── */
const smooth = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.9, ease: smooth },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 1, ease: smooth },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 1, ease: smooth },
};

/* ── Helpers ───────────────────────────────────────────── */
const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

function Divider() {
  return (
    <div className="relative py-px">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
    </div>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-primary tracking-[0.35em] uppercase text-[10px] md:text-xs font-semibold mb-6 block">
      <span className="w-6 h-px bg-primary/60" />
      {children}
      <span className="w-6 h-px bg-primary/60" />
    </span>
  );
}

/* ══════════════════════════════════════════════════════════
   HOME
   ══════════════════════════════════════════════════════════ */
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

      return (
        <div className="relative min-h-screen bg-background overflow-hidden">

          <div className="film-grain" />
      <Navbar />

      {/* ━━━ HERO ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-background/75 to-background z-10" />
            <motion.img
            
              initial={{ scale: 1.25 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: smooth }}
            
            src={heroImg}
            alt="D Roger"
            className="w-full h-full object-cover object-top will-change-transform"
            loading="eager"
          /><div className="hero-light" />
          {/* Film Grain */}
          <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />{/* Golden Light */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-40 left-1/2 w-[900px] h-[900px] bg-primary/20 blur-[180px] animate-pulse" />
          </div>
        </div>

        <div className="container relative z-20 px-6 md:px-12 text-center flex flex-col items-center">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.2, ease: smooth }}
            className="h-px bg-primary/70 mb-10 overflow-hidden"
          />

          <motion.h1
            className="text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[10rem] font-display font-bold uppercase tracking-[-0.04em] leading-[0.85] mb-7 text-transparent bg-clip-text bg-gradient-to-b from-white via-white/95 to-white/40"
            initial={{ opacity: 0, y: 30, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "-0.04em" }}
            transition={{ duration: 1.2, delay: 0.3, ease: smooth }}
          >
            D ROGER
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-primary/90 font-medium tracking-[0.3em] uppercase mb-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Artista · Beatmaker · Produtor Cultural
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-muted-foreground/70 max-w-xl mx-auto font-light leading-relaxed mb-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            18 anos de cultura hip hop, produção independente
            e impacto territorial na Zona Sul de Natal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              onClick={() => scrollTo("bio")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-display uppercase tracking-[0.2em] px-10 shadow-[0_0_40px_rgba(200,150,50,0.2)] text-xs sm:text-sm h-12 sm:h-14 rounded-none"
            >
              Conhecer a Trajetória
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("contato")}
              className="border-border/50 hover:border-primary hover:text-primary font-display uppercase tracking-[0.2em] px-10 text-xs sm:text-sm h-12 sm:h-14 rounded-none"
            >
              Contato
            </Button>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-primary/50" />
          </motion.div>
        </motion.div>
      </section>

      <Divider />

      {/* ━━━ BIO / INSTITUCIONAL ━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="bio" className="py-24 sm:py-28 md:py-36 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28 items-center">

            {/* Portrait */}
            <motion.div className="relative" {...scaleIn}>
              <div className="aspect-[3/4] sm:aspect-[4/5] relative overflow-hidden group">
                <img
                  src={portraitImg}
                  alt="D Roger"
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-[1.2s] ease-out group-hover:scale-[1.02]"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-primary/40" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-primary/40" />
              </div>
            </motion.div>

            {/* Text */}
            <motion.div {...fadeUp} className="flex flex-col justify-center">
              <SectionTag>Institucional</SectionTag>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold mb-8 sm:mb-10 uppercase tracking-tight leading-[1.05]">
                Consolidação
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/40">
                  de um Legado
                </span>
              </h2>

              <div className="space-y-5 text-muted-foreground text-base sm:text-lg font-light leading-[1.8]">
                <p>
                  Com mais de{" "}
                  <strong className="text-foreground font-medium">
                    18 anos de atuação contínua
                  </strong>
                  , D ROGER construiu uma trajetória que transcende a
                  performance artística, posicionando-se como agente de fomento
                  cultural na Zona Sul de Natal.
                </p>
                <p>
                  Artista, beatmaker e produtor musical, acumula dezenas de
                  apresentações ao vivo e{" "}
                  <strong className="text-foreground font-medium">
                    mais de 100 mil streams
                  </strong>{" "}
                  em produções autorais e colaborações estratégicas.
                </p>
                <p>
                  Sua visão se materializa no projeto{" "}
                  <strong className="text-foreground font-medium">
                    Ordem Sul
                  </strong>{" "}
                  — núcleo que une produção técnica, educação e desenvolvimento
                  socioartístico para a juventude potiguar.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ━━━ ORDEM SUL ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 sm:py-28 md:py-36 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20" {...fadeUp}>
            <SectionTag>Plataforma Cultural</SectionTag>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight mb-6 sm:mb-8">
              Ordem Sul
            </h2>

            <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
              <div className="w-8 h-px bg-primary/30" />
              <Sparkles className="w-3.5 h-3.5 text-primary/50" />
              <div className="w-8 h-px bg-primary/30" />
            </div>

            <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed">
              Plataforma cultural idealizada por D ROGER, estruturada como
              núcleo híbrido de criação, formação e articulação territorial
              na Zona Sul de Natal.
            </p>
          </motion.div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Music4 className="w-4 h-4" />,
                title: "Criação Artística",
                text: "Produção musical autoral, performance e construção de identidade estética conectada à cultura hip hop periférica.",
              },
              {
                icon: <GraduationCap className="w-4 h-4" />,
                title: "Formação",
                text: "Oficinas, laboratórios criativos e estímulo ao desenvolvimento de novos talentos nos territórios da Zona Sul.",
              },
              {
                icon: <Disc3 className="w-4 h-4" />,
                title: "Circulação",
                text: "Organização de ações culturais, articulação territorial e estruturação gradual de selo independente.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: smooth }}
                className="card-hover group relative p-8 sm:p-10 border border-border/20 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-700"
              >
                {/* Top line hover */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                  {item.icon}
                </div>

                <h3 className="uppercase font-semibold text-sm tracking-[0.15em] mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-light text-sm leading-[1.8]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ━━━ INFRAESTRUTURA ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="infraestrutura" className="py-24 sm:py-28 md:py-36 bg-card/20 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div className="mb-16 sm:mb-20 text-center max-w-3xl mx-auto" {...fadeUp}>
            <SectionTag>
              <Headphones className="w-3 h-3" /> Base Operacional
            </SectionTag>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight mb-6 sm:mb-8">
              Infraestrutura &amp;{" "}
              <span className="text-primary">Produção</span>
            </h2>

            <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
              <div className="w-8 h-px bg-primary/30" />
              <Sparkles className="w-3.5 h-3.5 text-primary/50" />
              <div className="w-8 h-px bg-primary/30" />
            </div>

            <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed">
              Capacidade técnica em múltiplos ambientes. D ROGER atua como
              responsável direto pelo núcleo de produção musical, gerenciando
              recursos e direção artística.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Studio image */}
            <motion.div className="lg:col-span-7 relative" {...scaleIn}>
              <div className="aspect-[4/3] bg-black border border-border/30 p-2 md:p-3 rounded-lg shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-20 pointer-events-none" />

                <div className="absolute inset-0 z-0 overflow-hidden rounded-lg">
                  <img
                    src={studioImg}
                    alt=""
                    className="w-full h-full object-cover filter blur-2xl scale-125 opacity-30 brightness-75"
                  />
                </div>

                <div className="w-full h-full relative z-10 overflow-hidden rounded-md">
                  <img
                    src={studioImg}
                    alt="Home Studio D Roger"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
            </motion.div>

            {/* Info cards */}
            <div className="lg:col-span-5 space-y-6">
              {[
                {
                  icon: <Headphones className="w-4 h-4" />,
                  title: "Home Studio",
                  text: "Núcleo central de operações. Ambiente tratado acusticamente para captação vocal, beatmaking, mixagem e masterização.",
                },
                {
                  icon: <Building className="w-4 h-4" />,
                  title: "Espaço Cultural Parceiro",
                  text: "Sede com CNPJ ativo para o núcleo de produção musical. Ambiente dedicado a workshops, integração do coletivo e impacto comunitário direto.",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.2, ease: smooth }}
                  className="group p-7 sm:p-8 border border-border/20 bg-background/60 backdrop-blur-sm hover:border-primary/30 transition-all duration-700 relative overflow-hidden"
                >
                  {/* Left accent */}
                  <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-primary/60 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      {card.icon}
                    </div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em]">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground font-light text-sm leading-[1.8] pl-11">
                    {card.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ━━━ ATUAÇÃO + MÉTRICAS ━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 sm:py-28 md:py-36 relative overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <img src={studioImpacto} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <motion.div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto" {...fadeUp}>
            <SectionTag>Atuação Profissional</SectionTag>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight mb-6 sm:mb-8">
              Arte, Produção &amp;{" "}
              <span className="text-primary">Impacto</span>
            </h2>

            <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
              <div className="w-8 h-px bg-primary/30" />
              <Target className="w-3.5 h-3.5 text-primary/50" />
              <div className="w-8 h-px bg-primary/30" />
            </div>

            <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed">
              Performance artística, produção musical e articulação cultural
              integradas em um modelo híbrido de criação autoral e
              desenvolvimento territorial.
            </p>
          </motion.div>

          {/* Activity cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {[
              {
                icon: <Mic2 className="w-4 h-4" />,
                title: "Shows & Performances",
                text: "Apresentações autorais em eventos culturais, festivais independentes e ações comunitárias.",
              },
              {
                icon: <Music4 className="w-4 h-4" />,
                title: "Produção Musical",
                text: "Beatmaking, gravação, mixagem e direção artística de projetos autorais e de artistas parceiros.",
              },
              {
                icon: <GraduationCap className="w-4 h-4" />,
                title: "Formação & Projetos",
                text: "Workshops, projetos culturais e iniciativas de fortalecimento da cultura hip hop local.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: smooth }}
                className="card-hover group relative p-8 sm:p-10 border border-border/20 bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-700"
              >
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                  {item.icon}
                </div>

                <h3 className="uppercase font-semibold text-sm tracking-[0.15em] mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-light text-sm leading-[1.8]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
          {/* ━━━ FORMAÇÃO CULTURAL ━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section className="py-24 sm:py-28 md:py-36 relative">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">

              <motion.div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto" {...fadeUp}>
                <SectionTag>Formação Cultural</SectionTag>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight mb-6 sm:mb-8">
                  Formação & Capacitação
                </h2>

                <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed">
                  Paralelamente à produção artística, D ROGER desenvolve iniciativas
                  formativas voltadas à produção musical independente, cultura hip hop
                  e desenvolvimento criativo de jovens artistas da Zona Sul de Natal.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">

                <div className="p-8 border border-border/20 bg-card/30">
                  <h3 className="uppercase text-sm tracking-[0.2em] mb-4 text-primary">
                    Beatmaker Pro
                  </h3>
                  <p className="text-muted-foreground text-sm font-light leading-[1.8]">
                    Oficina de produção musical no FL Studio abordando criação de beats,
                    estrutura rítmica e fundamentos de produção dentro da estética
                    hip hop contemporânea.
                  </p>
                </div>

                <div className="p-8 border border-border/20 bg-card/30">
                  <h3 className="uppercase text-sm tracking-[0.2em] mb-4 text-primary">
                    Laboratório Criativo
                  </h3>
                  <p className="text-muted-foreground text-sm font-light leading-[1.8]">
                    Espaço de experimentação artística onde participantes desenvolvem
                    composições, beats e projetos autorais conectados à cultura urbana.
                  </p>
                </div>

                <div className="p-8 border border-border/20 bg-card/30">
                  <h3 className="uppercase text-sm tracking-[0.2em] mb-4 text-primary">
                    Cultura Hip Hop
                  </h3>
                  <p className="text-muted-foreground text-sm font-light leading-[1.8]">
                    Vivências culturais abordando história, identidade e impacto social
                    do movimento hip hop nas periferias brasileiras.
                  </p>
                </div>

              </div>

            </div>
          </section>
          <Divider />

          {/* ━━━ REGISTRO ARTÍSTICO ━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section className="py-24 sm:py-28 md:py-36 bg-card/20 relative">

            <div className="container mx-auto px-6 md:px-12 lg:px-16">

              <motion.div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto" {...fadeUp}>
                <SectionTag>Registro Artístico</SectionTag>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight mb-6 sm:mb-8">
                  Fragmentos da Trajetória
                </h2>

                <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed">
                  Registros visuais de apresentações, produção musical e encontros
                  culturais que marcam a trajetória de D ROGER na cena independente.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                <div className="aspect-square bg-card border border-border/20"></div>
                <div className="aspect-square bg-card border border-border/20"></div>
                <div className="aspect-square bg-card border border-border/20"></div>
                <div className="aspect-square bg-card border border-border/20"></div>
                <div className="aspect-square bg-card border border-border/20"></div>
                <div className="aspect-square bg-card border border-border/20"></div>

              </div>

            </div>

          </section>
          {/* Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: <TrendingUp className="w-3.5 h-3.5" />,
                value: "18+",
                label: "Anos de Atuação",
              },
              {
                icon: <Users className="w-3.5 h-3.5" />,
                value: "100k+",
                label: "Streams",
              },
              {
                icon: <Award className="w-3.5 h-3.5" />,
                value: "50+",
                label: "Performances",
              },
              {
                icon: <Building className="w-3.5 h-3.5" />,
                value: "CNPJ",
                label: "Base Institucional",
              },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: smooth }}
                className="p-6 sm:p-8 border border-border/15 text-center bg-card/20 group hover:border-primary/20 transition-all duration-700"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {m.icon}
                  </div>
                </div>
                <h4 className="text-2xl sm:text-3xl font-bold text-primary mb-2 font-display">
                  {m.value}
                </h4>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  {m.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ━━━ CONTRATANTES & EDITAIS ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 sm:py-28 md:py-36 bg-card/20 relative">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <motion.div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto" {...fadeUp}>
            <SectionTag>Para Contratantes &amp; Instituições</SectionTag>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight mb-6 sm:mb-8">
              Disponibilidade{" "}
              <span className="text-primary">Profissional</span>
            </h2>

            <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
              <div className="w-8 h-px bg-primary/30" />
              <FileText className="w-3.5 h-3.5 text-primary/50" />
              <div className="w-8 h-px bg-primary/30" />
            </div>

            <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed">
              Estrutura preparada para atender demandas artísticas e
              institucionais. Projeto alinhado às diretrizes de editais
              públicos, premiações e parcerias estratégicas.
            </p>
          </motion.div>

          {/* Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {[
              {
                title: "Modalidades",
                items: [
                  "Shows e apresentações culturais",
                  "Workshops de produção musical",
                  "Produção musical e direção artística",
                  "Projetos culturais via edital",
                  "Parcerias institucionais",
                ],
              },
              {
                title: "Estrutura Técnica",
                items: [
                  "Rider técnico sob solicitação",
                  "Base operacional própria (Home Studio)",
                  "Espaço Cultural parceiro com CNPJ ativo",
                  "Execução híbrida: presencial + formativo",
                  "Documentação para LPG, Aldir Blanc e Funarte",
                ],
              },
            ].map((col, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: smooth }}
                className="group p-8 sm:p-10 border border-border/20 bg-background/60 backdrop-blur-sm hover:border-primary/25 transition-all duration-700"
              >
                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {col.title}
                </h3>
                <ul className="space-y-4">
                  {col.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-muted-foreground font-light text-sm leading-relaxed"
                    >
                      <span className="text-primary/50 text-[10px] mt-1.5 shrink-0">
                        ◆
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div className="text-center" {...fadeUp}>
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="w-8 h-px bg-primary/20" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
                Material Institucional
              </span>
              <div className="w-8 h-px bg-primary/20" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/portfolio-institucional.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground px-8 sm:px-10 py-3.5 sm:py-4 uppercase tracking-[0.18em] font-semibold text-xs hover:opacity-90 transition shadow-[0_0_40px_rgba(200,150,50,0.15)]"
              >
                <FileText className="w-3.5 h-3.5" />
                Dossiê Artístico (PDF)
              </a>

              <a
                href="mailto:bboyrhoger@gmail.com?subject=Proposta%20Institucional%20-%20D%20Roger"
                className="inline-flex items-center justify-center gap-2.5 border border-border/40 px-8 sm:px-10 py-3.5 sm:py-4 uppercase tracking-[0.18em] font-semibold text-xs hover:border-primary hover:text-primary transition duration-300"
              >
                <Send className="w-3.5 h-3.5" />
                Enviar Proposta
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* ━━━ CTA FINAL ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-32 sm:py-36 md:py-44 relative overflow-hidden">
        {/* Ambient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-primary/6 blur-[120px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 md:px-12 text-center relative z-10 max-w-3xl">
          <motion.div {...fadeUp}>
            <SectionTag>Consolidação 2026</SectionTag>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight leading-[1.05] mb-8 sm:mb-10">
              Arte com Estrutura.
              <br />
              <span className="text-primary">Visão com Direção.</span>
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg font-light leading-[1.8] mb-12 sm:mb-14">
              A nova fase consolida uma trajetória artística organizada em base
              técnica, institucional e estratégica. O Projeto Ordem Sul avança
              como núcleo de produção, formação e expansão territorial.
              <br /><br />
              <span className="text-foreground/70 font-normal">
                Para contratantes, parceiros e instituições —
                este é o momento de construir junto.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5584996193537?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20contratação%20e%20parcerias."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground px-8 sm:px-10 py-3.5 sm:py-4 uppercase tracking-[0.18em] font-semibold text-xs hover:opacity-90 transition shadow-[0_0_40px_rgba(200,150,50,0.2)]"
              >
                Contratar Show / Workshop
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="mailto:bboyrhoger@gmail.com?subject=Parceria%20Cultural%20-%20D%20Roger"
                className="inline-flex items-center justify-center gap-2.5 border border-border/40 px-8 sm:px-10 py-3.5 sm:py-4 uppercase tracking-[0.18em] font-semibold text-xs hover:border-primary hover:text-primary transition duration-300"
              >
                Parceria Estratégica
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ━━━ FOOTER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <footer id="contato" className="py-24 sm:py-28 border-t border-border/20 relative bg-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 sm:gap-16 mb-16 sm:mb-20">

            {/* Contact info */}
            <motion.div {...fadeUp}>
              <SectionTag>Contato</SectionTag>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-4">
                Contato{" "}
                <span className="text-primary">Profissional</span>
              </h2>
              <p className="text-muted-foreground font-light mb-10 sm:mb-12 max-w-md text-sm sm:text-base">
                Para propostas de shows, workshops, produções musicais ou
                parcerias institucionais.
              </p>

              <div className="space-y-5">
                {[
                  {
                    icon: <Mail className="w-4 h-4" />,
                    label: "Email",
                    value: "bboyrhoger@gmail.com",
                    href: "mailto:bboyrhoger@gmail.com",
                  },
                  {
                    icon: <Mail className="w-4 h-4" />,
                    label: "Email Alternativo",
                    value: "realtraprn@gmail.com",
                    href: "mailto:realtraprn@gmail.com",
                  },
                  {
                    icon: <Phone className="w-4 h-4" />,
                    label: "WhatsApp",
                    value: "(84) 99619-3537",
                    href: "https://wa.me/5584996193537",
                  },
                  {
                    icon: <Phone className="w-4 h-4" />,
                    label: "Celular",
                    value: "(84) 99935-9559",
                    href: "tel:+5584999359559",
                  },
                ].map((c, i) => (
                  <a key={i} href={c.href} className="flex items-center group">
                    <div className="w-10 h-10 rounded-full border border-border/30 bg-card/40 flex items-center justify-center mr-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 shrink-0">
                      {c.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] mb-0.5">
                        {c.label}
                      </p>
                      <p className="text-foreground text-sm font-medium group-hover:text-primary transition-colors truncate">
                        {c.value}
                      </p>
                    </div>
                  </a>
                ))}

                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full border border-border/30 bg-card/40 flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] mb-0.5">
                      Localização
                    </p>
                    <p className="text-foreground text-sm font-medium">
                      Zona Sul, Natal — RN
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social + Badge */}
            <motion.div {...fadeUp} transition={{ delay: 0.15 }} className="flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-display font-bold uppercase tracking-wide mb-6 sm:mb-8">
                  Redes Sociais
                </h3>
                <div className="flex space-x-3 mb-10 sm:mb-12">
                  {[
                    {
                      icon: <Instagram className="w-5 h-5" />,
                      href: "https://instagram.com/droger_oficial",
                    },
                    {
                      icon: <Youtube className="w-5 h-5" />,
                      href: "http://www.youtube.com/@DRogerMC",
                    },
                    {
                      icon: <Radio className="w-5 h-5" />,
                      href: "#",
                    },
                  ].map((s, i) => (
                    <a
                      key={i}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full border border-border/30 bg-card/40 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_rgba(200,150,50,0.3)]"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Ordem Sul badge */}
              <div className="relative p-7 sm:p-8 bg-card/30 border border-border/20 group hover:border-primary/25 transition-all duration-700">
                <div className="absolute top-0 left-0 w-full h-px bg-primary/50" />
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <h4 className="font-display font-bold uppercase tracking-[0.15em] text-xs text-primary">
                    Projeto Ordem Sul
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                  Plataforma de fomento à cultura hip hop, produção independente
                  e desenvolvimento artístico territorial.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 sm:pt-10 border-t border-border/15 text-[10px] text-muted-foreground/50 uppercase tracking-[0.2em]">
            <p>© {new Date().getFullYear()} D ROGER. Todos os direitos reservados.</p>
            <p className="mt-3 md:mt-0">Direção Artística — D ROGER</p>
          </div>
        </div>
      </footer>

      <div id="releases" className="hidden" />
      <MobileNav />      {/* ✅ Barra Navegação Inferior Mobile */}
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 2, ease: smooth }}
            className="md:hidden fixed bottom-0 left-0 right-0 z-40 px-4 pb-2 pt-3 bg-black/85 backdrop-blur-xl border-t border-white/5"
          >
            <div className="grid grid-cols-4 gap-1">

              {[
                { icon: <Home size={18} />, label: "Início",   action: () => window.scrollTo({top:0, behavior:'smooth'}) },
                { icon: <User size={18} />, label: "Bio",      action: () => scrollTo("bio") },
                { icon: <Users size={18} />, label: "Projeto", action: () => scrollTo("ordemsul") },
                { icon: <Mail size={18} />,  label: "Contato", action: () => scrollTo("contato") },
              ].map((item, i) => (
                <button 
                  key={i}
                  onClick={item.action}
                  className="flex flex-col items-center gap-1 py-2 text-muted-foreground hover:text-primary transition-all duration-200 active:scale-0.95"
                >
                  {item.icon}
                  <span className="text-[10px] uppercase tracking-[0.1em] font-medium">{item.label}</span>
                </button>
              ))}

            </div>
          </motion.div>

          <MobileNav />
          </div>
          )
          }
    </div>
  );
}