import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-green-900 overflow-hidden flex items-center"
    >
      {/* Sun rays background decoration */}
      <div className="absolute left-0 top-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -left-32 top-1/4 w-1/2 h-1/2">
          <div className="w-full h-full">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute bg-yellow-400/40 h-[300px] w-[60px] origin-bottom"
                style={{
                  transform: `rotate(${i * 25.5}deg)`,
                  left: '20%',
                  top: '-150px',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20 md:pt-0">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-6 md:pr-12">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Energia que <span className="text-yellow-400">une</span>, <br />
              fé que <span className="text-yellow-400">move</span>, <br />
              futuro que <span className="text-yellow-400">transforma</span>.
            </h1>
            <p className="text-lg text-gray-200 max-w-lg">
              Soluções em energia solar para reduzir sua conta de luz em até 95%
              e contribuir para um futuro mais sustentável.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="contato"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-medium px-6 py-3 rounded-md transition-colors text-lg text-center cursor-pointer"
              >
                Solicitar Orçamento
              </Link>
              <Link
                to="sobre"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="border border-yellow-400 text-white hover:bg-yellow-400/10 font-medium px-6 py-3 rounded-md transition-colors flex items-center justify-center gap-2 text-lg cursor-pointer"
              >
                Saiba Mais
                <ArrowDown size={18} />
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500 rounded-lg shadow-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg"
                alt="Painéis solares instalados em telhado"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link
          to="sobre"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors block cursor-pointer"
        >
          <ArrowDown className="text-white" size={24} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
