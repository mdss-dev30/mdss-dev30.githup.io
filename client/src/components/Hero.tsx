import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 flex items-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/hero-stone-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          {/* Accent line */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-1 bg-accent"></div>
            <span className="text-accent font-display text-sm font-bold tracking-widest">EXCELÊNCIA EM ACABAMENTOS</span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-6xl md:text-7xl font-bold text-foreground leading-tight">
            Obras e Revestimentos no <span className="text-accent">Mais Alto Nível</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Especialistas em porcelanatos de grandes formatos, pedras naturais e reformas de alto padrão em Belo Horizonte e região.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="https://wa.me/5531999999999?text=Olá%20Vértice!%20Gostaria%20de%20solicitar%20um%20orçamento." target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-accent text-primary font-display font-bold text-lg hover:bg-copper transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer">
              SOLICITAR ORÇAMENTO
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#portfolio" className="px-8 py-4 border-2 border-accent text-accent font-display font-bold text-lg hover:bg-accent/10 transition-colors flex items-center justify-center cursor-pointer">
              VER PORTFÓLIO
            </a>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 flex gap-8 border-t border-border">
            <div>
              <p className="text-3xl font-display font-bold text-accent">500+</p>
              <p className="text-sm text-muted-foreground">Projetos Realizados</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-accent">15+</p>
              <p className="text-sm text-muted-foreground">Anos de Experiência</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-accent">98%</p>
              <p className="text-sm text-muted-foreground">Satisfação de Clientes</p>
            </div>
          </div>
        </div>

        {/* Right side - Geometric shape with image */}
        <div className="hidden md:flex items-center justify-center">
          <div className="relative w-96 h-96">
            {/* Geometric background shape */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-accent to-copper opacity-20"
              style={{ clipPath: 'polygon(0% 20%, 100% 0%, 100% 80%, 0% 100%)' }}
            ></div>
            
            {/* Image */}
            <img 
              src="/stone-texture-detail.jpg" 
              alt="Detalhe de pedra polida"
              className="relative w-full h-full object-cover"
              style={{ clipPath: 'polygon(0% 20%, 100% 0%, 100% 80%, 0% 100%)' }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground font-display">EXPLORE</span>
          <div className="w-1 h-6 border-l-2 border-accent"></div>
        </div>
      </div>
    </section>
  );
}
