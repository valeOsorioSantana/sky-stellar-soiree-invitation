
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

interface ConstellationBannerProps {
  userName: string;
}

const ConstellationBanner = ({ userName }: ConstellationBannerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <Card className="bg-gradient-to-r from-indigo-200/90 via-purple-200/90 to-pink-200/90 backdrop-blur-lg border-indigo-300/70 shadow-2xl overflow-hidden">
        <CardContent className="p-6 text-center relative">
          <div className="relative z-10">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-2"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(147, 51, 234, 0.5)",
                  "0 0 30px rgba(236, 72, 153, 0.5)",
                  "0 0 20px rgba(147, 51, 234, 0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🌟 {userName} & Sky 🌟
            </motion.h1>
            <motion.p
              className="text-xl text-slate-700 font-semibold"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨ Aventureros Cósmicos Unidos por la Ternura ✨
            </motion.p>
          </div>
          
          {/* Estrellas animadas de fondo */}
          <motion.div
            className="absolute top-2 left-4 text-2xl text-yellow-500"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            ⭐
          </motion.div>
          <motion.div
            className="absolute top-2 right-4 text-2xl text-pink-500"
            animate={{ 
              rotate: [360, 0],
              y: [0, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            ✨
          </motion.div>
          <motion.div
            className="absolute bottom-2 left-6 text-2xl text-blue-500"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            🌟
          </motion.div>
          <motion.div
            className="absolute bottom-2 right-6 text-2xl text-purple-500"
            animate={{ 
              y: [0, -8, 0],
              x: [0, 3, 0]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            💫
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ConstellationBanner;
