
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
        <Card className="bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-lg border-pink-300/50 shadow-2xl">
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
            <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">
              ¡Hola {userName}! 🌟
            </h2>
            <div className="text-xl text-white leading-relaxed space-y-4 drop-shadow-md">
              <p className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent text-2xl font-bold">
                Soy Sky, tu gatito astronauta favorito! 🚀
              </p>
              <p className="text-white">
                Te he enviado esta invitación desde mi nave espacial porque... 
                <span className="text-cyan-200 font-semibold">¡quiero que vengas a mi cumpleaños intergaláctico!</span>
              </p>
              <p className="text-white">
                Abróchate el cinturón cósmico y prepárate para un 
                <span className="text-purple-200 font-semibold"> miau-tántico despegue</span> hacia la diversión! 🛸
              </p>
              <p className="text-lg text-yellow-100 font-medium">
                Sky ha reservado una estrella especial solo para ti ✨
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
        <Card className="bg-gradient-to-br from-indigo-500/30 to-purple-500/30 backdrop-blur-lg border-indigo-300/50 shadow-2xl">
          <CardContent className="p-6 text-center">
            <p className="text-2xl text-white mb-4 drop-shadow-md font-semibold">
              ¡Nos vamos a la galaxia de la ternura! 🌠
            </p>
            <p className="text-lg text-cyan-100 drop-shadow-sm">
              Con ronroneos cósmicos y patitas estelares, Sky 💜🐾
            </p>
            <div className="mt-4 text-4xl">
              🌟🐱🌟
            </div>
            <p className="text-sm text-purple-200 mt-2 italic">
              "Donde los sueños gatunos se vuelven realidad entre las estrellas"
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default GalacticInvitation;
