import React from 'react';
import { Sun } from 'lucide-react';

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
            <div className="relative z-10 rounded-lg shadow-xl overflow-hidden h-[650px]">
              <video 
                className="w-full h-full rounded-lg object-cover"
                muted
                autoPlay
                loop
                playsInline
              >
                <source src="/Vídeo do WhatsApp de 2025-06-05 à(s) 15.14.42_57239e3f.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
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

        {/* Ecossistema COOPERGAC */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Nosso ecossistema</h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="relative w-[700px] h-[700px] mx-auto">
            {/* Círculo central */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-green-900 rounded-full w-48 h-48 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-xl font-bold mb-2">Ecossistema</h3>
                  <h4 className="text-yellow-400 text-xl font-bold">COOPERGAC</h4>
                </div>
              </div>
            </div>

            {/* Usina de geração de conta energia - Topo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2" style={{ transform: 'translate(-50%, 40px)' }}>
              <div className="bg-yellow-400 rounded-lg px-6 py-3 shadow-md w-64 text-center">
                <p className="text-green-900 font-semibold">
                  Usina de geração de conta energia
                </p>
              </div>
            </div>

            {/* Usina de investimento - Direita */}
            <div className="absolute" style={{ top: '50%', right: '40px', transform: 'translateY(-50%)' }}>
              <div className="bg-yellow-400 rounded-lg px-6 py-3 shadow-md w-64 text-center">
                <p className="text-green-900 font-semibold">
                  Usina de investimento
                </p>
              </div>
            </div>

            {/* Energia do mercado livre - Baixo */}
            <div className="absolute bottom-0 left-1/2" style={{ transform: 'translate(-50%, -40px)' }}>
              <div className="bg-yellow-400 rounded-lg px-6 py-3 shadow-md w-64 text-center">
                <p className="text-green-900 font-semibold">
                  Energia do mercado livre
                </p>
              </div>
            </div>

            {/* Energia por assinatura - Esquerda */}
            <div className="absolute" style={{ top: '50%', left: '40px', transform: 'translateY(-50%)' }}>
              <div className="bg-yellow-400 rounded-lg px-6 py-3 shadow-md w-64 text-center">
                <p className="text-green-900 font-semibold">
                  Energia por assinatura
                </p>
              </div>
            </div>

            {/* Carregadores elétricos - Entre baixo e direita */}
            <div className="absolute" style={{ bottom: '25%', right: '25%', transform: 'translate(50%, 50%)' }}>
              <div className="bg-yellow-400 rounded-lg px-6 py-3 shadow-md w-64 text-center">
                <p className="text-green-900 font-semibold">
                  Carregadores elétricos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;