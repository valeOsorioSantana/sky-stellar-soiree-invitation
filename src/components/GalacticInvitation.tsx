
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import PhotoGallery from './PhotoGallery';
import VideoSection from './VideoSection';
import ConstellationBanner from './ConstellationBanner';

interface GalacticInvitationProps {
  userName: string;
}

const GalacticInvitation = ({ userName }: GalacticInvitationProps) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4">
      {/* Banner de constelación */}
      <ConstellationBanner userName={userName} />

      {/* Mensaje principal de Sky */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <Card className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg border-pink-300/30 shadow-2xl">
          <CardContent className="p-8 text-center">
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-8xl mb-6"
            >
              🐱‍🚀
            </motion.div>
            <h2 className="text-4xl font-bold text-white mb-6">
              ¡Hola {userName}! 🌟
            </h2>
            <div className="text-xl text-pink-100 leading-relaxed space-y-4">
              <p>
                Soy <span className="text-yellow-300 font-bold text-2xl">Sky</span>, 
                y quiero que vengas a mi cumpleaños estelar! 🎂✨
              </p>
              <p>
                ¡Trae tu traje espacial y prepárate para ronronear entre planetas! 🚀
              </p>
              <p className="text-lg text-blue-200">
                Será una aventura cósmica llena de diversión, 
                gatitos espaciales y mucha magia galáctica 🌌
              </p>
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-6 text-6xl"
            >
              🎉🛸🎈
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Galería de fotos */}
      <PhotoGallery />

      {/* Video */}
      <VideoSection />

      {/* Mensaje de despedida */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Card className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-lg border-indigo-300/30 shadow-2xl">
          <CardContent className="p-6 text-center">
            <p className="text-2xl text-white mb-4">
              ¡No te pierdas esta aventura intergaláctica! 🌠
            </p>
            <p className="text-lg text-indigo-200">
              Con amor cósmico, Sky 💜🐾
            </p>
            <div className="mt-4 text-4xl">
              🌟🐱🌟
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default GalacticInvitation;
