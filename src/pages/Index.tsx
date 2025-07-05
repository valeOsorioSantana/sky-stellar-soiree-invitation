
import { useState } from 'react';
import { motion } from 'framer-motion';
import StarField from '../components/StarField';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import GalacticInvitation from '../components/GalacticInvitation';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<'login' | 'register' | 'invitation'>('login');
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');

  const handleLogin = (email: string) => {
    setUserEmail(email);
    setCurrentStep('register');
  };

  const handleRegister = (name: string, email: string) => {
    setUserName(name);
    setUserEmail(email);
    setCurrentStep('invitation');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <StarField />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        {currentStep === 'login' && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <LoginForm onLogin={handleLogin} />
          </motion.div>
        )}

        {currentStep === 'register' && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <RegisterForm onRegister={handleRegister} userEmail={userEmail} />
          </motion.div>
        )}

        {currentStep === 'invitation' && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <GalacticInvitation userName={userName} />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Index;
