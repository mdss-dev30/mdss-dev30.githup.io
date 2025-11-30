import { Layers, Hammer, Palette, Zap } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'Porcelanatos',
    description: 'Pequeno, médio, grande e super formatos. Instalação com precisão técnica e acabamento impecável.'
  },
  {
    icon: Palette,
    title: 'Pedras Naturais',
    description: 'Revestimentos em granito, mármore e ardósia. Trabalho especializado em materiais nobres.'
  },
  {
    icon: Hammer,
    title: 'Reformas Completas',
    description: 'Projetos de reforma residencial e comercial com coordenação técnica de ponta a ponta.'
  },
  {
    icon: Zap,
    title: 'Acabamentos Especiais',
    description: 'Bancadas, ilhas, lâminas e elementos decorativos em revestimentos premium.'
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-card relative overflow-hidden">
      {/* Geometric background pattern */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 opacity-5"
        style={{
          backgroundImage: 'url(/geometric-pattern-bg.jpg)',
          backgroundSize: 'cover'
        }}
      ></div>

      <div className="container relative z-10">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-accent"></div>
            <span className="text-accent font-display text-sm font-bold tracking-widest">NOSSOS SERVIÇOS</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            Especialização em <span className="text-accent">Revestimentos Premium</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos uma gama completa de serviços para transformar seus espaços com qualidade e precisão.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-background border border-border hover:border-accent transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-6 inline-block p-4 bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Icon size={32} className="text-accent" />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Arrow indicator */}
                <div className="flex items-center gap-2 text-accent font-display font-bold group-hover:translate-x-2 transition-transform">
                  <span>SAIBA MAIS</span>
                  <div className="w-6 h-0.5 bg-accent"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-16 border-t border-border flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-muted-foreground">
              Entre em contato conosco para uma consulta técnica gratuita.
            </p>
          </div>
          <a href="https://wa.me/5531999999999?text=Olá%20Vértice!%20Gostaria%20de%20solicitar%20uma%20consulta%20técnica%20gratuita." target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-accent text-primary font-display font-bold text-lg hover:bg-copper transition-all duration-300 whitespace-nowrap inline-block cursor-pointer">
            SOLICITAR CONSULTA
          </a>
        </div>
      </div>
    </section>
  );
}
