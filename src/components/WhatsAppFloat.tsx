import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsAppFloat() {
  const phoneNumber = "254705302615";
  const message = "Hello, I'm interested in your services!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#128C7E] transition-colors duration-300"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7 md:w-8 md:h-8" />
      </a>
    </motion.div>
  );
}
