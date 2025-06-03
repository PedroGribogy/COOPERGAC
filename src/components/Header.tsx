import { useState, useEffect } from 'react';
import { Menu, X, Sun } from 'lucide-react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = ['inicio', 'sobre', 'projetos', 'materias', 'contato'];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-green-900/95 shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sun className="text-yellow-400 h-8 w-8" />
          <h1 className="text-white font-bold text-xl">
            <span>COOPERGAC</span>
            <span className="block text-xs text-yellow-400 tracking-wider">
              SOLAR ENERGY
            </span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item}
              to={item}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="text-white hover:text-yellow-400 transition-colors capitalize cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {item === 'materias' ? 'Matérias' : item}
            </Link>
          ))}
          <Link
            to="contato"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-medium px-4 py-2 rounded-md transition-colors cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            Solicitar Orçamento
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-green-900 shadow-xl">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item}
                to={item}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-white hover:text-yellow-400 transition-colors py-2 text-left capitalize cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {item === 'materias' ? 'Matérias' : item}
              </Link>
            ))}
            <Link
              to="contato"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="bg-yellow-400 hover:bg-yellow-500 text-green-900 font-medium px-4 py-2 rounded-md transition-colors w-full text-center cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Solicitar Orçamento
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
