
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-colors"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
            
            <div className="relative">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Decorative stars around the modal */}
              <motion.div
                className="absolute -top-8 -left-8 text-4xl text-yellow-300"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                ⭐
              </motion.div>
              <motion.div
                className="absolute -top-8 -right-8 text-4xl text-pink-300"
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                ✨
              </motion.div>
              <motion.div
                className="absolute -bottom-8 -left-8 text-4xl text-blue-300"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                🌟
              </motion.div>
              <motion.div
                className="absolute -bottom-8 -right-8 text-4xl text-purple-300"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, -180, -360]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                💫
              </motion.div>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50">
              <p className="text-gray-800 text-lg font-medium text-center">
                {imageAlt}
              </p>
              <p className="text-gray-600 text-sm text-center mt-2 italic">
                ¡Haz clic fuera de la imagen para cerrar! 🚀
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageModal;
