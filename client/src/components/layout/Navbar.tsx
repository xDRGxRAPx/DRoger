import { Link, useLocation } from "wouter";
import { Menu, X, Mic2, Disc3, FolderKanban, Mail, User } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Bio", href: "#bio", icon: User },
    { name: "Projetos", href: "#projects", icon: FolderKanban },
    { name: "Música", href: "#music", icon: Disc3 },
    { name: "Serviços", href: "#services", icon: Mic2 },
    { name: "Contato", href: "#contact", icon: Mail },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (location !== "/") {
      window.location.href = `/${href}`;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/">
            <span className="text-2xl font-display font-bold tracking-wider cursor-pointer">
              D<span className="text-primary">ROGER</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors uppercase tracking-widest"
              >
                {link.name}
              </button>
            ))}
            <Link href="/links">
              <span className="px-5 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all cursor-pointer shadow-[0_0_15px_rgba(200,150,50,0.3)] hover:shadow-[0_0_25px_rgba(200,150,50,0.5)] uppercase tracking-wider">
                Links
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center md:hidden"
          >
            <button
              className="absolute top-6 right-6 text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-2xl font-display font-medium text-foreground hover:text-primary transition-colors uppercase tracking-widest"
                >
                  {link.name}
                </button>
              ))}
              <div className="h-px w-12 bg-border my-4" />
              <Link href="/links" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-xl font-display font-medium text-primary uppercase tracking-widest cursor-pointer">
                  Árvore de Links
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
