import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    
    const whatsappMessage = `Ola Vertice!\n\nMeu nome e: ${formData.name}\nMeu email: ${formData.email}\nMeu telefone: ${formData.phone}\n\nMensagem:\n${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/5531999999999?text=${encodedMessage}`, '_blank');
    
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contato" className="py-24 bg-card relative overflow-hidden">
      {/* Geometric background */}
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
            <span className="text-accent font-display text-sm font-bold tracking-widest">ENTRE EM CONTATO</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            Vamos Transformar seu <span className="text-accent">Espaço</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Entre em contato conosco para uma consulta técnica gratuita e orçamento sem compromisso.
          </p>
        </div>

        {/* Contact content */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            {/* Phone */}
            <div className="flex gap-4">
              <div className="p-4 bg-accent/10 h-fit">
                <Phone size={24} className="text-accent" />
              </div>
              <div>
                <h4 className="font-display font-bold text-foreground mb-2">Telefone</h4>
                <p className="text-muted-foreground text-sm mb-1">(31) 99999-9999</p>
                <p className="text-muted-foreground text-sm">(31) 3333-3333</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="p-4 bg-accent/10 h-fit">
                <Mail size={24} className="text-accent" />
              </div>
              <div>
                <h4 className="font-display font-bold text-foreground mb-2">Email</h4>
                <p className="text-muted-foreground text-sm">contato@vertice.com.br</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex gap-4">
              <div className="p-4 bg-accent/10 h-fit">
                <MapPin size={24} className="text-accent" />
              </div>
              <div>
                <h4 className="font-display font-bold text-foreground mb-2">Localização</h4>
                <p className="text-muted-foreground text-sm">Belo Horizonte, MG</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="md:col-span-2 space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-display font-bold text-foreground mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            {/* Email and Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-display font-bold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-display font-bold text-foreground mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(31) 99999-9999"
                  className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-display font-bold text-foreground mb-2">
                Mensagem
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Descreva seu projeto..."
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-accent text-primary font-display font-bold text-lg hover:bg-copper transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              ENVIAR MENSAGEM
              <Send size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
