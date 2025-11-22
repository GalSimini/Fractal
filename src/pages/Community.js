import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import NavBar from '../components/NavBar';
import LikeButton from '../components/LikeButton';

// Importar imagens (coloque os arquivos na pasta src/imgs/)
import marisa1 from '../imgs/marisa1.jpg';
import marisa2 from '../imgs/marisa2.jpg';
import flavio1 from '../imgs/flavio1.jpg';
import flavio2 from '../imgs/flavio2.jpg';
// import charles1 from '../imgs/charles1.jpg';
// import charles2 from '../imgs/charles2.jpg';

const pastChallenges = [
  { id: 1, date: 'Hoje', title: 'O Objeto Esquecido' },
  { id: 2, date: 'Ontem', title: 'Origem do Elemento' },
  { id: 3, date: '13.11.25', title: 'Ilhados' },
  { id: 4, date: '12.11.25', title: 'Materiais Orgânicos' },
];

const communityPosts = [
  {
    id: 1,
    name: 'Marisa',
    role: 'Design, PUCPR',
    tag: 'O OBJETO ESQUECIDO',
    imgs: [marisa1, marisa2],
  },
  {
    id: 2,
    name: 'Flávio',
    role: 'Design de Embalagem, UniCuritiba',
    tag: 'O OBJETO ESQUECIDO',
    imgs: [flavio1, flavio2],
  },
];

const Community = () => {
  const [inputs, setInputs] = useState({});
  const [comments, setComments] = useState({}); // { postId: [{ id, user:'Carlos', text }] }

  const handleInput = (postId, val) => {
    setInputs((prev) => ({ ...prev, [postId]: val }));
  };

  const submitComment = (postId) => {
    const text = (inputs[postId] || '').trim();
    if (!text) return;
    setComments((prev) => ({
      ...prev,
      [postId]: [
        ...(prev[postId] || []),
        { id: Date.now(), user: 'Carlos', text },
      ],
    }));
    setInputs((prev) => ({ ...prev, [postId]: '' }));
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-32">
      {/* Header */}
      <header className="p-4 flex items-center gap-4">
        <Link
          to="/newsletter"
          className="h-11 w-11 flex-shrink-0 bg-brand-yellow text-white rounded-full flex items-center justify-center"
        >
          <ChevronLeftIcon className="h-7 w-7" />
        </Link>
        <div className="flex-grow bg-brand-yellow text-white rounded-full py-2 px-6 text-xl font-bold text-center">
          Comunidade
        </div>
      </header>

      {/* Filtro de datas */}
      <section className="px-4 mb-4">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            Veja o resultado dos desafios de outros participantes e deixe seu feedback!
          </p>
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex justify-center rounded-full border border-brand-yellow bg-white px-4 py-2 text-sm font-medium text-brand-yellow">
              Hoje
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-72 origin-top-right rounded-2xl bg-brand-yellow p-3 text-white shadow-lg focus:outline-none">
              {pastChallenges.map((c) => (
                <Menu.Item key={c.id}>
                  {({ active }) => (
                    <button
                      className={`w-full text-left rounded-xl p-3 mb-2 last:mb-0 ${
                        active ? 'bg-white/20' : 'bg-white text-gray-900'
                      }`}
                    >
                      <span
                        className={`block text-xs ${
                          active ? 'text-white/80' : 'text-gray-500'
                        }`}
                      >
                        {c.date}
                      </span>
                      <span className={`block font-bold ${active ? 'text-white' : 'text-gray-900'}`}>
                        {c.title}
                      </span>
                    </button>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Menu>
        </div>
      </section>

      {/* Lista de posts */}
      <main className="p-4 space-y-6">
        {communityPosts.map((post) => {
          const value = inputs[post.id] || '';
          return (
            <article key={post.id} className="bg-white rounded-3xl p-4 shadow">
              {/* Cabeçalho do post */}
              <div className="flex items-start">
                <div className="h-11 w-11 rounded-full bg-gray-900 text-white flex items-center justify-center text-xl mr-3">
                  👤
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-semibold text-gray-900 leading-tight">{post.name} <span className="text-amber-400">★</span></p>
                      <p className="text-xs text-gray-500 -mt-0.5">{post.role}</p>
                    </div>
                    <span className="text-[10px] font-bold text-gray-600 border border-gray-300 rounded-md px-2 py-1 whitespace-nowrap">
                      {post.tag}
                    </span>
                  </div>
                  <p className="mt-3 font-semibold text-gray-800">Ver Resposta</p>
                </div>
              </div>

              {/* Imagens da resposta */}
              <div className="grid grid-cols-2 gap-2 mt-3">
                <img
                  src={post.imgs[0]}
                  alt={`Resposta de ${post.name} 1`}
                  className="h-36 w-full object-cover rounded-lg bg-gray-200"
                />
                <img
                  src={post.imgs[1]}
                  alt={`Resposta de ${post.name} 2`}
                  className="h-36 w-full object-cover rounded-lg bg-gray-200"
                />
              </div>

              {/* Comentário + like */}
              <div className="mt-3 flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Deixe seu comentário!"
                  value={value}
                  onChange={(e) => handleInput(post.id, e.target.value)}
                  className="flex-1 bg-gray-100 text-gray-600 placeholder-gray-400 rounded-full px-4 py-2 border-0 focus:outline-none"
                />
                {value.trim() !== '' && (
                  <button
                    onClick={() => submitComment(post.id)}
                    className="h-9 px-4 rounded-full bg-brand-yellow text-white text-sm font-semibold shadow active:scale-[.97] transition"
                  >
                    Enviar
                  </button>
                )}
                <LikeButton size={20} initialLiked={false} />
              </div>

              {/* Lista de comentários */}
              {comments[post.id] && comments[post.id].length > 0 && (
                <ul className="mt-4 space-y-3">
                  {comments[post.id].map((c) => (
                    <li
                      key={c.id}
                      className="flex items-start gap-3 bg-gray-50 rounded-2xl p-3"
                    >
                      <div className="h-8 w-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-sm">
                        👤
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-gray-800">
                          {c.user}
                        </p>
                        <p className="text-sm text-gray-700 leading-snug">
                          {c.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          );
        })}
      </main>
      <NavBar />
    </div>
  );
};

export default Community;