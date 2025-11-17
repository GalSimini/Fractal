import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

// Dados fictícios (devem ser os mesmos da lista)
const articles = {
  1: {
    category: 'Funcionais e acessíveis',
    title: 'Selena Gomez revoluciona o mercado de embalagens de maquiagem com Rare Beauty.',
    author: 'Manuela de Azevedo',
    date: '10.09.2025',
    image: 'img-noticia-1.png',
    content: `A Rare Beauty, se destaca não apenas pela estética clean e produtos elogiados nas redes sociais, mas também por uma característica que faz toda a diferença: a acessibilidade. Desde o início, a criadora, Selena Gomez, colocou um objetivo claro para a marca, tornar a beleza mais inclusiva, e isso começa, literalmente, pela embalagem. O design dos produtos foi pensado para facilitar o uso de pessoas com dificuldades de destreza, uma realidade vivida pela própria criadora da marca. Diagnosticada com lúpus em 2013, Selena convive com a artrite causada pela doença autoimune, o que impactou diretamente sua mobilidade e força. Esse desafio pessoal foi o catalisador para uma inovação que beneficia milhões.`,
  },
  2: {
    category: 'Música e Cultura',
    title: 'Como Bad Bunny usou seu novo disco para defender a história e a cultura de Porto Rico',
    author: 'Dora Guerra',
    date: '17.01.2025',
    image: 'img-noticia-2.png',
    content: `Em outubro de 2024, o comediante Tony Hinchcliffe foi notícia após uma piada no comício de Donald Trump, em Nova York. "Há literalmente uma ilha flutuante de lixo no meio do oceano agora mesmo. Acho que se chama Porto Rico", disse o humorista. O episódio rendeu muita represália, principalmente de artistas porto-riquenhos. Um deles foi Bad Bunny, o cantor latino mais ouvido do mundo - que logo publicou um mini-documentário exaltando Porto Rico no Instagram. Ninguém sabia, mas já naquela época, o cantor porto-riquenho já preparava “Debí Tirar Más Fotos”, álbum que considera sua “carta de amor” à ilha. O disco se tornou um manifesto cultural, celebrando as raízes e a resiliência de seu povo.`,
  },
  3: {
    category: 'Arquitetura e Arte',
    title: 'Edifício Copan: Tudo sobre o grande ícone da arquitetura moderna em São Paulo',
    author: 'Ana Clara',
    date: '13.11.2025',
    image: 'img-noticia-3.png',
    content: `Projetado por Oscar Niemeyer na década de 1950, o Edifício Copan não é apenas um marco arquitetônico, mas um microcosmo da vida paulistana. Com sua forma sinuosa e imponente, o prédio se destaca na paisagem urbana, abrigando mais de 5.000 moradores em seus 1.160 apartamentos. O Copan foi concebido para ser uma cidade vertical, com áreas comerciais no térreo e uma diversidade de tipos de apartamentos, desde pequenas quitinetes a grandes unidades de três quartos. Essa mistura social era um dos pilares do projeto de Niemeyer, que buscava integrar diferentes classes sociais em um mesmo espaço, refletindo a pluralidade da metrópole.`,
  },
};

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles[id];

  if (!article) {
    return <div>Artigo não encontrado</div>;
  }

  return (
    <div className="bg-white min-h-screen">
      <header className="p-4">
        <button onClick={() => navigate(-1)} className="h-11 w-11 bg-brand-red text-white rounded-full flex items-center justify-center">
          <ChevronLeftIcon className="h-7 w-7" />
        </button>
      </header>
      <main>
        <div className="px-4">
          <img src={`/imgs/${article.image}`} alt={article.title} className="w-full h-64 object-cover rounded-3xl bg-gray-200" />
        </div>
        <div className="p-6">
          <p className="font-semibold text-gray-600">{article.category}</p>
          <h2 className="text-3xl font-bold text-gray-800 my-2 leading-tight">{article.title}</h2>
          <p className="text-gray-500 leading-snug">
            {article.author} <br />
            {article.date}
          </p>
          <div className="mt-6 text-gray-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br /><br />') }} />
        </div>
      </main>
    </div>
  );
};

export default Article;