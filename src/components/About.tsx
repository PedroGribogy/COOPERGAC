import React, { useEffect, useRef, useState } from 'react';
import { Sun } from 'lucide-react';

const About: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsVideoLoaded(true);
      if (video.paused) {
        video.play().catch(() => {
          // Silently handle auto-play rejection
        });
      }
    };

    const handleError = () => {
      setHasError(true);
      console.error('Error loading video');
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && video) {
          video.muted = false;
          if (video.paused && isVideoLoaded) {
            video.play().catch(() => {
              // Silently handle play rejection
            });
          }
        } else if (video) {
          video.muted = true;
        }
      });
    }, options);

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    observer.observe(video);

    // Força o recarregamento do vídeo se houver erro
    if (hasError) {
      video.load();
    }

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      observer.unobserve(video);
    };
  }, [isVideoLoaded, hasError]);

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
            <div className="video-wrapper">
              <video 
                ref={videoRef}
                autoPlay
                loop
                playsInline={true}
                muted
                controls={false}
                className={`transition-opacity duration-300 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoadStart={() => setIsVideoLoaded(false)}
                onCanPlay={() => {
                  setIsVideoLoaded(true);
                  if (videoRef.current) {
                    videoRef.current.play().catch(() => {
                      console.log('Playback failed, trying again...');
                      if (videoRef.current) {
                        videoRef.current.muted = true;
                        videoRef.current.play().catch(() => {
                          console.log('Playback failed even with muted video');
                        });
                      }
                    });
                  }
                }}
                style={{ 
                  backgroundColor: 'transparent',
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%'
                }}
              >
                <source src="/video-fundo.mp4" type="video/mp4" />
                <source src="/video-fundo.webm" type="video/webm" />
              </video>
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