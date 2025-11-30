import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-16">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent flex items-center justify-center" style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}>
                <span className="text-primary font-display font-bold text-lg">V</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">VÉRTICE</h3>
                <p className="text-xs text-muted-foreground">Obras e Revestimentos</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Especialistas em revestimentos de alto padrão e reformas em Belo Horizonte e região.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">NAVEGAÇÃO</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">Início</a></li>
              <li><a href="#sobre" className="text-muted-foreground hover:text-accent transition-colors text-sm">Sobre</a></li>
              <li><a href="#servicos" className="text-muted-foreground hover:text-accent transition-colors text-sm">Serviços</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-accent transition-colors text-sm">Portfólio</a></li>
              <li><a href="#contato" className="text-muted-foreground hover:text-accent transition-colors text-sm">Contato</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">SERVIÇOS</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">Porcelanatos</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">Pedras Naturais</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">Reformas</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">Acabamentos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">CONTATO</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground text-sm">(31) 99999-9999</p>
                  <p className="text-muted-foreground text-sm">(31) 3333-3333</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-accent mt-1 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">contato@vertice.com.br</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-1 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">Belo Horizonte, MG</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-12"></div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © 2025 Vértice Obras e Revestimentos. Todos os direitos reservados.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Política de Privacidade</a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
