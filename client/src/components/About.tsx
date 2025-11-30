export default function About() {
  return (
    <section id="sobre" className="py-24 bg-background relative overflow-hidden">
      {/* Background geometric accent */}
      <div className="absolute top-0 left-0 w-96 h-96 opacity-5 pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'url(/geometric-pattern-bg.jpg)',
            backgroundSize: 'cover'
          }}
        ></div>
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <div 
              className="w-full aspect-square bg-gradient-to-br from-accent to-copper opacity-20"
              style={{ clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)' }}
            ></div>
            <img 
              src="/stone-texture-detail.jpg"
              alt="Detalhe de trabalho em revestimento"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)' }}
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-1 bg-accent"></div>
                <span className="text-accent font-display text-sm font-bold tracking-widest">QUEM SOMOS</span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground">
                Excelência em <span className="text-accent">Cada Detalhe</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Vértice Obras e Revestimentos é uma empresa especializada em revestimentos de alto padrão e reformas em Belo Horizonte e região. Com mais de 15 anos de experiência, nosso time de profissionais dedicados trabalha com precisão técnica e comprometimento com a excelência.
            </p>

            {/* Values */}
            <div className="space-y-4 pt-4">
              <div className="flex gap-4">
                <div className="w-1 bg-accent flex-shrink-0"></div>
                <div>
                  <h4 className="font-display font-bold text-foreground mb-2">Precisão Técnica</h4>
                  <p className="text-muted-foreground text-sm">Cada projeto é executado com rigor técnico e atenção aos detalhes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-accent flex-shrink-0"></div>
                <div>
                  <h4 className="font-display font-bold text-foreground mb-2">Materiais Nobres</h4>
                  <p className="text-muted-foreground text-sm">Trabalhamos com os melhores porcelanatos e pedras naturais do mercado.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-accent flex-shrink-0"></div>
                <div>
                  <h4 className="font-display font-bold text-foreground mb-2">Compromisso com Qualidade</h4>
                  <p className="text-muted-foreground text-sm">Garantia de satisfação e acabamento impecável em todos os projetos.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <button className="px-8 py-4 bg-accent text-primary font-display font-bold text-lg hover:bg-copper transition-all duration-300 mt-4">
              CONHECER NOSSA HISTÓRIA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
