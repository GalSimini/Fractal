import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { ChevronLeftIcon, PlusIcon, HeartIcon } from '@heroicons/react/24/solid';

const feedData = [
  { id: 1, name: 'Marisa', role: 'Design, PUCPR', text: 'O design acessível não é só para um nicho, ele melhora o produto para a totalidade dos consumidores...' },
  { id: 2, name: 'Gustavo', role: 'Design de Embalagem, UFSC', text: 'Em um mercado saturado, pensar na pessoa com mobilidade reduzida, ou em quem simplesmente tem menos destreza, é uma forma de inovar na base do produto...' },
  { id: 3, name: 'Leila', role: 'Design de Moda, UFPR', text: 'O produto em si conta a história de empatia da Selena. Como futuros designers, isso nos ensina que a forma (a embalagem) deve estar profundamente alinhada ao valor e à missão...' },
];

const dates = ['15/11/25', '14/11/25', '13/11/25', '12/11/25', '11/11/25', '10/11/25'];

const Feed = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="p-4 flex items-center gap-4 bg-gray-100 sticky top-0 z-10">
        <Link to="/dashboard" className="h-11 w-11 flex-shrink-0 bg-brand-teal text-white rounded-full flex items-center justify-center">
          <ChevronLeftIcon className="h-7 w-7" />
        </Link>
        <div className="flex-grow bg-brand-teal text-white rounded-full py-2 px-6 flex justify-center items-center text-xl font-bold gap-2">
          <span>Feed</span> <span role="img" aria-label="smile">😊</span>
        </div>
        <button className="h-11 w-11 flex-shrink-0 bg-brand-teal text-white rounded-full flex items-center justify-center text-3xl">
          <PlusIcon className="h-7 w-7" />
        </button>
      </header>

      <main className="p-4">
        <div className="text-center mb-6 relative">
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex justify-center w-full rounded-full border border-brand-teal bg-white px-4 py-2 text-sm font-medium text-brand-teal">
              15/11/25
            </Menu.Button>
            <Menu.Items className="absolute left-1/2 -translate-x-1/2 mt-2 w-40 origin-top rounded-2xl bg-brand-teal p-2 text-white shadow-lg focus:outline-none">
              <div className="px-1 py-1">
                {dates.map(date => (
                  <Menu.Item key={date}>
                    {({ active }) => (
                      <button className={`${active ? 'bg-white/20' : ''} group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                        {date}
                      </button>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Menu>
        </div>

        <div className="space-y-6">
          {feedData.map((post) => (
            <div key={post.id} className="bg-white rounded-3xl p-6 shadow-md">
              <div className="flex items-start mb-4">
                <div className="h-11 w-11 rounded-full bg-gray-800 flex-shrink-0 mr-4 flex items-center justify-center text-white text-2xl">👤</div>
                <div className="flex-grow">
                  <strong className="block text-gray-800">{post.name}</strong>
                  <span className="text-sm text-gray-500">{post.role}</span>
                </div>
                <HeartIcon className="h-7 w-7 text-brand-red/80" />
              </div>
              <p className="text-gray-700 leading-relaxed">{post.text}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Feed;