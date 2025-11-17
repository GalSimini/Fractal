import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { ChevronLeftIcon, HandRaisedIcon, UserGroupIcon } from '@heroicons/react/24/solid';

const currentChallenge = {
  title: 'O Objeto Esquecido',
  type: 'Em Grupo',
  description:
    'Imagine: Sua equipe foi encarregada de desenvolver uma nova linha de produtos sustentáveis para uma startup focada em soluções para cidades inteligentes. O orçamento é apertado, e a diretriz principal é: Todo produto deve ser construído a partir de um único ‘Objeto Esquecido’',
  object: 'GRAMOFONE',
  analysis:
    'Analise o Gramofone sob 3 óticas diferentes: Materialidade (ex: polímeros, metal, tecido), História e Função secundária (ex: quais são os seus atributos físicos, formato, som).',
};

const pastChallenges = [
  { id: 1, title: 'O Objeto Esquecido', date: 'Hoje' },
  { id: 2, title: 'Origem do Elemento', date: 'Ontem' },
  { id: 3, title: 'Ilhados', date: '13.11.25' },
  { id: 4, title: 'Materiais Orgânicos', date: '12.11.25' },
];

const Challenges = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="p-4 flex items-center gap-4">
        <Link to="/dashboard" className="h-11 w-11 flex-shrink-0 bg-brand-orange text-white rounded-full flex items-center justify-center">
          <ChevronLeftIcon className="h-7 w-7" />
        </Link>
        <div className="flex-grow bg-brand-orange text-white rounded-full py-2 px-6 flex justify-center items-center text-xl font-bold gap-2">
          <span>Desafios</span> <HandRaisedIcon className="h-6 w-6" />
        </div>
      </header>

      <main className="p-4">
        <div className="flex justify-between items-center gap-4 mb-6">
          <p className="text-gray-600 text-sm flex-1">Aproveite seu desafio de hoje! E sinta-se à vontade para resolver desafios anteriores!</p>
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex justify-center rounded-full border border-brand-orange bg-white px-4 py-2 text-sm font-medium text-brand-orange">
              Hoje
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-2xl bg-brand-orange p-2 text-white shadow-lg focus:outline-none">
              {pastChallenges.map((challenge) => (
                <Menu.Item key={challenge.id}>
                  {({ active }) => (
                    <button className={`group flex w-full items-center rounded-xl p-3 text-sm text-left ${challenge.date === 'Hoje' ? 'bg-brand-red' : 'bg-white text-gray-900'}`}>
                      <div className={`${challenge.date === 'Hoje' ? 'text-white/80' : 'text-gray-500'} text-xs font-normal`}>{challenge.date}</div>
                      <div className="font-bold mt-1">{challenge.title}</div>
                    </button>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Menu>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="border border-gray-400 text-gray-600 rounded-full px-3 py-1 text-sm">{currentChallenge.type}</span>
            <UserGroupIcon className="h-7 w-7 text-brand-red" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{currentChallenge.title}</h2>
          <p className="text-gray-600 leading-relaxed">{currentChallenge.description}</p>
          <div className="my-6">
            <p className="text-sm text-gray-500">Seu objeto é:</p>
            <strong className="text-2xl font-bold text-gray-800">{currentChallenge.object}</strong>
          </div>
          <p className="text-gray-600 leading-relaxed">{currentChallenge.analysis}</p>
        </div>

        <button className="w-full bg-brand-red text-white py-4 rounded-full font-bold text-lg shadow-lg">
          Responder
        </button>
      </main>
    </div>
  );
};

export default Challenges;