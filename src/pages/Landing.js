import React from 'react';
import { useNavigate } from 'react-router-dom';

// import logo from '../imgs/logo.jpg';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center p-8">
      <div className="flex-grow flex flex-col items-center justify-center text-center">
        {/* <img src={logo} alt="Fractal Logo" className="w-48 h-auto" /> */}
        <div className="w-52 h-40 bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center text-3xl font-bold text-gray-400 mb-4">
          FRACTAL
        </div>
        <p className="text-gray-600">pense, conecte e inove.</p>
      </div>
      <button
        className="w-full max-w-sm bg-white text-gray-700 py-3 px-4 rounded-full shadow-md border border-gray-200 font-semibold"
        onClick={() => navigate('/login')}
      >
        Faça Login
      </button>
    </div>
  );
};

export default Landing;