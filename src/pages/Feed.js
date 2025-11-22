import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import NavBar from '../components/NavBar';
import LikeButton from '../components/LikeButton';
import SaveButton from '../components/SaveButton';
import { useFavorites } from '../components/FavoritesContext';
import { BookmarkIcon } from '@heroicons/react/24/solid';


const initialPosts = [
  {
    id: 1,
    name: 'Marisa',
    role: 'Design, PUCPR',
    text: 'O design acessível não é só para um nicho, ele melhora o produto para a totalidade dos consumidores...',
  },
  {
    id: 2,
    name: 'Flávio',
    role: 'Design de Embalagem, UniCuritiba',
    text: 'Pensar em interface tangível é destravar memórias motoras que ampliam usabilidade...',
  },
];

const Feed = () => {
  const [feedData] = useState(initialPosts);
  const { toggleFavorite, isFavorited } = useFavorites();

  return (
    <div className="bg-white min-h-screen pb-32 px-4 pt-8 space-y-6">

      {/* Header com botão de voltar explícito para /newsletter */}
      <header className="p-4 flex items-center gap-4">
        <Link
          to="/newsletter"
          className="h-11 w-11 flex-shrink-0 bg-brand-feed text-white rounded-full flex items-center justify-center"
        >
          <ChevronLeftIcon className="h-7 w-7" />
        </Link>
        <div className="flex-grow bg-brand-feed text-white rounded-full py-2 px-6 flex justify-between items-center text-xl font-bold">
          <span>Feed</span>
          <BookmarkIcon className="h-6 w-6" />
        </div>
      </header>
     

      {feedData.map(post => {
        const saved = isFavorited('feed', post.id);
        return (
          <div key={post.id} className="bg-white rounded-3xl p-6 shadow-md relative">
            <div className="flex items-start mb-4">
              <div className="h-11 w-11 rounded-full bg-gray-800 flex-shrink-0 mr-4 flex items-center justify-center text-white text-2xl">
                👤
              </div>
              <div className="flex-grow">
                <strong className="block text-gray-800">{post.name}</strong>
                <span className="text-sm text-gray-500">{post.role}</span>
              </div>
              <div className="flex items-center gap-2">
                <LikeButton size={22} initialLiked={false} />
                <SaveButton
                  size={22}
                  saved={saved}
                  onChange={() => toggleFavorite('feed', post)}
                />
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm">{post.text}</p>
          </div>
        );
      })}

      <NavBar />
    </div>
  );
};

export default Feed;