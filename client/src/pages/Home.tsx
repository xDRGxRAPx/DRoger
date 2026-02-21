import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import MobileNav from "@/components/layout/MobileNav";
import { ArrowRight, Play, ExternalLink, Instagram, Youtube, Twitter, Mail, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/images/hero-bg.png";
import portraitImg from "@/assets/images/artist-portrait.png";
import studioImg from "@/assets/images/studio-setup.png";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-20 md:pb-0" id="top">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" as const }}
            src={heroImg} 
            alt="D Roger performing" 
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="container relative z-20 px-6 md:px-12 text-center flex flex-col items-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-medium tracking-[0.3em] uppercase text-sm md:text-base mb-4 block">
              Família Ordem Sul
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold uppercase tracking-tighter leading-none mb-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            D<span className="text-primary">ROGER</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Artista • Beatmaker • Produtor • Compositor<br/>Ator • Escritor
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-display uppercase tracking-widest px-8 shadow-[0_0_20px_rgba(200,150,50,0.3)] text-lg h-14 rounded-none">
              Ouvir Agora
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-white/5 font-display uppercase tracking-widest px-8 text-lg h-14 rounded-none bg-transparent">
              Ver Projetos
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Bio Section */}
      <section id="bio" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              className="lg:col-span-5 relative"
              {...fadeInUp}
            >
              <div className="aspect-[4/5] relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                <img 
                  src={portraitImg} 
                  alt="D Roger Portrait" 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-primary/30 z-0 pointer-events-none hidden md:block translate-x-4 translate-y-4" />
            </motion.div>
            
            <motion.div 
              className="lg:col-span-7 lg:pl-10"
              {...fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 uppercase tracking-tight">
                A Jornada de um <span className="text-primary">Criador</span>
              </h2>
              <div className="h-1 w-20 bg-primary mb-8" />
              
              <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
                <p>
                  Nascido em Natal-RN, Francisco Iranilson da Silva, conhecido artisticamente como <strong>D Roger</strong>, é um artista múltiplo. Com raízes profundas na cultura hip hop, ele atua como beatmaker, produtor, compositor, intérprete e rapper.
                </p>
                <p>
                  Além da música, D Roger expande sua arte como ator e escritor. É o fundador e líder do grupo <strong>Família Ordem Sul</strong>, marcando presença forte na cena urbana nordestina.
                </p>
                <p>
                  Como educador e produtor técnico, criou o <strong>Beatmaker Pro FL Studio</strong>, um curso e workshop focado em capacitar a nova geração de produtores musicais, compartilhando conhecimento técnico e visão de mercado.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border/50 pt-8">
                <div>
                  <h4 className="text-3xl font-display font-bold text-foreground">15+</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Anos de Cena</p>
                </div>
                <div>
                  <h4 className="text-3xl font-display font-bold text-foreground">50+</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Beats Produzidos</p>
                </div>
                <div>
                  <h4 className="text-3xl font-display font-bold text-foreground">1M+</h4>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Streams</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-32 bg-card/30 border-y border-border/30">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6" {...fadeInUp}>
            <div>
              <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-2 block">Portfólio</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">Projetos <span className="text-primary">Principais</span></h2>
            </div>
            <Button variant="link" className="text-muted-foreground hover:text-primary p-0 flex items-center gap-2 uppercase tracking-widest text-sm font-display">
              Ver Todos <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <motion.div className="group relative overflow-hidden rounded-none bg-card border border-border/50" {...fadeInUp}>
              <div className="aspect-[16/9] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                <img src={heroImg} alt="Família Ordem Sul" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1">Grupo Musical</span>
                </div>
              </div>
              <div className="p-8 relative z-20 -mt-10 mx-6 bg-background border border-border/50 shadow-xl group-hover:border-primary/50 transition-colors duration-300">
                <h3 className="text-2xl font-display font-bold mb-3 uppercase">Família Ordem Sul</h3>
                <p className="text-muted-foreground font-light mb-6">Fundador e líder do grupo que representa a voz e a força da cultura hip hop em Natal-RN.</p>
                <a href="#" className="inline-flex items-center text-primary font-medium uppercase tracking-wider text-sm hover:underline">
                  Conhecer o Grupo <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div className="group relative overflow-hidden rounded-none bg-card border border-border/50" {...fadeInUp} transition={{ delay: 0.2 }}>
              <div className="aspect-[16/9] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                <img src={studioImg} alt="Beatmaker Pro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-3 py-1">Curso & Workshop</span>
                </div>
              </div>
              <div className="p-8 relative z-20 -mt-10 mx-6 bg-background border border-border/50 shadow-xl group-hover:border-primary/50 transition-colors duration-300">
                <h3 className="text-2xl font-display font-bold mb-3 uppercase">Beatmaker Pro FL Studio</h3>
                <p className="text-muted-foreground font-light mb-6">Curso completo e workshop prático de produção musical focado na principal DAW do mercado urbano.</p>
                <a href="#" className="inline-flex items-center text-primary font-medium uppercase tracking-wider text-sm hover:underline">
                  Inscreva-se <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Music / Beats Section */}
      <section id="music" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div className="mb-16 text-center" {...fadeInUp}>
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-2 block">Catálogo</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">Beats & <span className="text-primary">Tracks</span></h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* Audio Track Mockup 1 */}
            <motion.div className="flex items-center gap-4 p-4 border border-border/50 bg-card hover:bg-card/80 transition-colors group" {...fadeInUp}>
              <button className="w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground rounded-none shrink-0 group-hover:scale-105 transition-transform">
                <Play className="w-5 h-5 ml-1" />
              </button>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-display font-semibold truncate">Sombra do Asfalto</h4>
                <p className="text-sm text-muted-foreground truncate">D Roger • Família Ordem Sul</p>
              </div>
              <div className="hidden md:block w-32 h-6 opacity-50">
                {/* Mock waveform */}
                <div className="w-full h-full flex items-end gap-[2px]">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-1 bg-primary" style={{ height: `${Math.random() * 100}%` }} />
                  ))}
                </div>
              </div>
              <span className="text-sm font-mono text-muted-foreground">3:42</span>
            </motion.div>

            {/* Audio Track Mockup 2 */}
            <motion.div className="flex items-center gap-4 p-4 border border-border/50 bg-card hover:bg-card/80 transition-colors group" {...fadeInUp} transition={{ delay: 0.1 }}>
              <button className="w-12 h-12 flex items-center justify-center bg-primary/20 text-primary border border-primary/50 rounded-none shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Play className="w-5 h-5 ml-1" />
              </button>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-display font-semibold truncate">Trap Beat - "Noturno"</h4>
                <p className="text-sm text-muted-foreground truncate">Beatmaker Pro • Instrumental</p>
              </div>
              <div className="hidden md:block w-32 h-6 opacity-30">
                {/* Mock waveform */}
                <div className="w-full h-full flex items-end gap-[2px]">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-1 bg-foreground" style={{ height: `${Math.random() * 100}%` }} />
                  ))}
                </div>
              </div>
              <span className="text-sm font-mono text-muted-foreground">2:15</span>
            </motion.div>

            {/* Audio Track Mockup 3 */}
            <motion.div className="flex items-center gap-4 p-4 border border-border/50 bg-card hover:bg-card/80 transition-colors group" {...fadeInUp} transition={{ delay: 0.2 }}>
              <button className="w-12 h-12 flex items-center justify-center bg-primary/20 text-primary border border-primary/50 rounded-none shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Play className="w-5 h-5 ml-1" />
              </button>
              <div className="flex-1 min-w-0">
                <h4 className="text-lg font-display font-semibold truncate">Boom Bap Clássico</h4>
                <p className="text-sm text-muted-foreground truncate">Instrumental Disponível</p>
              </div>
              <div className="hidden md:block w-32 h-6 opacity-30">
                {/* Mock waveform */}
                <div className="w-full h-full flex items-end gap-[2px]">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-1 bg-foreground" style={{ height: `${Math.random() * 100}%` }} />
                  ))}
                </div>
              </div>
              <span className="text-sm font-mono text-muted-foreground">3:05</span>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="border-border rounded-none font-display uppercase tracking-widest px-8">
              Ver Catálogo Completo
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-card border-t border-border/30">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div className="mb-16 text-center" {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">O Que <span className="text-primary">Faço</span></h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Multidisciplinaridade aplicada à arte urbana e produção musical.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Produção Musical & Beats", desc: "Criação de instrumentais originais, captação, mixagem e masterização focada em música urbana." },
              { title: "Composição & Interpretação", desc: "Letras originais, ghostwriting e performances ao vivo com presença de palco marcante." },
              { title: "Workshops & Aulas", desc: "Instrução técnica em FL Studio, desde conceitos básicos até técnicas avançadas de produção." },
              { title: "Atuação", desc: "Participação em clipes, produções audiovisuais e projetos teatrais urbanos." },
              { title: "Escrita", desc: "Desenvolvimento de roteiros, poesias e narrativas que documentam a realidade das ruas." },
              { title: "Shows & Eventos", desc: "Apresentações com a Família Ordem Sul ou em formato solo." }
            ].map((service, i) => (
              <motion.div 
                key={i} 
                className="p-8 border border-border/50 hover:border-primary/50 transition-colors bg-background/50 relative group"
                {...fadeInUp}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary font-display font-bold text-xl mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {i + 1}
                </div>
                <h3 className="text-xl font-display font-bold mb-3 uppercase">{service.title}</h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 border-t border-border/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-20" />
        
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.h2 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter opacity-10 mb-8" {...fadeInUp}>
            D ROGER
          </motion.h2>
          
          <motion.div className="flex justify-center space-x-6 mb-12" {...fadeInUp}>
            <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/30 text-sm text-muted-foreground uppercase tracking-widest font-mono">
            <p>© {new Date().getFullYear()} D Roger. Todos os direitos reservados.</p>
            <p className="mt-4 md:mt-0 flex items-center">
              Natal, RN - Brasil
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
