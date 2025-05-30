import { Sun } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sun className="text-yellow-400 h-8 w-8" />
              <h3 className="font-bold text-xl">
                <span>COOPERGAC</span>
                <span className="block text-xs text-yellow-400 tracking-wider">
                  SOLAR ENERGY
                </span>
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Energia que une, fé que move, futuro que transforma.
            </p>
            {/* <div className="flex gap-4 mt-4">
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-yellow-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
  </div> */}
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-yellow-400">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="inicio"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
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
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="projetos"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  to="contato"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-yellow-400">
              Serviços
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="projetos"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  onClick={() => {
                    const projectsComponent =
                      document.getElementById('projetos');
                    if (projectsComponent) {
                      const filterButtons =
                        projectsComponent.querySelectorAll('button');
                      const residentialButton = Array.from(filterButtons).find(
                        (button) => button.textContent === 'Residencial'
                      );
                      if (residentialButton) {
                        residentialButton.click();
                      }
                    }
                  }}
                >
                  Projetos Residenciais
                </Link>
              </li>
              <li>
                <Link
                  to="projetos"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  onClick={() => {
                    const projectsComponent =
                      document.getElementById('projetos');
                    if (projectsComponent) {
                      const filterButtons =
                        projectsComponent.querySelectorAll('button');
                      const commercialButton = Array.from(filterButtons).find(
                        (button) => button.textContent === 'Comercial'
                      );
                      if (commercialButton) {
                        commercialButton.click();
                      }
                    }
                  }}
                >
                  Projetos Comerciais
                </Link>
              </li>
              <li>
                <Link
                  to="projetos"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  onClick={() => {
                    const projectsComponent =
                      document.getElementById('projetos');
                    if (projectsComponent) {
                      const filterButtons =
                        projectsComponent.querySelectorAll('button');
                      const industrialButton = Array.from(filterButtons).find(
                        (button) => button.textContent === 'Industrial'
                      );
                      if (industrialButton) {
                        industrialButton.click();
                      }
                    }
                  }}
                >
                  Projetos Industriais
                </Link>
              </li>
              <li>
                <Link
                  to="projetos"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  onClick={() => {
                    const projectsComponent =
                      document.getElementById('projetos');
                    if (projectsComponent) {
                      const filterButtons =
                        projectsComponent.querySelectorAll('button');
                      const ruralButton = Array.from(filterButtons).find(
                        (button) => button.textContent === 'Rural'
                      );
                      if (ruralButton) {
                        ruralButton.click();
                      }
                    }
                  }}
                >
                  Projetos Rurais
                </Link>
              </li>
              <li>
                <Link
                  to="projetos"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  onClick={() => {
                    const projectsComponent =
                      document.getElementById('projetos');
                    if (projectsComponent) {
                      const filterButtons =
                        projectsComponent.querySelectorAll('button');
                      const maintenanceButton = Array.from(filterButtons).find(
                        (button) => button.textContent === 'Todos'
                      );
                      if (maintenanceButton) {
                        maintenanceButton.click();
                      }
                    }
                  }}
                >
                  Manutenção de Sistemas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-yellow-400">
              Contato
            </h4>
            <address className="not-italic text-gray-300">
              <p className="mb-2">
                São José dos Pinhais - Paraná, CEP 83.030-720
              </p>
              <p className="mb-2">contato@coopergac.com.br</p>
              <p>+55 (41) 9926-6336</p>
            </address>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-8 text-center text-gray-400">
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
