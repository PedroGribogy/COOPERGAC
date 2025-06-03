import { Newspaper } from 'lucide-react';

const news = [
  {
    id: 1,
    title: 'COOPERGAC SOLAR ENERGY lidera revolução da energia por assinatura',
    description: 'Fundada em 2022, a empresa oferece um ecossistema único que transforma o consumo de energia no Brasil, com serviços como energia por assinatura e carregadores elétricos.',
    image: '/coopergac-brito.jpg',
    date: '23 de Maio de 2024',
    source: 'É POP',
    link: 'https://epopnaweb.com.br/coopergac-solar-energy-brito-neto-e-fernandes-lideram-a-revolucao-da-energia-por-assinatura-e-carregadores-eletricos/'
  },
  {
    id: 2,
    title: 'Brito, Neto e Fernandes lideram a energia por carregadores elétricos',
    description: 'Com o lema "Energia que une, fé que move, futuro que transforma", os sócios estão comprometidos em criar soluções acessíveis e escaláveis para energia solar.',
    image: '/coopergac-logo.jpg',
    source: 'Cartão de Visita R7',
    link: 'https://cartaodevisita.r7.com/conteudo/56053/coopergac-solar-energy-brito-neto-e-fernandes-lideram-a-energia-por-carregadores-eletricos'
  },
  {
    id: 3,
    title: 'COOPERGAC inova com energia por assinatura e carregadores elétricos',
    description: 'A mobilidade elétrica está em ascensão, e os carregadores da COOPERGAC estão sendo instalados estrategicamente para acompanhar essa mudança.',
    image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg',
    date: '23 de Maio de 2024',
    source: 'Marvil News',
    link: 'https://marvilnews.com.br/coopergac-solar-energy-brito-neto-e-fernandes-lideram-a-revolucao-da-energia-por-assinatura-e-carregadores-eletricos/'
  },
  {
    id: 4,
    title: 'Soluções conectadas ao futuro: COOPERGAC expande atuação nacional',
    description: 'A energia por assinatura é uma solução prática para quem deseja economizar e consumir energia limpa, sem investir em infraestrutura.',
    image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
    date: '23 de Maio de 2024',
    source: 'Fama em Pauta',
    link: 'https://famaempauta.com.br/coopergac-solar-energy-brito-neto-e-fernandes-lideram-a-revolucao-da-energia-por-assinatura-e-carregadores-eletricos/'
  }
];

const News = () => {
  return (
    <section id="materias" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            COOPERGAC na Mídia
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Confira as principais matérias e reportagens sobre nossa empresa e nosso impacto na sociedade.
          </p>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-yellow-400 text-green-900 text-xs font-medium px-2 py-1 rounded-full">
                    {item.date}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-green-900 mb-2">
                  <Newspaper className="h-4 w-4" />
                  <span className="text-xs font-medium">{item.source}</span>
                </div>
                <h3 className="text-lg font-bold text-green-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-3 text-sm line-clamp-3">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 bg-green-900 hover:bg-green-800 text-white font-medium px-3 py-1.5 rounded-md transition-colors text-xs"
                >
                  Acessar Matéria
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News; 