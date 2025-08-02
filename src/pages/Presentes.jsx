import { useState } from "react";

export default function Presentes() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const giftCategories = [
    {
      id: 1,
      name: "Casa e Decoração",
      icon: "🏠",
      items: [
        {
          name: "Jogo de Panelas Tramontina",
          price: "R$ 450,00",
          description: "Conjunto de 5 peças",
        },
        {
          name: "Mixer Philips Walita",
          price: "R$ 280,00",
          description: "Processador de alimentos",
        },
        {
          name: "Jogo de Toalhas",
          price: "R$ 120,00",
          description: "Conjunto de 4 toalhas de banho",
        },
        {
          name: "Vaso Decorativo",
          price: "R$ 180,00",
          description: "Vaso de cerâmica artesanal",
        },
      ],
    },
    {
      id: 2,
      name: "Eletrodomésticos",
      icon: "🔌",
      items: [
        {
          name: "Air Fryer",
          price: "R$ 350,00",
          description: "Fritadeira elétrica 4L",
        },
        {
          name: "Liquidificador",
          price: "R$ 220,00",
          description: "Liquidificador 1000W",
        },
        {
          name: "Cafeteira",
          price: "R$ 180,00",
          description: "Cafeteira automática",
        },
        {
          name: "Microondas",
          price: "R$ 420,00",
          description: "Microondas 20L",
        },
      ],
    },
    {
      id: 3,
      name: "Viagem e Lazer",
      icon: "✈️",
      items: [
        {
          name: "Mala de Viagem",
          price: "R$ 380,00",
          description: "Mala com rodinhas 29",
        },
        {
          name: "Jogo de Praia",
          price: "R$ 150,00",
          description: "Toalha, guarda-sol e esteira",
        },
        {
          name: "Câmera Polaroid",
          price: "R$ 320,00",
          description: "Câmera instantânea",
        },
        {
          name: "Jogo de Tabuleiro",
          price: "R$ 90,00",
          description: "Coleção de jogos",
        },
      ],
    },
    {
      id: 4,
      name: "Contribuição",
      icon: "💝",
      items: [
        {
          name: "Contribuição para Lua de Mel",
          price: "Valor à escolha",
          description: "Ajude-nos a realizar nosso sonho",
        },
        {
          name: "Contribuição para Casa ficar pronta",
          price: "Valor à escolha",
          description: "Para mobiliar nosso novo lar",
        },
        {
          name: "Contribuição para Investimento",
          price: "Valor à escolha",
          description: "Para nosso futuro juntos",
        },
      ],
    },
  ];

  // Get all items for display
  const allItems = giftCategories.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      category: category.name,
      categoryIcon: category.icon,
    }))
  );

  // Filter items based on selected category
  const filteredItems =
    selectedCategory === "all"
      ? allItems
      : allItems.filter((item) => item.category === selectedCategory);

  // Paginação
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Resetar página ao trocar categoria
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen elegant-gradient-rose">
      <div className="max-w-6xl mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-20 elegant-animation">
          <h1 className="text-6xl text-elegant mb-6 elegant-text-gradient">
            Lista de Presentes
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-300 to-rose-300 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-body text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Sua presença é o nosso maior presente, mas se quiser nos presentear,
            criamos uma lista especial com itens que nos ajudarão a construir
            nossa vida juntos.
          </p>
        </div>

        {/* Message */}
        <div className="elegant-card p-12 mb-20 text-center elegant-animation-delay-1">
          <div
            className="text-6xl mb-6 animate-bounce"
            style={{ animationDuration: "3s" }}
          >
            💕
          </div>
          <h2 className="text-3xl text-elegant mb-6 elegant-text-gradient">
            Uma Mensagem Especial
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-200 to-rose-200 mx-auto mb-8 rounded-full"></div>
          <p className="text-body text-slate-600 max-w-4xl mx-auto leading-relaxed mb-6">
            "Queridos amigos e familiares, vocês já nos deram o maior presente:
            estar presentes em nossas vidas e celebrar conosco este momento
            especial. Se desejarem nos presentear, criamos esta lista com
            carinho, pensando em itens que nos ajudarão a construir nossa nova
            vida juntos."
          </p>
          <p className="text-body-medium text-slate-700 font-medium">
            - Erica & Junior
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="elegant-card p-8 mb-12 elegant-animation-delay-2">
          <h3 className="text-2xl text-elegant mb-8 text-center elegant-text-gradient">
            Filtre por Categoria
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleCategoryChange("all")}
              className={`px-8 py-4 rounded-full text-body-medium elegant-transition transform hover:scale-105 ${
                selectedCategory === "all"
                  ? "elegant-button"
                  : "elegant-button-secondary"
              }`}
            >
              🎁 Todos os Presentes
            </button>
            {giftCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.name)}
                className={`px-8 py-4 rounded-full text-body-medium elegant-transition transform hover:scale-105 ${
                  selectedCategory === category.name
                    ? "elegant-button"
                    : "elegant-button-secondary"
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gift Items Grid */}
        <div className="elegant-card p-12 mb-20 elegant-animation-delay-3">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-elegant mb-4 elegant-text-gradient">
              {selectedCategory === "all"
                ? "Todos os Presentes"
                : selectedCategory}
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-pink-200 to-rose-200 mx-auto mb-4 rounded-full"></div>
            <p className="text-body text-slate-600">
              {filteredItems.length}{" "}
              {filteredItems.length === 1 ? "item" : "itens"} encontrado
              {filteredItems.length === 1 ? "" : "s"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedItems.map((item, index) => (
              <div
                key={index}
                className={`elegant-card p-8 elegant-card-hover ${
                  selectedCategory !== "all" ? "ring-2 ring-pink-200" : ""
                }`}
              >
                {/* Category Badge */}
                {selectedCategory === "all" && (
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{item.categoryIcon}</span>
                    <span className="text-sm bg-gradient-to-r from-pink-100 to-rose-100 text-pink-800 px-3 py-1 rounded-full font-medium">
                      {item.category}
                    </span>
                  </div>
                )}

                <h3 className="text-xl text-elegant mb-3 elegant-text-gradient">
                  {item.name}
                </h3>
                <p className="text-lg text-pink-600 font-semibold mb-3">
                  {item.price}
                </p>
                <p className="text-body text-slate-600 mb-6">
                  {item.description}
                </p>
                <button className="w-full elegant-button">
                  Reservar Presente
                </button>
              </div>
            ))}
          </div>

          {/* Paginação */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4 mt-12">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className={`px-6 py-3 rounded-full font-medium elegant-transition border border-pink-200 bg-white/80 hover:bg-pink-50 ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Anterior
              </button>
              <span className="text-lg text-elegant">
                Página {currentPage} de {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className={`px-6 py-3 rounded-full font-medium elegant-transition border border-pink-200 bg-white/80 hover:bg-pink-50 ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                Próxima
              </button>
            </div>
          )}

          {/* No items message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div
                className="text-8xl mb-6 animate-bounce"
                style={{ animationDuration: "2s" }}
              >
                🎁
              </div>
              <h3 className="text-2xl text-elegant mb-4 elegant-text-gradient">
                Nenhum item encontrado
              </h3>
              <p className="text-body text-slate-600">
                Tente selecionar uma categoria diferente.
              </p>
            </div>
          )}
        </div>

        {/* Alternative Gifts */}
        <div className="elegant-gradient-pink p-12 rounded-3xl text-gray-600 mb-20 elegant-animation-delay-4">
          <div className="text-center">
            <h2 className="text-4xl text-elegant mb-8">
              Outras Opções de Presente
            </h2>
            <div className="w-16 h-1 bg-white/30 mx-auto mb-12 rounded-full"></div>
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-6xl mb-6 animate-pulse">🎁</div>
                <h3 className="text-2xl text-elegant mb-4">
                  Presente Surpresa
                </h3>
                <p className="text-body-light">
                  Se preferir, pode nos dar uma surpresa! Qualquer presente
                  escolhido com carinho será muito bem-vindo.
                </p>
              </div>
              <div className="text-center">
                <div
                  className="text-6xl mb-6 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                >
                  💌
                </div>
                <h3 className="text-2xl text-elegant mb-4">Cartão Presente</h3>
                <p className="text-body-light">
                  Cartões-presente de lojas como Magazine Luiza, Americanas ou
                  Amazon são sempre úteis.
                </p>
              </div>
              <div className="text-center">
                <div
                  className="text-6xl mb-6 animate-pulse"
                  style={{ animationDelay: "1s" }}
                >
                  💝
                </div>
                <h3 className="text-2xl text-elegant mb-4">Contribuição</h3>
                <p className="text-body-light">
                  Contribuições para nossa lua de mel ou para mobiliar nossa
                  casa são muito apreciadas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="elegant-card p-12 mb-12">
          <h2 className="text-4xl text-elegant text-center mb-12 elegant-text-gradient">
            Como Entregar os Presentes
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-200 to-rose-200 mx-auto mb-12 rounded-full"></div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="elegant-card p-8 elegant-card-hover">
              <h3 className="text-2xl text-elegant mb-6 elegant-text-gradient">
                📦 No Dia do Casamento
              </h3>
              <p className="text-body text-slate-600 mb-6">
                Você pode trazer o presente no dia do casamento. Teremos uma
                mesa especial para receber os presentes.
              </p>
              <ul className="text-body text-slate-600 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  Local: Espaço de Eventos Flores
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  Horário: A partir das 18:00
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  Mesa de presentes na entrada
                </li>
              </ul>
            </div>
            <div className="elegant-card p-8 elegant-card-hover">
              <h3 className="text-2xl text-elegant mb-6 elegant-text-gradient">
                🏠 Antecipadamente
              </h3>
              <p className="text-body text-slate-600 mb-6">
                Se preferir, pode entregar antes do casamento. Entre em contato
                conosco para combinar.
              </p>
              <ul className="text-body text-slate-600 space-y-3">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  WhatsApp: (11) 99999-9999
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  Email: erica.junior@email.com
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  Endereço: Rua das Flores, 123
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="elegant-card p-8 border-l-4 border-yellow-400">
          <div className="flex items-start gap-6">
            <div className="text-4xl animate-pulse">💡</div>
            <div>
              <h3 className="text-2xl text-elegant mb-4 elegant-text-gradient">
                Nota Importante
              </h3>
              <p className="text-body text-slate-600 leading-relaxed">
                Lembre-se: sua presença é o nosso maior presente! Não se sinta
                obrigado a trazer algo material. O mais importante é celebrar
                conosco este momento especial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
