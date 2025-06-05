import React, { useEffect, useRef, useState } from 'react';
import { Sun, Volume2, VolumeX } from 'lucide-react';

const About: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Pré-carrega o vídeo
    const preloadVideo = () => {
      setIsLoading(true);
      video.load();
    };

    const handleCanPlay = () => {
      setIsVideoLoaded(true);
      setIsLoading(false);
      video.play().catch(() => {
        console.log('Autoplay failed, keeping video muted');
      });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && video && video.paused) {
          video.play().catch(() => {
            console.log('Playback failed on intersection');
          });
        }
      });
    }, options);

    // Inicia o pré-carregamento
    preloadVideo();

    video.addEventListener('canplay', handleCanPlay);
    observer.observe(video);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      observer.unobserve(video);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };

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
          <div className="flex justify-center">
            <div className="video-wrapper relative w-full h-[400px] overflow-hidden rounded-lg shadow-lg bg-green-50">
              {/* Loading placeholder */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-green-50 z-10">
                  <div className="animate-pulse flex flex-col items-center">
                    <Sun className="w-12 h-12 text-green-900 animate-spin-slow" />
                    <span className="mt-4 text-green-900">Carregando...</span>
                  </div>
                </div>
              )}
              
              {/* Video */}
              <video 
                ref={videoRef}
                autoPlay
                loop
                playsInline
                muted={isMuted}
                preload="auto"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoadStart={() => setIsLoading(true)}
              >
                <source src="/video-fundo.mp4" type="video/mp4" />
                <source src="/video-fundo.webm" type="video/webm" />
              </video>

              {/* Sound toggle button */}
              {isVideoLoaded && (
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 text-green-900 hover:text-green-700 z-20 cursor-pointer touch-manipulation"
                  title={isMuted ? "Ativar som" : "Desativar som"}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  aria-label={isMuted ? "Ativar som" : "Desativar som"}
                >
                  {isMuted ? (
                    <VolumeX className="w-7 h-7" />
                  ) : (
                    <Volume2 className="w-7 h-7" />
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="my-20">
          <blockquote className="text-2xl md:text-3xl italic text-center text-green-900 max-w-3xl mx-auto">
            "Onde propósito, tecnologia e fé caminham juntos."
            <div className="mt-4 text-base font-normal text-gray-500">COOPERGAC SOLAR ENERGY</div>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;