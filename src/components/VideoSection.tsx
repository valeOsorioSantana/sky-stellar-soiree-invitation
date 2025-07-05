
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const VideoSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.8 }}
    >
      <Card className="bg-gradient-to-br from-pink-500/20 to-red-500/20 backdrop-blur-lg border-pink-300/30 shadow-2xl">
        <CardContent className="p-8">
          <motion.h3
            className="text-3xl font-bold text-center text-white mb-8"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🎬 Video Especial de Sky 🎬
          </motion.h3>
          
          <div className="relative max-w-2xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-pink-300/30"
            >
              <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Video especial de Sky"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-xl"
              ></iframe>
              
              {/* Estrellas decorativas alrededor del video */}
              <motion.div
                className="absolute -top-4 -left-4 text-3xl text-yellow-300"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                🌟
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 text-3xl text-pink-300"
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                ✨
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 text-3xl text-blue-300"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                💫
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 text-3xl text-purple-300"
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
          
          <motion.p
            className="text-center text-pink-200 mt-6 text-lg"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            ¡Un mensaje especial desde el espacio! 🛸💖
          </motion.p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default VideoSection;
