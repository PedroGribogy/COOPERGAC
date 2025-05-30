import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Formata a mensagem para o WhatsApp
    const whatsappMessage = `*Nova mensagem de contato*%0A%0A*Nome:* ${formData.name}%0A*Email:* ${formData.email}%0A*Telefone:* ${formData.phone}%0A%0A*Mensagem:*%0A${formData.message}`;

    // Número do WhatsApp da empresa
    const phoneNumber = '5541999266336';

    // Cria o link do WhatsApp com a mensagem formatada
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    // Abre o WhatsApp em uma nova aba
    window.open(whatsappLink, '_blank');

    // Limpa o formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  // O resto do seu código permanece exatamente igual...
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para responder suas dúvidas e ajudar você a
            encontrar a melhor solução em energia solar para suas necessidades.
          </p>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-green-900 mb-6">
              Envie sua mensagem
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-900 hover:bg-green-800 text-white font-medium px-6 py-3 rounded-md transition-colors w-full flex items-center justify-center gap-2"
              >
                Enviar Mensagem
                <Send size={18} />
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-green-900 mb-6">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400/20 p-3 rounded-full">
                  <Phone className="text-green-900 h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Telefone</h4>
                  <p className="text-gray-600">+55 (41) 9926-6336</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-yellow-400/20 p-3 rounded-full">
                  <Mail className="text-green-900 h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">contato@coopergac.com.br</p>
                </div>
              </div>
              <div className="flex items-start gap-4"></div>
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-bold text-green-900 mb-4">
                Horário de Atendimento
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="mb-2">
                  <span className="font-semibold">Todos os dias:</span> 9h às
                  18h
                </p>
              </div>
            </div>

            {/* <div className="mt-10"> 
              <h3 className="text-xl font-bold text-green-900 mb-4">
                Redes Sociais
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-green-900 text-white p-3 rounded-full hover:bg-green-800 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-green-900 text-white p-3 rounded-full hover:bg-green-800 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-green-900 text-white p-3 rounded-full hover:bg-green-800 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-green-900 text-white p-3 rounded-full hover:bg-green-800 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
