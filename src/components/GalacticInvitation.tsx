
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
        <Card className="bg-gradient-to-br from-purple-100/90 to-pink-100/90 backdrop-blur-lg border-purple-200/70 shadow-2xl">
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6 drop-shadow-sm">
              ¡Hola {userName}! 🌟
            </h2>
            <div className="text-xl text-gray-700 leading-relaxed space-y-4">
              <p className="bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent text-2xl font-bold">
                Soy Sky, tu gatito astronauta más tierno del cosmos! 🚀
              </p>
              <p className="text-slate-700 font-medium">
                Desde mi nave espacial hecha de purrs y stardust, te envío esta invitación mágica porque... 
                <span className="text-indigo-700 font-semibold">¡quiero que seas mi co-piloto en mi aventura de cumpleaños intergaláctico!</span>
              </p>
              <p className="text-slate-700 font-medium">
                Prepárate para el más 
                <span className="text-purple-700 font-semibold"> miau-ravilloso viaje</span> hacia un universo lleno de ternura, ronroneos cósmicos y diversión infinita! 🛸
              </p>
              <p className="text-lg text-slate-600 font-medium bg-yellow-100/50 p-3 rounded-lg border border-yellow-200">
                ✨ Sky ha creado una constelación especial con tu nombre entre las estrellas ✨
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
        <Card className="bg-gradient-to-br from-indigo-100/90 to-purple-100/90 backdrop-blur-lg border-indigo-200/70 shadow-2xl">
          <CardContent className="p-6 text-center">
            <p className="text-2xl text-gray-800 mb-4 font-bold">
              ¡Abróchate el cinturón cósmico... nos vamos a la galaxia de los ronroneos eternos! 🌠
            </p>
            <p className="text-lg text-slate-700 font-medium">
              Con patitas estelares y bigotes de luna llena, tu amigo Sky 💜🐾
            </p>
            <div className="mt-4 text-4xl">
              🌟🐱🌟
            </div>
            <p className="text-sm text-indigo-700 mt-2 italic font-medium bg-indigo-50/50 p-2 rounded border border-indigo-100">
              "Donde cada maullido se convierte en una melodía cósmica y cada ronroneo en una estrella brillante"
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default GalacticInvitation;
