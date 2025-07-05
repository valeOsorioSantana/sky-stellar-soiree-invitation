
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const VideoSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.8 }}
    >
      <Card className="bg-gradient-to-br from-pink-100/90 to-red-100/90 backdrop-blur-lg border-pink-200/70 shadow-2xl">
        <CardContent className="p-8">
          <motion.h3
            className="text-3xl font-bold text-center text-gray-800 mb-4 drop-shadow-sm"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🎬 Transmisión Especial desde mi Centro de Comando Espacial 🎬
          </motion.h3>
          
          <p className="text-center text-slate-700 mb-6 text-lg font-medium">
            ¡Un mensaje lleno de ronroneos cósmicos y ternura intergaláctica directamente para ti! 💫
            <br />
            <span className="text-pink-700 font-semibold text-base">
              Sky ha grabado esto especialmente desde su nave nodriza de peluche ✨
            </span>
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-pink-200/70 hover:border-pink-300 transition-all duration-300"
            >
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/hFZFjoX2cGg"
                title="Video tierno de gatito espacial"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
              
              {/* Estrellas decorativas alrededor del video */}
              <motion.div
                className="absolute -top-4 -left-4 text-3xl text-yellow-400"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                🌟
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 text-3xl text-pink-400"
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                ✨
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 text-3xl text-blue-400"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                💫
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 text-3xl text-purple-400"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, -180, -360]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🌠
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div
            className="text-center mt-6 space-y-3"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <p className="text-gray-800 text-lg font-bold bg-pink-50/80 p-3 rounded-lg border border-pink-200">
              ¡Desde mi laboratorio orbital de experimentos de ternura, con todo mi amor gatuno! 🛸💖
            </p>
            <p className="text-pink-700 text-base italic font-medium bg-white/50 p-2 rounded border border-pink-100">
              "Donde cada maullido se convierte en una canción de cuna cósmica para todo el sistema solar" 🌌
            </p>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default VideoSection;
