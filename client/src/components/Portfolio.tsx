import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Apartamento Luxo - Savassi',
    category: 'Residencial',
    image: '/hero-stone-bg.jpg',
    description: 'Reforma completa com porcelanato de super formato e bancada em pedra natural.'
  },
  {
    id: 2,
    title: 'Showroom Comercial',
    category: 'Comercial',
    image: '/geometric-pattern-bg.jpg',
    description: 'Revestimento em lâminas de pedra com acabamento técnico de precisão.'
  },
  {
    id: 3,
    title: 'Residência Contemporânea',
    category: 'Residencial',
    image: '/stone-texture-detail.jpg',
    description: 'Integração de múltiplos formatos de porcelanato em projeto arquitetônico.'
  },
  {
    id: 4,
    title: 'Espaço Corporativo',
    category: 'Comercial',
    image: '/hero-stone-bg.jpg',
    description: 'Revestimento em fachada e interiores com acabamento premium.'
  },
  {
    id: 5,
    title: 'Casa de Praia',
    category: 'Residencial',
    image: '/geometric-pattern-bg.jpg',
    description: 'Projeto com pedras naturais e porcelanatos de grande formato.'
  },
  {
    id: 6,
    title: 'Reforma Comercial',
    category: 'Comercial',
    image: '/stone-texture-detail.jpg',
    description: 'Acabamento em lâminas com precisão técnica e detalhamento fino.'
  }
];

const categories = ['Todos', 'Residencial', 'Comercial'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-accent"></div>
            <span className="text-accent font-display text-sm font-bold tracking-widest">PORTFÓLIO</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            Projetos que <span className="text-accent">Falam por Si</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça alguns dos nossos trabalhos mais recentes e veja a qualidade que entregamos.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex gap-4 mb-12 pb-8 border-b border-border overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 font-display font-bold text-sm whitespace-nowrap transition-all duration-300 ${
                activeCategory === category
                  ? 'text-accent border-b-2 border-accent'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group cursor-pointer"
            >
              {/* Image container */}
              <div className="relative overflow-hidden mb-6 aspect-square">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-end p-6">
                  <button className="text-accent font-display font-bold text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    VER PROJETO
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Project info */}
              <div>
                <p className="text-accent text-sm font-display font-bold mb-2">
                  {project.category}
                </p>
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-16 border-t border-border text-center">
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">
            Veja mais projetos no nosso portfólio completo
          </h3>
          <button className="px-8 py-4 bg-accent text-primary font-display font-bold text-lg hover:bg-copper transition-all duration-300">
            ACESSAR PORTFÓLIO COMPLETO
          </button>
        </div>
      </div>
    </section>
  );
}
