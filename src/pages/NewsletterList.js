import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, BookmarkIcon } from '@heroicons/react/24/solid';

const newsData = [
  { id: 1, category: 'Funcionais e acessíveis', title: 'Selena Gomez revoluciona o mercado de embalagens de maquiagem com Rare Beauty.', image: 'img-noticia-1.png', date: '15/11/25' },
  { id: 2, category: 'Música e Cultura', title: 'Como Bad Bunny usou seu novo disco para defender a história e a cultura de Porto Rico', image: 'img-noticia-2.png', date: '14/11/25' },
  { id: 3, category: 'Arquitetura e Arte', title: 'Edifício Copan: Tudo sobre o grande ícone da arquitetura moderna em São Paulo', image: 'img-noticia-3.png', date: '13/11/25' },
];

const NewsletterList = () => {
  return (
    <div className="bg-white min-h-screen">
      <header className="p-4 flex items-center gap-4">
        <Link to="/dashboard" className="h-11 w-11 flex-shrink-0 bg-brand-red text-white rounded-full flex items-center justify-center">
          <ChevronLeftIcon className="h-7 w-7" />
        </Link>
        <div className="flex-grow bg-brand-red text-white rounded-full py-2 px-6 flex justify-between items-center text-xl font-bold">
          <span>Newsletter</span>
          <BookmarkIcon className="h-6 w-6" />
        </div>
      </header>

      <main className="p-4 space-y-6">
        {newsData.map((item) => (
          <Link to={`/article/${item.id}`} key={item.id} className="block shadow-lg rounded-3xl overflow-hidden">
            <div className="relative">
              <img src={`/imgs/${item.image}`} alt={item.title} className="w-full h-48 object-cover bg-gray-200" />
              <div className="absolute top-3 right-3 bg-white/90 text-gray-800 text-sm font-bold px-3 py-1 rounded-full">{item.date}</div>
            </div>
            <div className="p-4 relative">
              <p className="text-sm text-gray-500">{item.category}</p>
              <h3 className="text-lg font-bold text-gray-800 leading-tight mt-1 pr-8">{item.title}</h3>
              <BookmarkIcon className="h-8 w-8 text-brand-red absolute right-4 bottom-4" />
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default NewsletterList;