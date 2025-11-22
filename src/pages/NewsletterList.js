import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { useMenu } from '../components/MenuContext';
import { useFavorites } from '../components/FavoritesContext';
import SaveButton from '../components/SaveButton';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

// Substitua pelos imports reais das imagens
import img1 from '../imgs/makeRareBeauty.jpg';
import img2 from '../imgs/cadeirasNaGrama.jpg';
import img3 from '../imgs/predio.jpg';

const newsData = [
  { id: 1, category: 'Funcionais e acessíveis', title: 'Selena Gomez revoluciona o mercado de embalagens de maquiagem com Rare Beauty.', image: img1, date: '15/11/25' },
  { id: 2, category: 'Música e Cultura', title: 'Como Bad Bunny usou seu novo disco para defender a história e a cultura de Porto Rico', image: img2, date: '14/11/25' },
  { id: 3, category: 'Arquitetura e Arte', title: 'Edifício Copan: Tudo sobre o grande ícone da arquitetura moderna em São Paulo', image: img3, date: '13/11/25' },
];

const NewsletterList = () => {
  const { toggleMenu } = useMenu();
  const { toggleFavorite, isFavorited } = useFavorites();
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return newsData;
    return newsData.filter(n =>
      n.title.toLowerCase().includes(q) ||
      n.category.toLowerCase().includes(q) ||
      n.date.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="bg-white min-h-screen pb-32">
      <header className="p-4 pt-5 flex items-center justify-between">
        <h1 className="text-2xl text-gray-900 py-1">Olá, Carlos!</h1>
        <button
          onClick={toggleMenu}
          aria-label="Menu"
          className="relative h-7 w-7 flex flex-col items-center justify-center space-y-[3px]"
        >
          <span className="block h-[2px] w-full bg-black rounded" />
          <span className="block h-[2px] w-full bg-black rounded" />
          <span className="block h-[2px] w-full bg-black rounded" />
        </button>
      </header>

      {/* Barra de busca */}
      <div className="px-4 mb-6">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Buscar"
            className="w-full bg-gray-100 text-sm rounded-full pl-12 pr-4 py-2.5 outline-none placeholder-gray-400 focus:bg-white focus:ring-2 focus:ring-gray-300 transition"
          />
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 absolute left-4 top-5 -translate-y-1/2" />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-gray-700"
            >
              limpar
            </button>
          )}
        </div>
        {query && (
          <p className="mt-2 text-[11px] text-gray-500">
            {filtered.length} resultado(s) para &quot;{query}&quot;
          </p>
        )}
      </div>

      <main className="px-4 space-y-6">
        {filtered.map(item => {
          const saved = isFavorited('newsletter', item.id);
          return (
            <div
              key={item.id}
              className="bg-white rounded-3xl shadow overflow-hidden relative"
            >
              <Link to={`/article/${item.id}`} className="block">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover bg-gray-200"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 text-gray-800 text-xs font-bold px-3 py-1 rounded-full">
                    {item.date}
                  </div>
                </div>
                {/* container dos textos vira relativo para ancorar o botão */}
                <div className="p-4 pr-12 relative">
                  <p className="text-sm text-gray-500">{item.category}</p>
                  <h3 className="text-base text-gray-800 leading-tight mt-1">
                    {item.title}
                  </h3>
                </div>
              </Link>

              {/* Fora do Link para não navegar ao salvar */}
              <SaveButton
                size={22}
                saved={saved}
                onChange={() => toggleFavorite('newsletter', item)}
                className="absolute bottom-4 right-4 md:bottom-5 md:right-5"
              />
            </div>
          );
        })}

        {filtered.length === 0 && (
          <p className="text-sm text-gray-500">Nada encontrado.</p>
        )}
      </main>
      <NavBar />
    </div>
  );
};

export default NewsletterList;