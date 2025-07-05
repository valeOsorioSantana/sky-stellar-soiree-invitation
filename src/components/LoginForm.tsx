
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface LoginFormProps {
  onLogin: (email: string) => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin(email);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="max-w-md mx-auto"
    >
      <Card className="bg-white/10 backdrop-blur-lg border-pink-300/30 shadow-2xl">
        <CardHeader className="text-center pb-2">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl mb-4"
          >
            🐱
          </motion.div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Invitación Galáctica de Sky
          </h1>
          <p className="text-pink-200">
            ¡Bienvenido a mi cumpleaños estelar! 🌟
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Tu correo espacial ✨"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/20 border-purple-300/50 text-white placeholder-pink-200"
                required
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Contraseña secreta 🔐"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/20 border-purple-300/50 text-white placeholder-pink-200"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 rounded-full shadow-lg transform transition hover:scale-105"
            >
              🚀 Entrar al Mundo de Sky
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default LoginForm;
