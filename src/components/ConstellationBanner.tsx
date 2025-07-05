
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
      <Card className="bg-gradient-to-r from-yellow-400/30 via-pink-500/30 to-purple-600/30 backdrop-blur-lg border-yellow-300/60 shadow-2xl overflow-hidden">
        <CardContent className="p-8 relative">
          {/* Estrellas flotantes */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-yellow-300"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0.5, 1.5, 0.5],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                ✨
              </motion.div>
            ))}
          </div>

          <div className="relative z-10 text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl"
              animate={{
                textShadow: [
                  '0 0 20px rgba(255,255,255,0.5)',
                  '0 0 30px rgba(255,182,193,0.8)',
                  '0 0 20px rgba(255,255,255,0.5)'
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              {userName} & Sky
            </motion.h1>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="text-4xl mb-4"
            >
              🌟
            </motion.div>
            <p className="text-2xl text-white font-bold drop-shadow-lg">
              🚀 Celebración Intergaláctica 🚀
            </p>
            <p className="text-lg text-cyan-100 mt-2 drop-shadow-md italic">
              "Donde los sueños gatunos se encuentran con las estrellas"
            </p>
            <div className="flex justify-center space-x-4 mt-4 text-3xl">
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
              >
                🌙
              </motion.span>
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              >
                ⭐
              </motion.span>
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
              >
                🌟
              </motion.span>
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
              >
                ✨
              </motion.span>
              <motion.span
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
              >
                🌠
              </motion.span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ConstellationBanner;
