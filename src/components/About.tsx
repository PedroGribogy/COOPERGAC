import { Sun, Leaf, Zap, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Sobre a COOPERGAC</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg mb-6 text-gray-700">
              <span className="font-semibold">Desde 2022</span>, a COOPERGAC nasceu com um propósito maior: unir pessoas, propósitos e tecnologias sustentáveis sob a direção de um chamado que transcende o mercado.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              "Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus a quem ele chamou de acordo com o seu plano."
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Inspirada por esse princípio bíblico, a COOPERGAC é formada pelas iniciais de seus sócios fundadores, profissionais comprometidos com o avanço da energia solar, da eletromobilidade e da sustentabilidade.
            </p>
            <p className="text-lg text-gray-700">
              Mais do que uma empresa de geração distribuída, somos um organismo vivo de fé, inovação e responsabilidade socioambiental.
            </p>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/9875409/pexels-photo-9875409.jpeg" 
                alt="Instalação de painéis solares" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-yellow-400/20 rounded-full z-0"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-900/10 rounded-full z-0"></div>
          </div>
        </div>

        <div className="my-20">
          <blockquote className="text-2xl md:text-3xl italic text-center text-green-900 max-w-3xl mx-auto">
            "Onde propósito, tecnologia e fé caminham juntos."
            <div className="mt-4 text-base font-normal text-gray-500">COOPERGAC SOLAR ENERGY</div>
          </blockquote>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Sun className="w-12 h-12 text-yellow-400" />,
              title: "Energia Solar",
              description: "Soluções completas em energia fotovoltaica para residências e empresas."
            },
            {
              icon: <Leaf className="w-12 h-12 text-green-600" />,
              title: "Sustentabilidade",
              description: "Compromisso com o meio ambiente e as futuras gerações."
            },
            {
              icon: <Zap className="w-12 h-12 text-yellow-500" />,
              title: "Economia",
              description: "Reduza sua conta de energia em até 95% com nossos sistemas."
            },
            {
              icon: <Users className="w-12 h-12 text-green-700" />,
              title: "Cooperação",
              description: "Unindo pessoas e propósitos por um futuro melhor."
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-green-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;