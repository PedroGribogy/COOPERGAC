import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Carregadores Elétricos',
    description:
      'Adquira seu carregador elétrico de 20, 30 e 60 Kw. Oferecemos renda diária garantida, investimento com alta demanda, contrato com rentabilidade fixa por até 5 anos, sustentabilidade e inovação, valorização do seu espaço, baixo custo operacional e apoio técnico especializado.',
    image: '/carregador-eletrico.jpg',
    type: 'Carregadores Elétricos',
    details: [
      'Você fatura todos os dias com o uso do seu carregador por motoristas de veículos elétricos',
      'O mercado de carros elétricos está crescendo rapidamente no Brasil',
      'Receba por até 5 anos de forma garantida, por meio de locação ou parceria comercial',
      'Pode instalar em condomínios, comércios, estacionamentos, postos',
      'Equipamentos modernos com manutenção mínima e gestão automatizada via aplicativo'
    ]
  },
  {
    id: 2,
    title: 'Energia por Assinatura',
    description:
      'PARE DE PAGAR CARO NA CONTA DE LUZ! Você pode reduzir sua conta de energia em até 15% sem placa solar, sem instalação, sem manutenção e sem custo algum! Zero investimento, zero dor de cabeça. A energia continua chegando normalmente, mas a conta vem quase zerada!',
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
    type: 'Energia por Assinatura',
    details: [
      'Economia sem investimento: Sem custo de instalação ou compra de equipamentos',
      'Sem obras ou burocracia: Tudo digital e rápido, adesão 100% online',
      'Energia limpa e sustentável: Consumo de energia renovável de usinas solares',
      'Sem fidelidade ou multa: Contrato flexível com possibilidade de cancelamento sem multa',
      'Compatível com qualquer imóvel: Residências, comércios ou empresas podem aderir',
      'Fatura simplificada: A energia é compensada na sua conta com créditos de energia',
      'Ideal para inquilinos: Solução perfeita para quem não pode instalar painéis solares'
    ]
  },
  {
    id: 3,
    title: 'Energia para sua Empresa',
    description:
      'ATÉ 35% DE ECONOMIA NA CONTA DE ENERGIA DA SUA EMPRESA. Empresas de média tensão com conta acima de R$ 10 mil agora podem migrar para o Mercado Livre de Energia. Entre para o mercado livre de energia com essa certeza.',
    image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
    type: 'Energia para sua Empresa',
    details: [
      'Economia significativa: Redução de até 35% na conta de energia',
      'Previsibilidade e controle: Contratos com valores fixos ou reajustes pré-definidos',
      'Liberdade de escolha: Escolha o fornecedor de energia que oferece as melhores condições',
      'Sustentabilidade: Acesso a energia limpa e renovável, como solar, eólica ou de biomassa',
      'Atendimento personalizado: Consultoria especializada para gestão do consumo',
      'Competitividade: Redução de custos operacionais, permitindo mais competitividade no mercado',
      'Energia 100% renovável com certificado rastreável',
      'Atendimento por especialistas',
      'A garantia da líder em energia livre no Brasil'
    ]
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filters = ['Todos', 'Carregadores Elétricos', 'Energia por Assinatura', 'Energia para sua Empresa'];

  const filteredProjects =
    activeFilter === 'Todos'
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length
    );
  };

  return (
    <section id="projetos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Nossos Projetos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos principais projetos e como temos
            transformado a vida de nossos clientes com energia limpa e
            renovável.
          </p>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === filter
                  ? 'bg-green-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={filteredProjects[currentIndex].image}
                alt={filteredProjects[currentIndex].title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-900 mb-2">
                  {filteredProjects[currentIndex].title}
                </h3>
                <p className="text-gray-600">
                  {filteredProjects[currentIndex].description}
                </p>
                {filteredProjects[currentIndex].details && (
                  <ul className="mt-4 space-y-2">
                    {filteredProjects[currentIndex].details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <span className="text-green-900">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {filteredProjects.length > 1 && (
              <div className="flex justify-center mt-8 gap-4">
                <button
                  onClick={prevProject}
                  className="p-2 rounded-full bg-green-900 text-white hover:bg-green-800 transition-colors"
                >
                  <ArrowLeft size={24} />
                </button>
                <div className="flex items-center gap-2">
                  {filteredProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        currentIndex === index ? 'bg-yellow-400' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextProject}
                  className="p-2 rounded-full bg-green-900 text-white hover:bg-green-800 transition-colors"
                >
                  <ArrowRight size={24} />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">
              Nenhum projeto encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
