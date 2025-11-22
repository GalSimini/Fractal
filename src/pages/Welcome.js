import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CubeTransparentIcon,
  CalendarDaysIcon,
  HandRaisedIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';

const slides = [
  {
    id: 0,
    title: ['Bem vindo(a)', 'ao Fractal!'],
    icon: CubeTransparentIcon,
    iconWrapper: 'bg-gradient-to-tr from-brand-teal via-brand-orange to-brand-red',
    text: 'Chega de fórmulas prontas. Nosso app, movido por uma IA provocadora, existe para romper com o método linear de ensino e transformar você em um designer com profunda capacidade analítica e de inovação.',
  },
  {
    id: 1,
    title: ['Alimentação diária', 'de repertório:'],
    icon: CalendarDaysIcon,
    iconWrapper: 'bg-brand-red',
    text: 'Receba doses diárias de conhecimento em História, Filosofia, Arte e Ciência, estimulando conexões criativas inesperadas.',
  },
  {
    id: 2,
    title: ['Dinâmicas e', 'Desafios (IA)'],
    icon: HandRaisedIcon,
    iconWrapper: 'bg-brand-teal',
    text: 'Nossa IA gera problemas não-lineares, como a “Dinâmica do Objeto Esquecido”, forçando você a aplicar o repertório adquirido e justificar escolhas criativas.',
  },
  {
    id: 3,
    title: ['Comunidade', 'e Portfólio'],
    icon: UsersIcon,
    iconWrapper: 'bg-brand-yellow',
    text: 'Transforme seu aprendizado em prova social. Publique resultados de desafios, receba feedback e inspire-se nos processos de outros designers.',
    final: true,
  },
];

const Welcome = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);

  const onScroll = (e) => {
    const w = e.target.clientWidth;
    const x = e.target.scrollLeft;
    setActive(Math.round(x / w));
  };

  // snap correction (optional)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let timeout;
    const handler = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const w = el.clientWidth;
        const target = Math.round(el.scrollLeft / w) * w;
        el.scrollTo({ left: target, behavior: 'smooth' });
      }, 120);
    };
    el.addEventListener('scroll', handler);
    return () => el.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex flex-1 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
      >
        {slides.map((s) => {
          const Icon = s.icon;
          return (
            <section
              key={s.id}
              className="snap-center w-full flex-shrink-0 flex flex-col items-center justify-center px-10 pt-8"
            >
              <div className="max-w-sm text-center">
                <div
                  className={`mx-auto mb-8 rounded-xl flex items-center justify-center ${s.iconWrapper} h-40 w-40`}
                >
                  <Icon className="h-24 w-24 text-white drop-shadow" />
                </div>
                <h1 className="text-3xl font-semibold leading-tight mb-6">
                  {s.title.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </h1>
                <p className="text-sm text-gray-700 leading-relaxed">{s.text}</p>
                {s.final && (
                  <button
                    onClick={() => navigate('/newsletter')}
                    className="mt-12 w-full bg-brand-red text-white font-semibold text-lg py-3 rounded-full shadow-md active:scale-[.98] transition"
                  >
                    Iniciar minha aventura!
                  </button>
                )}
              </div>
            </section>
          );
        })}
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-3 py-6">
        {slides.map((s) => (
          <span
            key={s.id}
            className={`h-2 w-2 rounded-full ${
              active === s.id ? 'bg-brand-red scale-125' : 'bg-gray-300'
            } transition`}
          />
        ))}
      </div>
    </div>
  );
};

export default Welcome;