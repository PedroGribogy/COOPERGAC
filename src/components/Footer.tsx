import { Sun, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Informações */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sun className="text-yellow-400 h-8 w-8" />
              <div>
                <h3 className="font-bold text-xl">COOPERGAC</h3>
                <span className="text-xs text-yellow-400 tracking-wider">
                  SOLAR ENERGY
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Transformando energia solar em soluções sustentáveis para um futuro
              melhor.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="inicio"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="sobre"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  to="projetos"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  to="materias"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Matérias
                </Link>
              </li>
              <li>
                <Link
                  to="contato"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Tipos de Projetos */}
          <div>
            <h4 className="font-bold text-lg mb-4">Tipos de Projetos</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="projetos"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
                  onClick={() => {
                    const projectsComponent = document.getElementById('projetos');
                    if (projectsComponent) {
                      const filterButtons = projectsComponent.querySelectorAll('button');
                      const button = Array.from(filterButtons).find(
                        button => button.textContent === 'Carregadores Elétricos'
                      );
                      if (button) {
                        button.click();
                      }
                    }
                  }}
                >
                  Carregadores Elétricos
                </Link>
              </li>
              <li>
                <Link
                  to="projetos"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
                  onClick={() => {
                    const projectsComponent = document.getElementById('projetos');
                    if (projectsComponent) {
                      const filterButtons = projectsComponent.querySelectorAll('button');
                      const button = Array.from(filterButtons).find(
                        button => button.textContent === 'Energia por Assinatura'
                      );
                      if (button) {
                        button.click();
                      }
                    }
                  }}
                >
                  Energia por Assinatura
                </Link>
              </li>
              <li>
                <Link
                  to="projetos"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer"
                  onClick={() => {
                    const projectsComponent = document.getElementById('projetos');
                    if (projectsComponent) {
                      const filterButtons = projectsComponent.querySelectorAll('button');
                      const button = Array.from(filterButtons).find(
                        button => button.textContent === 'Energia para sua Empresa'
                      );
                      if (button) {
                        button.click();
                      }
                    }
                  }}
                >
                  Energia para sua Empresa
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Phone className="text-yellow-400 h-5 w-5" />
                <a
                  href="tel:+554199266336"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  +55 (41) 98535-4399
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="text-yellow-400 h-5 w-5" />
                <a
                  href="mailto:contato@coopergac.com.br"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  contato@coopergac.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="text-yellow-400 h-5 w-5 mt-1" />
                <span className="text-gray-300">
                  Rua Marechal Deodoro, 300
                  <br />
                  Centro, São José dos Pinhais - PR
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {currentYear} COOPERGAC Solar Energy. Todos os direitos
            reservados. Feito por pKLabs - +55 (41) 99212-6614
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
