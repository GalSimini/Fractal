import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  HandRaisedIcon,
  FaceSmileIcon,
  BookmarkIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';
import logoHome from '../imgs/logoSemTexto.jpg';
import { useMenu } from './MenuContext';

const items = [
  { id: 'desafios', to: '/challenges', icon: HandRaisedIcon, label: 'desafios' },
  { id: 'feed', to: '/feed', icon: FaceSmileIcon, label: 'feed' },
  { id: 'home', to: '/newsletter', icon: null, label: 'menu' }, // central abre menu
  { id: 'newsletter', to: '/newsletter', icon: BookmarkIcon, label: 'newsletter' },
  { id: 'comunidade', to: '/community', icon: UsersIcon, label: 'comunidade' },
];

const activeColor = (id) => {
  switch (id) {
    case 'newsletter': return 'text-brand-red';
    case 'feed': return 'text-brand-feed';
    case 'desafios': return 'text-brand-orange';
    case 'comunidade': return 'text-brand-yellow';
    default: return 'text-gray-600';
  }
};

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toggleMenu } = useMenu();

  return (
    <nav className="fixed bottom-4 left-0 right-0 mx-auto max-w-md z-40">
      <div className="mx-4 bg-white rounded-full shadow-[0_6px_20px_-4px_rgba(0,0,0,0.25)] flex justify-between items-center px-6 py-4">
        {items.map((i) => {
          const Icon = i.icon;
          const isCenter = i.id === 'home';
          const isActive = location.pathname.startsWith(i.to) && !isCenter;
          const color = isActive ? activeColor(i.id) : 'text-gray-600';

          return (
            <button
              key={i.id}
              onClick={() => (isCenter ? toggleMenu() : navigate(i.to))}
              className="flex-1 flex flex-col items-center justify-center group"
              aria-label={i.label}
            >
              {Icon ? (
                <Icon className={`h-6 w-6 transition ${color} ${isActive ? 'scale-110' : ''}`} />
              ) : (
                <img
                  src={logoHome}
                  alt="Menu"
                  className="h-8 w-8 object-contain transition group-active:scale-95"
                />
              )}
              <span
                className={`mt-1 text-[10px] font-medium transition ${isActive ? activeColor(i.id) : 'text-gray-500'}`}
              >
                {i.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;