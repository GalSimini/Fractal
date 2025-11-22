import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import NavBar from '../components/NavBar';

// Importar as mesmas imagens usadas na Newsletter
import img1 from '../imgs/makeRareBeauty.jpg';
import img2 from '../imgs/cadeirasNaGrama.jpg';
import img3 from '../imgs/predio.jpg';

// Dados com referências diretas às imagens importadas
const articles = {
  1: {
    category: 'Funcionais e acessíveis',
    title: 'Selena Gomez revoluciona o mercado de embalagens de maquiagem com Rare Beauty.',
    author: 'Manuela de Azevedo',
    date: '15/11/2025',
    image: img1,
    content: `A Rare Beauty se destaca não apenas pela estética clean e produtos elogiados nas redes sociais, mas também por uma característica que faz toda a diferença: a acessibilidade. Desde o início, a criadora, Selena Gomez, colocou um objetivo claro para a marca: tornar a beleza mais inclusiva, e isso começa, literalmente, pela embalagem. O design dos produtos foi pensado para facilitar o uso de pessoas com dificuldades de destreza, uma realidade vivida pela própria criadora da marca. Diagnosticada com lúpus em 2013, Selena convive com a artrite causada pela doença autoimune, o que impactou diretamente sua mobilidade e força. Esse desafio pessoal foi o catalisador para uma inovação que beneficia milhões.`,
  },
  2: {
    category: 'Música e Cultura',
    title: 'Como Bad Bunny usou seu novo disco para defender a história e a cultura de Porto Rico',
    author: 'Dora Guerra',
    date: '14/11/2025',
    image: img2,
    content: `Em outubro de 2024, o comediante Tony Hinchcliffe foi notícia após uma piada no comício de Donald Trump, em Nova York. "Há literalmente uma ilha flutuante de lixo no meio do oceano agora mesmo. Acho que se chama Porto Rico", disse. O episódio rendeu muita represália, principalmente de artistas porto-riquenhos. Bad Bunny publicou um mini-documentário exaltando Porto Rico no Instagram. Já preparava “Debí Tirar Más Fotos”, álbum que considera sua carta de amor à ilha, transformado em manifesto cultural que celebra raízes e resiliência.`,
  },
  3: {
    category: 'Arquitetura e Arte',
    title: 'Edifício Copan: Tudo sobre o grande ícone da arquitetura moderna em São Paulo',
    author: 'Ana Clara',
    date: '13/11/2025',
    image: img3,
    content: `Projetado por Oscar Niemeyer na década de 1950, o Edifício Copan é um marco arquitetônico e um microcosmo da vida paulistana. Com forma sinuosa e mais de 5.000 moradores distribuídos em 1.160 apartamentos, foi concebido como cidade vertical. A mistura social — quitinetes até grandes unidades — reforça a pluralidade da metrópole, um dos pilares do projeto original.`,
  },
};

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles[id];

  if (!article) return <div>Artigo não encontrado</div>;

  return (
    <div className="bg-white min-h-screen pb-10">
      <header className="p-4">
        <button
          onClick={() => navigate(-1)}
            className="h-11 w-11 bg-brand-red text-white rounded-full flex items-center justify-center"
        >
          <ChevronLeftIcon className="h-7 w-7" />
        </button>
      </header>
      <main>
        <div className="px-4 relative">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 object-cover rounded-3xl bg-gray-200"
          />
        </div>
        <div className="p-6">
          <p className="font-semibold text-gray-600">{article.category}</p>
          <h2 className="text-3xl font-bold text-gray-800 my-2 leading-tight">
            {article.title}
          </h2>
          <p className="text-gray-500 leading-snug">
            {article.author} <br />
            {article.date}
          </p>
          <div className="mt-6 text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            {article.content}
          </div>
        </div>
      </main>
      <NavBar />
    </div>
  );
};

export default Article;