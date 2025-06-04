import { Check } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      title: 'Até 15% de Deconto',
      description:
        'Sem investimentos, sem manutenção, 15% de desconto de maneira simples e grátis.',
    },
    {
      title: 'Carregadores Eléticos',
      description:
        'Você fatura todos os dias com o uso do seu carregador por motoristas de veículos elétricos.',
    },
    {
      title: 'Energia Renovável',
      description:
        'Energia 100% renovável, com certificado rastreável.',
    },
    {
      title: 'Mercado Livre de Energia',
      description:
        'A garantia da líder em energia livre no Brasil.',
    },
    {
      title: 'Usina de Investimento',
      description:
        'Usina de Investimento.',
    },
    {
      title: 'Usina de Redução',
      description:
        '95% de redução na conta de energia.',
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Por que ter uma usina solar?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Investir em energia solar traz inúmeros benefícios para você, sua
            família e o meio ambiente.
          </p>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-yellow-400"
            >
              <div className="flex items-start gap-3">
                <div className="bg-green-900 rounded-full p-1 mt-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-green-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contato"
            className="bg-green-900 hover:bg-green-800 text-white font-medium px-8 py-3 rounded-md transition-colors inline-flex items-center gap-2"
          >
            Solicitar Orçamento
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
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
