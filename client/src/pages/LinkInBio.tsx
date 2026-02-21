import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Instagram, 
  Youtube, 
  Mail, 
  Phone,
  ArrowLeft,
  Briefcase
} from "lucide-react";

import portraitImg from "@/assets/images/artist-portrait.png";
import bgImg from "@/assets/images/hero-bg.png";

export default function LinkInBio() {
  const links = [
    { title: "Orçamento para Projetos/Produções", icon: Briefcase, url: "https://wa.me/5584996193537", primary: true },
    { title: "WhatsApp Profissional", icon: Phone, url: "https://wa.me/5584996193537", primary: false },
    { title: "Contato Pessoal", icon: Phone, url: "tel:+5584999359559", primary: false },
    { title: "Email Institucional", icon: Mail, url: "mailto:bboyrhoger@gmail.com", primary: false },
    { title: "Email Alternativo", icon: Mail, url: "mailto:realtraprn@gmail.com", primary: false },
    { title: "Instagram Oficial", icon: Instagram, url: "https://instagram.com/droger_oficial", primary: false },
    { title: "Canal do YouTube", icon: Youtube, url: "#", primary: false },
  ];

  return (
    <div className="min-h-screen relative flex flex-col items-center py-12 px-4 md:px-0">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-background/90 z-10 backdrop-blur-3xl" />
        <img src={bgImg} alt="Background" className="w-full h-full object-cover opacity-20" />
      </div>

      <div className="w-full max-w-md relative z-10 flex flex-col items-center">
        
        {/* Back Button */}
        <div className="w-full flex justify-start mb-8">
          <Link href="/">
            <button className="flex items-center text-xs font-display uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Voltar ao Portfólio
            </button>
          </Link>
        </div>

        {/* Profile Header */}
        <motion.div 
          className="flex flex-col items-center mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-28 h-28 border-2 border-primary p-1 mb-6 rounded-none">
            <img 
              src={portraitImg} 
              alt="D Roger" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl font-display font-bold uppercase tracking-widest mb-1">
            D<span className="text-primary">ROGER</span>
          </h1>
          <p className="text-primary font-medium tracking-widest uppercase text-xs mb-3">
            Artista | Produtor Musical | Agente Cultural
          </p>
          <p className="text-muted-foreground font-light text-sm px-6">
            18 anos fortalecendo a cultura hip hop da Zona Sul de Natal.
          </p>
        </motion.div>

        {/* Links List */}
        <div className="w-full space-y-4">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              className={`flex items-center p-4 border transition-all duration-300 ${
                link.primary 
                  ? "bg-primary/10 border-primary text-primary hover:bg-primary hover:text-primary-foreground shadow-[0_0_20px_rgba(200,150,50,0.15)] rounded-none" 
                  : "bg-card/50 border-border/50 text-foreground hover:border-primary/50 hover:bg-card/80 rounded-none"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-none ${link.primary ? "bg-primary text-primary-foreground" : "bg-muted"}`}>
                <link.icon className="w-5 h-5" />
              </div>
              <span className="font-medium ml-4 flex-1 text-center pr-10 text-sm tracking-wide uppercase">
                {link.title}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <span className="text-xl font-display font-bold tracking-widest opacity-20 uppercase">
            Ordem Sul
          </span>
        </motion.div>
      </div>
    </div>
  );
}
