import { useState } from "react";

export default function Presentes() {
  const [selectedCategory, setSelectedCategory] = useState("all");

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
          name: "Contribuição para Casa",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-gray-800 mb-4">
            Lista de Presentes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sua presença é o nosso maior presente, mas se quiser nos presentear,
            criamos uma lista especial com itens que nos ajudarão a construir
            nossa vida juntos.
          </p>
        </div>

        {/* Message */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16 text-center">
          <div className="text-4xl mb-4">💕</div>
          <h2 className="text-2xl font-serif text-gray-800 mb-4">
            Uma Mensagem Especial
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            "Queridos amigos e familiares, vocês já nos deram o maior presente:
            estar presentes em nossas vidas e celebrar conosco este momento
            especial. Se desejarem nos presentear, criamos esta lista com
            carinho, pensando em itens que nos ajudarão a construir nossa nova
            vida juntos."
          </p>
          <p className="text-gray-600 mt-4 font-semibold">- Wilson & Erica</p>
        </div>

        {/* Filter Buttons */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-xl font-serif text-gray-800 mb-6 text-center">
            Filtre por Categoria
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              🎁 Todos os Presentes
            </button>
            {giftCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.name
                    ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gift Items Grid */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif text-gray-800 mb-2">
              {selectedCategory === "all"
                ? "Todos os Presentes"
                : selectedCategory}
            </h2>
            <p className="text-gray-600">
              {filteredItems.length}{" "}
              {filteredItems.length === 1 ? "item" : "itens"} encontrado
              {filteredItems.length === 1 ? "" : "s"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className={`border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory !== "all" ? "ring-2 ring-pink-200" : ""
                }`}
              >
                {/* Category Badge */}
                {selectedCategory === "all" && (
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">{item.categoryIcon}</span>
                    <span className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded-full font-medium">
                      {item.category}
                    </span>
                  </div>
                )}

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-pink-600 font-semibold mb-2">{item.price}</p>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <button className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-2 px-4 rounded-lg hover:from-pink-600 hover:to-rose-600 transition-colors">
                  Reservar Presente
                </button>
              </div>
            ))}
          </div>

          {/* No items message */}
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎁</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Nenhum item encontrado
              </h3>
              <p className="text-gray-600">
                Tente selecionar uma categoria diferente.
              </p>
            </div>
          )}
        </div>

        {/* Alternative Gifts */}
        <div className="bg-gradient-to-r from-pink-400 to-rose-400 p-8 rounded-lg text-white mt-16">
          <div className="text-center">
            <h2 className="text-3xl font-serif mb-6">
              Outras Opções de Presente
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-xl font-semibold mb-2">
                  Presente Surpresa
                </h3>
                <p className="text-sm">
                  Se preferir, pode nos dar uma surpresa! Qualquer presente
                  escolhido com carinho será muito bem-vindo.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💌</div>
                <h3 className="text-xl font-semibold mb-2">Cartão Presente</h3>
                <p className="text-sm">
                  Cartões-presente de lojas como Magazine Luiza, Americanas ou
                  Amazon são sempre úteis.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💝</div>
                <h3 className="text-xl font-semibold mb-2">Contribuição</h3>
                <p className="text-sm">
                  Contribuições para nossa lua de mel ou para mobiliar nossa
                  casa são muito apreciadas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-8 rounded-lg shadow-lg mt-16">
          <h2 className="text-3xl font-serif text-center text-gray-800 mb-8">
            Como Entregar os Presentes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                📦 No Dia do Casamento
              </h3>
              <p className="text-gray-600 mb-4">
                Você pode trazer o presente no dia do casamento. Teremos uma
                mesa especial para receber os presentes.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Local: Espaço de Eventos Flores</li>
                <li>• Horário: A partir das 18:00</li>
                <li>• Mesa de presentes na entrada</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                🏠 Antecipadamente
              </h3>
              <p className="text-gray-600 mb-4">
                Se preferir, pode entregar antes do casamento. Entre em contato
                conosco para combinar.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• WhatsApp: (11) 99999-9999</li>
                <li>• Email: wilson.erica@email.com</li>
                <li>• Endereço: Rua das Flores, 123</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Important Note */}
        <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mt-8">
          <div className="flex items-start gap-4">
            <div className="text-2xl">💡</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Nota Importante
              </h3>
              <p className="text-gray-600">
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
