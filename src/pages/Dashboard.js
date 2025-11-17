import React from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, BellIcon, Squares2X2Icon, UserCircleIcon } from '@heroicons/react/24/outline';

const Card = ({ to, bgColor, title, subtitle }) => (
  <Link to={to} className={`block p-6 rounded-3xl text-white ${bgColor} shadow-lg`}>
    <h3 className="text-2xl font-bold">{title}</h3>
    <p className="opacity-90">{subtitle}</p>
  </Link>
);

const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="p-8 flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-800">Olá, Carlos!</h2>
        <Link to="/profile">
          <Bars3Icon className="h-8 w-8 text-gray-700" />
        </Link>
      </header>

      <main className="px-8 space-y-4 flex-grow">
        <Card to="/newsletter" bgColor="bg-brand-red" title="Newsletter" subtitle="Aumente seu repertório!" />
        <Card to="/feed" bgColor="bg-brand-teal" title="Feed" subtitle="Acesse insights!" />
        <Card to="/challenges" bgColor="bg-brand-orange" title="Desafios" subtitle="Aprimore seus processos!" />
        <Card to="/community" bgColor="bg-brand-yellow" title="Comunidade" subtitle="Dê e receba feedbacks!" />
      </main>

      <footer className="m-6 p-4 bg-white rounded-full shadow-lg flex justify-around items-center">
        <BellIcon className="h-7 w-7 text-gray-500" />
        <div className="h-10 w-10 bg-brand-red rounded-lg flex items-center justify-center">
          <Squares2X2Icon className="h-6 w-6 text-white" />
        </div>
        <Link to="/profile">
          <UserCircleIcon className="h-7 w-7 text-gray-500" />
        </Link>
      </footer>
    </div>
  );
};

export default Dashboard;