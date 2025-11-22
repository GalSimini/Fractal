import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Cog6ToothIcon,
  BellIcon,
  HandRaisedIcon,
  BookmarkIcon,
  ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/solid';
import NavBar from '../components/NavBar';
import logoHome from '../imgs/logoSemTexto.jpg';
import { useMenu } from '../components/MenuContext';
import { useFavorites } from '../components/FavoritesContext';

const Dashboard = ({ drawer }) => {
  const navigate = useNavigate();
  const [ setActive] = useState(null);
  const { open, closeMenu } = useMenu();
  const { favorites } = useFavorites(); // NEW

  const counts = {
    newsletter: favorites.newsletter.length,
    feed: favorites.feed.length,
    desafios: favorites.desafios.length,
    feedbacks: 0, // ajustar quando implementar favoritos de feedback
  };
  const totalFavorites = counts.newsletter + counts.feed + counts.desafios;

  if (drawer) {
    return (
      <div
        className={`fixed inset-0 z-50 pointer-events-none transition-all duration-300 ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity ${
            open ? 'opacity-100 pointer-events-auto' : 'opacity-0'
          }`}
        />
        {/* Painel */}
        <aside
          className={`absolute left-1/2 -translate-x-1/2 top-0 w-[90%] max-w-md bg-white rounded-b-3xl shadow-xl pb-8 px-6 pt-6 transition-transform pointer-events-auto ${
            open ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex justify-end">
            <button
              onClick={closeMenu}
              className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center"
            >
              <Cog6ToothIcon className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          <div className="flex items-center justify-center mt-2 mb-6">
            <div className="relative">
              <div className="h-28 w-28 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
                <span className="text-3xl">👤</span>
              </div>
              <button
                className="absolute -top-1 -right-1 h-9 w-9 rounded-full bg-brand-red flex items-center justify-center shadow"
                aria-label="Notificações"
              >
                <BellIcon className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>

          <h2 className="text-2xl text-center text-gray-800">Carlos Silva</h2>
          <p className="text-xs text-center text-gray-500">carlos.silva@pucpr.edu.br</p>

          <div className="mt-3 flex flex-col items-center">
            <span className="px-4 py-1 rounded-full border border-gray-400 text-xs text-gray-700 bg-white">
              Designer Disruptivo
            </span>
            <span className="text-[10px] text-gray-500 mt-1">
              10 desafios com feedback alto!
            </span>
          </div>

          <div className="w-full mt-8 space-y-4">
            <div
              onClick={() => {
                closeMenu();
                navigate('/favorites');
              }}
              className="relative bg-brand-red rounded-3xl px-6 py-5 text-white shadow cursor-pointer active:scale-[.98] transition"
            >
              <p className="text-xl flex items-center gap-2 text-white">
                <BookmarkIcon className="h-6 w-6" /> Meus Favoritos
              </p>
              <span className="mt-3 inline-block text-xs font-semibold px-3 py-1 rounded-full bg-white/25 text-white">
                {totalFavorites} itens favoritados
              </span>
            </div>
            <div className="relative bg-brand-orange rounded-3xl px-6 py-5 text-white shadow">
              <p className="text-xl flex items-center gap-2 text-white">
                <HandRaisedIcon className="h-6 w-6" /> Meus Desafios
              </p>
              <span className="mt-3 inline-block text-xs font-semibold px-3 py-1 rounded-full bg-white/25 text-white">
                {counts.desafios} desafios
              </span>
            </div>
            <div className="relative bg-brand-yellow rounded-3xl px-6 py-5 text-white shadow">
              <p className="text-xl flex items-center gap-2 text-white">
                <ChatBubbleBottomCenterTextIcon className="h-6 w-6" /> Meus Feedbacks
              </p>
              <span className="mt-3 inline-block text-xs font-semibold px-3 py-1 rounded-full bg-white/25 text-white">
                {counts.feedbacks} feedbacks
              </span>
            </div>
          </div>
        </aside>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 pt-8 pb-32">
      <div className="w-full flex justify-end">
        <button className="p-2">
          <Cog6ToothIcon className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      <div className="relative mt-2">
          <div className="h-32 w-32 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
            <img
              src={logoHome}
              alt="avatar"
              onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/128'; }}
              className="h-full w-full object-cover"
            />
          </div>
        <button
          className="absolute -top-1 -right-1 h-10 w-10 rounded-full bg-brand-red flex items-center justify-center shadow-md"
          aria-label="Notificações"
          onClick={() => setActive('notifs')}
        >
          <BellIcon className="h-5 w-5 text-white" />
        </button>
      </div>

      <h2 className="text-3xl text-gray-800 mt-4">Carlos Silva</h2>
      <p className="text-sm text-gray-600 -mt-1">carlos.silva@pucpr.edu.br</p>

      <div className="mt-3 inline-flex flex-col items-center">
        <span className="px-4 py-1 rounded-full border border-gray-400 text-sm text-gray-700 bg-white">
          Designer Disruptivo
        </span>
        <span className="text-[11px] text-gray-500 mt-1">
          10 desafios com feedback alto!
        </span>
      </div>

      <div className="w-full mt-8 space-y-6">
        <div className="relative">
          <button
            className="w-full bg-brand-red rounded-3xl px-6 py-6 text-left text-white shadow-lg"
            onClick={() => navigate('/favorites')}
          >
            <span className="block text-2xl text-white">Meus Favoritos</span>
            <span className="mt-3 inline-block text-xs  px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white">
              {totalFavorites} itens favoritados
            </span>
          </button>
        </div>
        <button className="w-full bg-brand-orange rounded-3xl px-6 py-6 text-left text-white shadow-lg">
          <span className="block text-2xl text-white">Meus Desafios</span>
          <span className="mt-3 inline-block text-xs font-semibold px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white">
            {counts.desafios} desafios favoritados
          </span>
        </button>
        <button className="w-full bg-brand-yellow rounded-3xl px-6 py-6 text-left text-white shadow-lg">
          <span className="block text-2xl text-white">Meus Feedbacks</span>
          <span className="mt-3 inline-block text-xs font-semibold px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white">
            {counts.feedbacks} feedbacks favoritados
          </span>
        </button>
      </div>

      <NavBar />
    </div>
  );
};

export default Dashboard;