import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  profession: string;
  location: string;
  rating: number;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Marina Silva',
    profession: 'Arquiteta',
    location: 'Savassi, BH',
    rating: 5,
    quote: 'A Vértice transformou completamente meu projeto. Qualidade impecável, profissionalismo e atenção aos detalhes em cada etapa. Recomendo muito!',
    image: '/testimonial-1.jpg'
  },
  {
    id: 2,
    name: 'Carlos Mendes',
    profession: 'Empresário',
    location: 'Funcionários, BH',
    rating: 5,
    quote: 'Excelente trabalho! A equipe foi pontual, respeitosa e entregou exatamente o que foi combinado. Meu banheiro ficou como um spa particular.',
    image: '/testimonial-2.jpg'
  },
  {
    id: 3,
    name: 'Fernanda Costa',
    profession: 'Decoradora',
    location: 'Lourdes, BH',
    rating: 5,
    quote: 'Parceria perfeita! A Vértice entende design e qualidade. Nossos clientes sempre comentam sobre a beleza dos acabamentos. Confiamos 100%!',
    image: '/testimonial-3.jpg'
  }
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-background relative overflow-hidden">
      {/* Geometric background */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 opacity-5"
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
            <span className="text-accent font-display text-sm font-bold tracking-widest">DEPOIMENTOS</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            O que nossos <span className="text-accent">clientes dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Histórias reais de transformação e satisfação. Conheça a experiência de quem confiou na Vértice.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="group p-8 bg-card border border-border hover:border-accent transition-all duration-300"
            >
              {/* Rating stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star 
                    key={i}
                    size={20} 
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>

              {/* Client info */}
              <div className="flex items-center gap-4 pt-8 border-t border-border">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name and profession */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-display font-bold text-foreground text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.profession}
                  </p>
                  <p className="text-xs text-accent font-display font-bold">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-16 border-t border-border text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Pronto para sua transformação?
          </p>
          <a 
            href="https://wa.me/5531999999999?text=Olá%20Vértice!%20Gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-accent text-primary font-display font-bold text-lg hover:bg-copper transition-all duration-300"
          >
            SOLICITAR ORÇAMENTO
          </a>
        </div>
      </div>
    </section>
  );
}
