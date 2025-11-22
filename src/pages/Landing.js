import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../imgs/logo.png';

const Landing = () => {
  const navigate = useNavigate();
  const [pressed, setPressed] = useState(false);
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center p-8">
      <div className="flex-grow flex flex-col items-center justify-center text-center">
        <img src={logo} alt="Fractal Logo" className="w-64 max-w-[70%] h-auto" />
      </div>
      <button
        className={`w-full max-w-sm py-3 px-4 rounded-full shadow-md border font-semibold transition-colors
          ${pressed ? 'bg-brand-red border-brand-red text-white' : 'bg-white text-gray-700 border-gray-200 hover:bg-brand-red hover:text-white hover:border-brand-red'}
        `}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
        onClick={() => navigate('/login')}
      >
        Faça Login
      </button>
    </div>
  );
};

export default Landing;