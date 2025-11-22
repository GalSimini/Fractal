import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Menu } from '@headlessui/react'; // removido
import NavBar from '../components/NavBar';
import SaveButton from '../components/SaveButton';
import { useFavorites } from '../components/FavoritesContext';
import {
  ChevronLeftIcon,
  HandRaisedIcon,
} from '@heroicons/react/24/solid';
import faceNeutral from '../imgs/face-neutral.png';
import faceHappy from '../imgs/face-happy.png';

const currentChallenge = {
  title: 'O Objeto Esquecido',
  type: 'Em Grupo',
  description:
    'Imagine: Sua equipe foi encarregada de desenvolver uma nova linha de produtos sustentáveis para uma startup focada em soluções para cidades inteligentes. O orçamento é apertado, e a diretriz principal é: Todo produto deve ser construído a partir de um único ‘Objeto Esquecido’',
  object: 'GRAMOFONE',
  analysis:
    'Analise o Gramofone sob 3 óticas diferentes: Materialidade (ex: polímeros, metal, tecido), História e Função secundária (ex: quais são os seus atributos físicos, formato, som).',
};

// Faces (agora usando imagens)
const Face = ({ mood = 'neutral' }) => {
  const src = mood === 'happy' ? faceHappy : faceNeutral;
  return (
    <div
      className={
        `w-28 h-28 rounded-full border-2  flex items-center justify-center overflow-hidden bg-white select-none
         transition-transform duration-500 ease-out origin-center
         ${mood === 'happy' ? 'rotate-0' : 'rotate-0'}`
      }
    >
      <img src={src} alt={`Rosto ${mood}`} className="w-full h-full object-contain" />
    </div>
  );
};

// Confetti (simplificado)
const Confetti = () => {
  const pieces = Array.from({ length: 24 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((_, i) => (
        <span
          key={i}
          className="absolute w-2 h-2 rounded-sm animate-confetti"
          style={{
            left: Math.random() * 100 + '%',
            top: '-10%',
            backgroundColor: ['#ef4444', '#0d9488', '#f97316', '#f59e0b'][i % 4],
            animationDelay: (Math.random() * 0.8).toFixed(2) + 's',
            animationDuration: (2 + Math.random() * 1.5).toFixed(2) + 's',
          }}
        />
      ))}
    </div>
  );
};

const Challenges = () => {
  const [phase, setPhase] = useState('detail');
  const { toggleFavorite, isFavorited } = useFavorites();

  // Animação automática envio
  useEffect(() => {
    let t1, t2;
    if (phase === 'sending') {
      t1 = setTimeout(() => setPhase('sent'), 900); // neutro -> feliz
      t2 = setTimeout(() => setPhase('detail'), 3400); // retorna
    }
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [phase]);

  return (
    <div className="bg-gray-100 min-h-screen pb-32 relative">
      <style>
        {`@keyframes confetti {
          0% { transform: translateY(0) rotate(0deg); opacity:1;}
          100% { transform: translateY(120vh) rotate(720deg); opacity:0;}
        }
        .animate-confetti { animation-name: confetti; }`}
      </style>

      <header className="p-4 flex items-center gap-4">
        {phase === 'form' || phase === 'sending' || phase === 'sent' ? (
          <button
            onClick={() => setPhase('detail')}
            className="h-11 w-11 flex-shrink-0 bg-brand-orange text-white rounded-full flex items-center justify-center"
          >
            <ChevronLeftIcon className="h-7 w-7" />
          </button>
        ) : (
          <Link
            to="/newsletter"
            className="h-11 w-11 flex-shrink-0 bg-brand-orange text-white rounded-full flex items-center justify-center"
          >
            <ChevronLeftIcon className="h-7 w-7" />
          </Link>
        )}
        <div className="flex-grow bg-brand-orange text-white rounded-full py-2 px-6 flex justify-center items-center text-xl font-semibold gap-2">
          <span>Desafios</span> <HandRaisedIcon className="h-6 w-6" />
        </div>
      </header>

      {phase === 'detail' && (
        <main className="p-4">
          <div className="flex justify-between items-center gap-4 mb-6">
            <p className="text-gray-600 text-sm flex-1">
              Aproveite seu desafio de hoje! E sinta-se à vontade para resolver desafios anteriores!
            </p>

            {/* Hoje (sem click) */}
            <div className="inline-flex justify-center rounded-full border border-brand-orange bg-white px-4 py-2 text-sm text-brand-orange select-none pointer-events-none">
              Hoje
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-md mb-6 relative">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">{currentChallenge.title}</h2>
            <p className="text-gray-600 leading-relaxed">{currentChallenge.description}</p>
            <div className="my-6">
              <p className="text-sm text-gray-500">Seu objeto é:</p>
              <strong className="text-2xl text-gray-800">{currentChallenge.object}</strong>
            </div>
            <p className="text-gray-600 leading-relaxed">{currentChallenge.analysis}</p>

            <div className="absolute top-4 right-4">
              <SaveButton
                size={24}
                saved={isFavorited('desafios', currentChallenge.title)}
                onChange={() =>
                  toggleFavorite('desafios', {
                    id: currentChallenge.title,
                    title: currentChallenge.title,
                    snippet: currentChallenge.description.slice(0, 80) + '...',
                  })
                }
              />
            </div>
          </div>

          <button
            onClick={() => setPhase('form')}
            className="w-full bg-brand-orange text-white py-4 rounded-full font-semibold text-lg shadow-lg active:scale-[.98] transition"
          >
            Responder
          </button>
        </main>
      )}

      {/* FORM SUBMISSION */}
      {phase === 'form' && (
        <div className="p-4">
          <div className="bg-white rounded-3xl p-4 shadow-md">
            <p className="text-xs text-gray-600 mb-4">
              Digite sua resposta e/ou anexe seus arquivos! PDF e png/jpg apenas.
            </p>
            <textarea
              placeholder="Digite aqui"
              className="w-full h-40 bg-white border border-gray-200 rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-brand-red mb-4"
            />
            <div className="w-full h-40 bg-gray-200 rounded-xl flex flex-col items-center justify-center gap-2 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-10 w-14 bg-white rounded flex items-center justify-center text-xs">
                  Img
                </div>
                <span className="text-xs">ou</span>
                <div className="h-10 w-14 bg-white rounded flex items-center justify-center text-xs">
                  Anexo
                </div>
              </div>
              <span className="text-[11px]">Arraste ou clique (placeholder)</span>
            </div>
            <button
              onClick={() => setPhase('sending')}
              className="mt-6 w-full bg-brand-orange text-white py-3 rounded-full font-bold text-lg shadow-md active:scale-[.98] transition"
            >
              Enviar
            </button>
          </div>
        </div>
      )}

      {/* SENDING (neutral face) */}
      {phase === 'sending' && (
        <div className="flex flex-col items-center justify-center pt-24 animate-fade">
          <Face mood="neutral" />
        </div>
      )}

      {/* SENT (happy + confetti + button) */}
      {phase === 'sent' && (
        <div className="flex flex-col items-center justify-center pt-24 relative">
          <Confetti />
          <Face mood="happy" />
          <h3 className="mt-8 text-2xl font-semibold">Enviado!</h3>
          <button
            onClick={() => setPhase('detail')}
            className="mt-10 bg-brand-orange text-white px-8 py-3 rounded-full font-semibold shadow-md active:scale-[.98] transition"
          >
            Ver Resposta
          </button>
        </div>
      )}

      <NavBar />
    </div>
  );
};

export default Challenges;