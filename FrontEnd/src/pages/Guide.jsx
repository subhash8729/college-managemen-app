import React from 'react';
import Navbar from '../components/Navbar';

const Guide = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center px-4">
      <div className="text-center">
        {/* Animated Rocket */}
        <div className="text-8xl mb-8 animate-bounce">
          🚀
        </div>
        
        {/* Coming Soon Text */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
          Coming Soon
        </h1>
        
        <p className="text-xl text-white/80">
          Something awesome is on the way!
        </p>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-bounce {
          animation: bounce 2s infinite ease-in-out;
        }
      `}</style>
    </div>
    </>
  );
};

export default Guide;