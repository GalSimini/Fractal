import React from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, ArrowUpOnSquareIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';

const Profile = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col p-6 text-center">
      <header className="text-right">
        <Link to="/dashboard" className="inline-block p-2">
          <XMarkIcon className="h-7 w-7 text-gray-600" />
        </Link>
      </header>

      <div className="flex-grow">
        <div className="w-28 h-28 bg-gray-200 rounded-full mx-auto mb-4 bg-[url('https://i.imgur.com/J2aA412.png')] bg-cover bg-center"></div>
        <h2 className="text-3xl font-bold">Carlos Silva</h2>
        <p className="text-gray-500">carlos.silva@pucpr.edu.br</p>
        <span className="inline-block border border-gray-500 rounded-full px-3 py-1 text-sm my-2">
          Designer Disruptivo
        </span>
        <p className="text-sm text-gray-500">10 desafios com feedback alto!</p>

        <div className="my-8 space-y-4 text-left">
          <button className="w-full p-4 bg-brand-red text-white rounded-2xl">
            <span className="text-xl font-bold">Meus Favoritos</span>
            <span className="block mt-1 border border-white/50 rounded-lg px-2 py-0.5 text-sm w-fit">53 favoritados</span>
          </button>
          <button className="w-full p-4 bg-brand-orange text-white rounded-2xl">
            <span className="text-xl font-bold">Meus Desafios</span>
            <span className="block mt-1 border border-white/50 rounded-lg px-2 py-0.5 text-sm w-fit">10 desafios completos</span>
          </button>
          <button className="w-full p-4 bg-brand-yellow text-white rounded-2xl">
            <span className="text-xl font-bold">Meus Feedbacks</span>
            <span className="block mt-1 border border-white/50 rounded-lg px-2 py-0.5 text-sm w-fit">10 desafios completos</span>
          </button>
        </div>

        <div>
          <p className="text-sm text-gray-500">conectar ao</p>
          <button className="bg-[#0077b5] text-white font-bold px-4 py-2 rounded-full mt-1">
            LinkedIn
          </button>
        </div>
      </div>

      <footer className="flex justify-center gap-4 mt-8">
        <button className="h-14 w-14 bg-gray-200 rounded-full flex items-center justify-center">
          <ArrowUpOnSquareIcon className="h-7 w-7 text-gray-600" />
        </button>
        <button className="h-14 w-14 bg-gray-200 rounded-full flex items-center justify-center">
          <Cog6ToothIcon className="h-7 w-7 text-gray-600" />
        </button>
      </footer>
    </div>
  );
};

export default Profile;