import { Link, useLocation } from "wouter";
import { Home, User, Users, Building2, Link as LinkIcon } from "lucide-react";

export default function MobileNav() {
  const [location] = useLocation();

  const handleNavClick = (href: string) => {
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
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-t border-border/50 pb-safe pt-2 px-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between pb-2">
        <button 
          onClick={() => handleNavClick("#top")}
          className="flex flex-col items-center p-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Home className="w-5 h-5 mb-1" />
          <span className="text-[9px] font-medium uppercase tracking-wider">Início</span>
        </button>

        <button 
          onClick={() => handleNavClick("#bio")}
          className="flex flex-col items-center p-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <User className="w-5 h-5 mb-1" />
          <span className="text-[9px] font-medium uppercase tracking-wider">Biografia</span>
        </button>

        <Link href="/links">
          <div className="relative -top-5 flex flex-col items-center justify-center w-14 h-14 bg-primary rounded-none text-primary-foreground shadow-[0_0_20px_rgba(200,150,50,0.4)] cursor-pointer rotate-45 hover:rotate-0 transition-transform">
            <LinkIcon className="w-6 h-6 -rotate-45 hover:rotate-0 transition-transform" />
          </div>
        </Link>

        <button 
          onClick={() => handleNavClick("#projeto-cultural")}
          className="flex flex-col items-center p-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Users className="w-5 h-5 mb-1" />
          <span className="text-[9px] font-medium uppercase tracking-wider">Projetos</span>
        </button>

        <button 
          onClick={() => handleNavClick("#infraestrutura")}
          className="flex flex-col items-center p-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <Building2 className="w-5 h-5 mb-1" />
          <span className="text-[9px] font-medium uppercase tracking-wider">Contato</span>
        </button>
      </div>
    </div>
  );
}
