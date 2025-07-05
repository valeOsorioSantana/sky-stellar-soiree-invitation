
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import ImageModal from './ImageModal';

const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const photos = [
    {
      url: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&q=80",
      alt: "Sky luciendo su casco espacial dorado con luces LED que parpadean como estrellas"
    },
    {
      url: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=400&fit=crop&q=80",
      alt: "Sky con su mochila de propulsión galáctica equipada con tanques de oxígeno miniatura"
    },
    {
      url: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=400&fit=crop&q=80",
      alt: "Sky explorando planetas de algodón de azúcar con su traje anti-gravedad rosa"
    },
    {
      url: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=400&h=400&fit=crop&q=80",
      alt: "Sky mostrando sus botas espaciales magnéticas con suelas que brillan en la oscuridad"
    },
    {
      url: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=400&h=400&fit=crop&q=80",
      alt: "Sky preparándose para el despegue con su panel de control galáctico lleno de botones de colores"
    }
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Card className="bg-gradient-to-br from-blue-100/90 to-indigo-100/90 backdrop-blur-lg border-blue-200/70 shadow-2xl">
          <CardContent className="p-8">
            <motion.h3
              className="text-3xl font-bold text-center text-gray-800 mb-4 drop-shadow-sm"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🌟 Sky: El Astronauta Más Adorable del Universo 🌟
            </motion.h3>
            <p className="text-center text-slate-700 mb-8 text-lg font-medium">
              ¡Descubre los increíbles trajes espaciales y gadgets galácticos de Sky! ✨ 
              <span className="text-indigo-700 font-semibold">Haz clic en cualquier imagen para verla en detalle</span>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {photos.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedImage({ src: photo.url, alt: photo.alt })}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg border-2 border-white/50 hover:border-yellow-300/70 transition-all duration-300">
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 left-2 right-2 text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg bg-black/50 p-2 rounded">
                      {photo.alt}
                    </div>
                    <motion.div
                      className="absolute top-2 right-2 text-2xl"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      ✨
                    </motion.div>
                    
                    {/* Click indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-3 shadow-lg">
                        <span className="text-2xl">🔍</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.p
              className="text-center text-gray-800 mt-6 text-lg font-bold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ¡Cada foto es una aventura cósmica diferente llena de ternura intergaláctica! 🚀🐱⭐
            </motion.p>
          </CardContent>
        </Card>
      </motion.div>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
      />
    </>
  );
};

export default PhotoGallery;
