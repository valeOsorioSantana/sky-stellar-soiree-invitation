
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
      <Card className="bg-gradient-to-r from-yellow-400/20 via-pink-500/20 to-purple-600/20 backdrop-blur-lg border-yellow-300/40 shadow-2xl overflow-hidden">
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
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent mb-4"
              animate={{
                backgroundPosition: ['0%', '100%', '0%'],
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
            <p className="text-2xl text-white font-semibold">
              Celebración Intergaláctica 🚀
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
