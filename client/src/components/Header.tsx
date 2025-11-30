import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent flex items-center justify-center" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}>
            <span className="text-primary font-display font-bold text-lg">V</span>
          </div>
          <div>
            <h1 className="font-display text-xl font-bold text-foreground">VÉRTICE</h1>
            <p className="text-xs text-muted-foreground tracking-widest">OBRAS E REVESTIMENTOS</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground hover:text-accent transition-colors font-medium">Início</a>
          <a href="#sobre" className="text-foreground hover:text-accent transition-colors font-medium">Sobre</a>
          <a href="#servicos" className="text-foreground hover:text-accent transition-colors font-medium">Serviços</a>
          <a href="#portfolio" className="text-foreground hover:text-accent transition-colors font-medium">Portfólio</a>
          <a href="#depoimentos" className="text-foreground hover:text-accent transition-colors font-medium">Depoimentos</a>
          <a href="#contato" className="text-foreground hover:text-accent transition-colors font-medium">Contato</a>
        </nav>

        {/* CTA Button */}
        <a href="https://wa.me/5531999999999?text=Olá%20Vértice!%20Gostaria%20de%20solicitar%20um%20orçamento." target="_blank" rel="noopener noreferrer" className="hidden md:block px-6 py-2 bg-accent text-primary font-display font-bold hover:bg-copper transition-colors cursor-pointer">
          ORÇAMENTO
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-card border-t border-border">
          <div className="container py-4 flex flex-col gap-4">
            <a href="#" className="text-foreground hover:text-accent transition-colors font-medium">Início</a>
            <a href="#sobre" className="text-foreground hover:text-accent transition-colors font-medium">Sobre</a>
            <a href="#servicos" className="text-foreground hover:text-accent transition-colors font-medium">Serviços</a>
            <a href="#portfolio" className="text-foreground hover:text-accent transition-colors font-medium">Portfólio</a>
            <a href="#depoimentos" className="text-foreground hover:text-accent transition-colors font-medium">Depoimentos</a>
            <a href="#contato" className="text-foreground hover:text-accent transition-colors font-medium">Contato</a>
            <a href="https://wa.me/5531999999999?text=Olá%20Vértice!%20Gostaria%20de%20solicitar%20um%20orçamento." target="_blank" rel="noopener noreferrer" className="w-full px-6 py-2 bg-accent text-primary font-display font-bold hover:bg-copper transition-colors inline-block text-center cursor-pointer">
              ORÇAMENTO
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
