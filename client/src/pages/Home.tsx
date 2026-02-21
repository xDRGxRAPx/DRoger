import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import MobileNav from "@/components/layout/MobileNav";
import { ArrowRight, ExternalLink, Instagram, Youtube, Mail, Phone, MapPin, Building2, Users, Radio, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImg from "@/assets/images/hero-bg.png";
import portraitImg from "@/assets/images/artist-portrait.png";
import studioImg from "@/assets/images/studio-setup.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: "easeOut" as const }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemEffect = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-20 md:pb-0" id="top">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background z-10" />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" as const }}
            src={heroImg} 
            alt="D Roger performing" 
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="container relative z-20 px-6 md:px-12 text-center flex flex-col items-center mt-12">
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold uppercase tracking-tighter leading-none mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/50 drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            D ROGER
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-primary font-medium tracking-widest uppercase mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Artista | Produtor Musical | Agente Cultural
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-2xl text-muted-foreground/90 max-w-3xl mx-auto font-light leading-relaxed mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            18 anos fortalecendo a cultura hip hop da Zona Sul de Natal.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-display uppercase tracking-widest px-10 shadow-[0_0_20px_rgba(200,150,50,0.3)] text-base h-14 rounded-none">
              Conhecer a Trajetória
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Descubra</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary/80 to-transparent" />
        </motion.div>
      </section>

      {/* Bio / Institucional Section */}
      <section id="bio" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              className="relative"
              {...fadeInUp}
            >
              <div className="aspect-[4/5] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent z-10" />
                <img 
                  src={portraitImg} 
                  alt="D Roger Portrait" 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 blur-3xl rounded-full -z-10" />
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              className="flex flex-col justify-center"
            >
              <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Institucional</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 uppercase tracking-tight leading-tight">
                Consolidação de um <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Legado</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground text-lg md:text-xl font-light leading-relaxed">
                <p>
                  Com mais de <strong className="text-foreground font-medium">18 anos de atuação contínua</strong>, D ROGER construiu uma trajetória sólida que transcende a performance artística, posicionando-se como um pilar de fomento cultural na Zona Sul de Natal.
                </p>
                <p>
                  Como artista e produtor musical, acumula dezenas de apresentações ao vivo e participações em eventos de relevância, somando <strong className="text-foreground font-medium">mais de 100 mil streams</strong> acumulados em colaborações e produções originais.
                </p>
                <p>
                  Sua visão estratégica culminou na formalização de sua ação cultural através do coletivo <strong className="text-foreground font-medium">Ordem Sul</strong>, estabelecendo um núcleo de impacto que une produção técnica, educação e desenvolvimento socioartístico para a juventude potiguar.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impacto & Alcance Section */}
      <section id="impacto" className="py-24 md:py-32 bg-secondary/30 border-y border-border/30 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="container mx-auto px-6 md:px-12">
          <motion.div className="mb-20 text-center" {...fadeInUp}>
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 block">Métricas</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight">Impacto & <span className="text-primary">Alcance</span></h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { value: "18+", label: "Anos de Atividade", desc: "Consistência e dedicação à cultura urbana." },
              { value: "100k+", label: "Streams", desc: "Acessos acumulados em produções e colaborações." },
              { value: "Dezenas", label: "Performances Ao Vivo", desc: "Presença de palco e conexão com o público." },
              { value: "1º", label: "Núcleo Formalizado", desc: "Ação cultural institucionalizada via Ordem Sul." }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                variants={itemEffect}
                className="p-8 border border-border/50 bg-background/50 hover:border-primary/50 transition-colors group"
              >
                <h4 className="text-5xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{stat.value}</h4>
                <p className="text-sm text-foreground font-medium uppercase tracking-wider mb-3">{stat.label}</p>
                <div className="w-8 h-px bg-border group-hover:bg-primary/50 mb-3 transition-colors" />
                <p className="text-sm text-muted-foreground font-light">{stat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projeto Cultural Section */}
      <section id="projeto-cultural" className="py-24 md:py-32 relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              className="lg:col-span-6 lg:pr-10"
              {...fadeInUp}
            >
              <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 block flex items-center gap-2">
                <Users className="w-4 h-4" /> Formação & Fomento
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 uppercase tracking-tight leading-tight">
                Projeto Cultural <br/><span className="text-primary">Ordem Sul</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed mb-10">
                <p>
                  O Projeto Cultural Ordem Sul transcende a produção musical isolada, estabelecendo-se como um polo de capacitação profissional para a juventude periférica.
                </p>
                <p>
                  A iniciativa principal conta com um <strong>workshop de 40 horas</strong> dedicado a <strong>20 participantes</strong>, focando em técnicas de produção, beatmaking e fundamentos do mercado da música independente.
                </p>
                <p>
                  A execução ocorre em formato <strong>híbrido</strong>: em parceria estratégica com um Espaço Cultural local (instituição formalizada e com CNPJ ativo), e etapas complementares realizadas na base de operações (Home Studio).
                </p>
              </div>

              <ul className="space-y-4 font-medium text-foreground">
                <li className="flex items-center gap-4 border border-border/50 p-4 bg-secondary/10">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <span>Parceria Institucional Formalizada (CNPJ Ativo)</span>
                </li>
                <li className="flex items-center gap-4 border border-border/50 p-4 bg-secondary/10">
                  <div className="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <span>Workshop de 40h para 20 alunos</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="lg:col-span-6 relative"
              {...fadeInUp}
            >
              <div className="aspect-square relative overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img 
                  src={heroImg} 
                  alt="Projeto Cultural Ordem Sul" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border border-border/50 z-20 pointer-events-none" />
                
                <div className="absolute bottom-8 left-8 z-20">
                  <div className="bg-background/90 backdrop-blur-md p-6 border border-border/50 inline-block">
                    <h4 className="font-display font-bold text-2xl uppercase mb-1">Impacto Direto</h4>
                    <p className="text-primary font-medium tracking-widest uppercase text-sm">Capacitação Técnica</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infraestrutura Section */}
      <section id="infraestrutura" className="py-24 md:py-32 bg-card border-t border-border/30">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto" {...fadeInUp}>
            <span className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 block flex items-center justify-center gap-2">
              <Headphones className="w-4 h-4" /> Base Operacional
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tight mb-6">Infraestrutura & <span className="text-primary">Produção</span></h2>
            <p className="text-muted-foreground text-lg font-light leading-relaxed">
              D ROGER atua como responsável direto pelo núcleo de produção musical, gerenciando os recursos técnicos e a direção artística dos projetos associados à Ordem Sul.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="group relative overflow-hidden rounded-none bg-background border border-border/50" 
              {...fadeInUp}
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-700 z-10" />
                <img src={studioImg} alt="Home Studio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-2xl font-display font-bold mb-2 uppercase">Home Studio</h3>
                  <span className="bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-widest px-3 py-1 backdrop-blur-sm">Núcleo Central</span>
                </div>
              </div>
              <div className="p-8">
                <p className="text-muted-foreground font-light leading-relaxed">
                  Base de operações central para captação, beatmaking e pós-produção. Ambiente otimizado para o desenvolvimento do catálogo musical próprio e produções de artistas parceiros.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative overflow-hidden rounded-none bg-background border border-border/50" 
              {...fadeInUp} 
              transition={{ delay: 0.2 }}
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10" />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-700 z-10" />
                <img src={heroImg} alt="Espaço Cultural" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-2xl font-display font-bold mb-2 uppercase">Espaço Cultural Parceiro</h3>
                  <span className="bg-primary/20 text-primary border border-primary/30 text-xs font-bold uppercase tracking-widest px-3 py-1 backdrop-blur-sm">Extensão Híbrida</span>
                </div>
              </div>
              <div className="p-8">
                <p className="text-muted-foreground font-light leading-relaxed">
                  Infraestrutura de apoio onde são realizados os encontros presenciais, dinâmicas de grupo e parte das atividades formativas do workshop do Projeto Cultural Ordem Sul.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Release Placeholder (Hidden Structural Space) */}
      <section id="releases" className="hidden py-24 md:py-32 relative">
        <div className="container mx-auto px-6 md:px-12">
          {/* Content for future single/EP releases will go here */}
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contato" className="py-24 border-t border-border/30 relative overflow-hidden bg-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-display font-bold uppercase tracking-tight mb-8">Contato <span className="text-primary">Profissional</span></h2>
              <p className="text-muted-foreground font-light mb-10 max-w-md">
                Para propostas de shows, workshops, produções musicais ou parcerias institucionais.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:bboyrhoger@gmail.com" className="flex items-center group">
                  <div className="w-12 h-12 rounded-full border border-border/50 bg-secondary/20 flex items-center justify-center mr-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Email Principal</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">bboyrhoger@gmail.com</p>
                  </div>
                </a>

                <a href="mailto:realtraprn@gmail.com" className="flex items-center group">
                  <div className="w-12 h-12 rounded-full border border-border/50 bg-secondary/20 flex items-center justify-center mr-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Email Alternativo</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">realtraprn@gmail.com</p>
                  </div>
                </a>
                
                <a href="https://wa.me/5584996193537" className="flex items-center group">
                  <div className="w-12 h-12 rounded-full border border-border/50 bg-secondary/20 flex items-center justify-center mr-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">WhatsApp / Profissional</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">(84) 99619-3537</p>
                  </div>
                </a>

                <a href="tel:+5584999359559" className="flex items-center group">
                  <div className="w-12 h-12 rounded-full border border-border/50 bg-secondary/20 flex items-center justify-center mr-4 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Contato Pessoal</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">(84) 99935-9559</p>
                  </div>
                </a>

                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-full border border-border/50 bg-secondary/20 flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Localização</p>
                    <p className="text-foreground font-medium">Zona Sul, Natal - RN</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }} className="flex flex-col justify-end">
              <h3 className="text-2xl font-display font-bold uppercase mb-6">Redes Sociais</h3>
              <div className="flex space-x-4 mb-12">
                <a href="https://instagram.com/droger_oficial" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-border bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm hover:shadow-[0_0_15px_rgba(200,150,50,0.4)]">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="w-14 h-14 rounded-full border border-border bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm hover:shadow-[0_0_15px_rgba(200,150,50,0.4)]">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="#" className="w-14 h-14 rounded-full border border-border bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm hover:shadow-[0_0_15px_rgba(200,150,50,0.4)]">
                  <Radio className="w-6 h-6" />
                </a>
              </div>
              
              <div className="bg-secondary/30 border border-border/50 p-6 rounded-none mt-auto">
                <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-2 text-primary">Ordem Sul</h4>
                <p className="text-sm text-muted-foreground font-light">Agência Cultural & Produtora Independente.</p>
              </div>
            </motion.div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-border/30 text-xs text-muted-foreground uppercase tracking-widest font-mono">
            <p>© {new Date().getFullYear()} D ROGER. Todos os direitos reservados.</p>
            <p className="mt-4 md:mt-0">
              Produção Executiva: Ordem Sul
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
