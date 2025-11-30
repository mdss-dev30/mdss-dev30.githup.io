import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappLink = 'https://wa.me/5531999999999?text=Olá%20Vértice!%20Gostaria%20de%20mais%20informações.';

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
      title="Fale conosco no WhatsApp"
    >
      {/* Pulse animation background */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-75"></div>
      
      {/* Icon */}
      <MessageCircle size={28} className="relative z-10" />
    </a>
  );
}
