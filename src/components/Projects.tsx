import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Residencial Villa Solar',
    description:
      'Instalação de 32 painéis solares em condomínio residencial, gerando economia de 90% na conta de energia.',
    image: 'https://images.pexels.com/photos/9875367/pexels-photo-9875367.jpeg',
    type: 'Residencial',
  },
  {
    id: 2,
    title: 'Fazenda Luz do Sol',
    description:
      'Sistema off-grid para propriedade rural, garantindo autonomia energética mesmo em áreas remotas.',
    image:
      'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg',
    type: 'Rural',
  },
  {
    id: 3,
    title: 'Edifício Comercial Eco',
    description:
      'Implementação de sistema fotovoltaico de 75kWp para centro empresarial, reduzindo custos operacionais.',
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
    type: 'Comercial',
  },
  {
    id: 4,
    title: 'Indústria Sustentável',
    description:
      'Projeto industrial com 220 painéis solares, suprindo 60% do consumo energético da operação.',
    image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
    type: 'Industrial',
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filters = ['Todos', 'Residencial', 'Comercial', 'Industrial', 'Rural'];

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

        <div className="mt-16 bg-green-900 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Sua conta de energia com até 95% de economia!
          </h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Adquira um sistema fotovoltaico e veja o retorno do seu investimento
            todos os meses durante 30 anos!
          </p>
          <a
            href="#contato"
            className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-medium px-6 py-3 rounded-md transition-colors inline-block"
          >
            Solicitar Orçamento Gratuito
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
