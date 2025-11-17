import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/welcome');
  };

  return (
    <div className="bg-white min-h-screen p-8 flex flex-col">
      <h2 className="text-4xl font-bold text-gray-800 mb-2">Faça Login</h2>
      <p className="text-gray-600 mb-8">
        Para participar da comunidade, se tornar um designer inovador e mestre
        dos processos, entre com seu <strong className="text-gray-800">e-mail institucional!</strong>
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-2">E-mail:</label>
          <input type="email" id="email" className="w-full p-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-500 mb-2">Senha:</label>
          <input type="password" id="password" className="w-full p-3 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-red" />
        </div>
        <button type="submit" className="w-full bg-brand-red text-white py-3 rounded-full font-bold text-lg shadow-lg">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;