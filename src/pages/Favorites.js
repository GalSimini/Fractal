import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BookmarkIcon,
  FaceSmileIcon,
  HandRaisedIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { useFavorites } from '../components/FavoritesContext';
import NavBar from '../components/NavBar';
import SaveButton from '../components/SaveButton';

const categoryMeta = {
  newsletter: {
    label: 'Newsletter',
    color: 'bg-brand-red',
    accent: 'text-brand-red',
    icon: BookmarkIcon,
  },
  feed: {
    label: 'Feed',
    color: 'bg-brand-feed',
    accent: 'text-brand-feed',
    icon: FaceSmileIcon,
  },
  desafios: {
    label: 'Desafios',
    color: 'bg-brand-orange',
    accent: 'text-brand-orange',
    icon: HandRaisedIcon,
  },
};

const Favorites = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite, isFavorited } = useFavorites();
  const [tab, setTab] = useState('newsletter');

  const meta = categoryMeta[tab];
  const TabIcon = meta.icon;

  return (
    <div className={`min-h-screen pb-32 ${meta.color} transition-colors`}>
      {/* Header sobre fundo colorido */}
      <header className="px-5 pt-6 pb-3 rounded-b-3xl text-white relative">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate(-1)}
            className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow"
            aria-label="Fechar"
          >
            <XMarkIcon className={`h-6 w-6 ${meta.accent.replace('text-', 'text-')}`} />
          </button>
          <h1 className="text-2xl font-semibold text-white flex items-center gap-2">
            Meus Favoritos <TabIcon className="h-6 w-6" />
          </h1>
        </div>

        {/* Linha: categoria + mini navbar (canto superior direito) */}
        <div className="mt-3 flex items-center justify-between">
          <span className="inline-block bg-white text-gray-700 text-xs px-3 py-1 rounded-full">
            categoria:
          </span>

          <div className="flex items-center gap-2">
            {Object.keys(categoryMeta).map((key) => {
              const Icon = categoryMeta[key].icon;
              const active = tab === key;
              return (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  aria-label={categoryMeta[key].label}
                  className={`h-9 w-9 rounded-full flex items-center justify-center transition
                    ${active ? 'bg-white shadow-md scale-105' : 'bg-white/80'}
                  `}
                >
                  <Icon
                    className={`h-5 w-5 ${
                      active ? categoryMeta[key].accent : 'text-gray-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Área de lista: retângulo branco de canto arredondado sobre o fundo colorido */}
      <main className="px-5 mt-4">
        <div className="bg-white rounded-3xl p-4 shadow-lg min-h-[60vh]">
          <h2 className="text-sm font-medium text-gray-600 mb-3">
            {categoryMeta[tab].label}
          </h2>

          {/* Newsletter favoritada */}
          {tab === 'newsletter' && (
            <div className="space-y-4">
              {favorites.newsletter.length === 0 && (
                <p className="text-sm text-gray-500">
                  Nenhuma newsletter favoritada ainda.
                </p>
              )}
              {favorites.newsletter.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-white/90 text-gray-800 text-[11px] font-semibold px-2 py-1 rounded-full">
                      {item.date}
                    </div>
                    <SaveButton
                      size={22}
                      saved={isFavorited('newsletter', item.id)}
                      onChange={() => toggleFavorite('newsletter', item)}
                      className="absolute bottom-2 right-2 bg-white"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-[15px] font-semibold text-gray-900 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">{item.category}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Feed favoritado */}
          {tab === 'feed' && (
            <div className="space-y-4">
              {favorites.feed.length === 0 && (
                <p className="text-sm text-gray-500">
                  Nenhum post do feed favoritado ainda.
                </p>
              )}
              {favorites.feed.map((post) => (
                <div key={post.id} className="bg-gray-50 rounded-xl p-4 shadow">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm">
                      👤
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 leading-tight">
                        {post.name} <span className="text-amber-400">★</span>
                      </p>
                      <p className="text-[11px] text-gray-500 -mt-0.5">{post.role}</p>
                      <p className="text-xs text-gray-700 mt-2 leading-snug">{post.text}</p>
                    </div>
                    <SaveButton
                      size={20}
                      saved={isFavorited('feed', post.id)}
                      onChange={() => toggleFavorite('feed', post)}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Desafios favoritados */}
          {tab === 'desafios' && (
            <div className="space-y-4">
              {favorites.desafios.length === 0 && (
                <p className="text-sm text-gray-500">
                  Nenhum desafio favoritado ainda.
                </p>
              )}
              {favorites.desafios.map((ch) => (
                <div key={ch.id} className="bg-gray-50 rounded-xl p-4 shadow">
                  <p className="text-sm font-medium text-gray-900">{ch.title}</p>
                  <p className="text-xs text-gray-600 mt-1">{ch.snippet}</p>
                  <div className="mt-3 flex justify-end">
                    <SaveButton
                      size={20}
                      saved={isFavorited('desafios', ch.id)}
                      onChange={() => toggleFavorite('desafios', ch)}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <NavBar />
    </div>
  );
};

export default Favorites;