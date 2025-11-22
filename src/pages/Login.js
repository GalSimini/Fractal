import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/newsletter');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white px-6">
      <div className="w-full max-w-md flex flex-col">
        <h2 className="text-4xl font-bold text-gray-800 mb-2 text-center">Faça Login</h2>
        <p className="text-gray-600 mb-8 text-center">
          Entre com seu e-mail institucional.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            placeholder="E-mail"
            className="w-full p-3 bg-white rounded-xl shadow-[0_0_0_2px_rgba(0,0,0,0.15)] focus:outline-none focus:ring-2 focus:ring-brand-red focus:shadow-[0_0_0_2px_rgba(239,68,68,0.55)] transition"
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full p-3 bg-white rounded-xl shadow-[0_0_0_2px_rgba(0,0,0,0.15)] focus:outline-none focus:ring-2 focus:ring-brand-red focus:shadow-[0_0_0_2px_rgba(239,68,68,0.55)] transition"
          />
          <button
            type="submit"
            className="w-full bg-brand-red text-white py-3 rounded-full font-bold text-lg shadow-lg active:scale-[.98] transition"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;