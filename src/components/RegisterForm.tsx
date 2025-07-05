
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface RegisterFormProps {
  onRegister: (name: string, email: string) => void;
  userEmail: string;
}

const RegisterForm = ({ onRegister, userEmail }: RegisterFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState(userEmail);
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && password) {
      onRegister(name, email);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="max-w-md mx-auto"
    >
      <Card className="bg-white/10 backdrop-blur-lg border-blue-300/30 shadow-2xl">
        <CardHeader className="text-center pb-2">
          <motion.div
            animate={{ 
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-6xl mb-4"
          >
            🌟
          </motion.div>
          <h2 className="text-3xl font-bold text-white mb-2">
            ¡Registro Cósmico!
          </h2>
          <p className="text-blue-200">
            Completa tu perfil de astronauta gatuno 🚀
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Tu nombre espacial 👨‍🚀"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/20 border-blue-300/50 text-white placeholder-blue-200"
                required
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Correo galáctico ✉️"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/20 border-blue-300/50 text-white placeholder-blue-200"
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Código de acceso estelar 🔑"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/20 border-blue-300/50 text-white placeholder-blue-200"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 rounded-full shadow-lg transform transition hover:scale-105"
            >
              🛸 Completar Registro Galáctico
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default RegisterForm;
