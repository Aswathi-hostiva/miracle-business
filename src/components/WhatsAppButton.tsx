import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919744759329"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Taste of Miracle on WhatsApp"
      className="fixed bottom-5 left-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#20bd5a] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1a3d2e]"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2.25} aria-hidden="true" />
    </a>
  );
}
