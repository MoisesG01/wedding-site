export default function Cerimonia() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-gray-800 mb-4">
            Nossa Cerimônia
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um momento especial que será celebrado com muito amor e alegria.
            Estamos ansiosos para compartilhar esse dia único com vocês.
          </p>
        </div>

        {/* Main Info */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">⏰</div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">
                Horário
              </h2>
            </div>
            <div className="space-y-4">
              <div className="text-center p-4 bg-pink-50 rounded-lg">
                <h3 className="font-semibold text-gray-800">
                  Cerimônia Religiosa
                </h3>
                <p className="text-gray-600">18:00 - 19:00</p>
              </div>
              <div className="text-center p-4 bg-pink-50 rounded-lg">
                <h3 className="font-semibold text-gray-800">Cocktail</h3>
                <p className="text-gray-600">19:00 - 20:00</p>
              </div>
              <div className="text-center p-4 bg-pink-50 rounded-lg">
                <h3 className="font-semibold text-gray-800">Jantar</h3>
                <p className="text-gray-600">20:00 - 22:00</p>
              </div>
              <div className="text-center p-4 bg-pink-50 rounded-lg">
                <h3 className="font-semibold text-gray-800">Festa</h3>
                <p className="text-gray-600">22:00 - 02:00</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">📍</div>
              <h2 className="text-2xl font-serif text-gray-800 mb-4">Local</h2>
            </div>
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="font-semibold text-gray-800 text-lg">
                  Espaço de Eventos Flores
                </h3>
                <p className="text-gray-600">Av. Pedro Álvares Cabral</p>
                <p className="text-gray-600">Vila Mariana - São Paulo, SP</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-800">Estacionamento</h4>
                <p className="text-gray-600">Gratuito no local</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-gray-800">Acessibilidade</h4>
                <p className="text-gray-600">Local totalmente adaptado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Venue Details */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-serif text-center text-gray-800 mb-8">
            Sobre o Local
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">⛪</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Capela
              </h3>
              <p className="text-gray-600">
                Uma capela histórica com arquitetura neogótica, perfeita para
                nossa cerimônia religiosa.
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-200 to-blue-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🌳</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Jardim
              </h3>
              <p className="text-gray-600">
                Jardim exuberante para fotos e momentos especiais durante o
                cocktail.
              </p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🍽️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Salão
              </h3>
              <p className="text-gray-600">
                Salão elegante com capacidade para 200 convidados, ideal para o
                jantar e festa.
              </p>
            </div>
          </div>
        </div>

        {/* Program Details */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-serif text-center text-gray-800 mb-8">
            Programação Detalhada
          </h2>
          <div className="space-y-6">
            <div className="flex items-center gap-6 p-4 bg-pink-50 rounded-lg">
              <div className="text-2xl">⏰</div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  18:00 - Chegada dos Convidados
                </h3>
                <p className="text-gray-600">
                  Recepção com música ambiente e welcome drink
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-4 bg-pink-50 rounded-lg">
              <div className="text-2xl">💒</div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  18:30 - Cerimônia Religiosa
                </h3>
                <p className="text-gray-600">
                  Celebração do matrimônio na capela
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-4 bg-pink-50 rounded-lg">
              <div className="text-2xl">🥂</div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  19:00 - Cocktail
                </h3>
                <p className="text-gray-600">Drinks e canapés no jardim</p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-4 bg-pink-50 rounded-lg">
              <div className="text-2xl">🍽️</div>
              <div>
                <h3 className="font-semibold text-gray-800">20:00 - Jantar</h3>
                <p className="text-gray-600">
                  Menu especial preparado pelo chef
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-4 bg-pink-50 rounded-lg">
              <div className="text-2xl">💃</div>
              <div>
                <h3 className="font-semibold text-gray-800">22:00 - Festa</h3>
                <p className="text-gray-600">Música ao vivo e DJ até 02:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dress Code */}
        <div className="bg-gradient-to-r from-pink-400 to-rose-400 p-8 rounded-lg text-white mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-serif mb-6">Dress Code</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  👗 Para as Mulheres
                </h3>
                <ul className="space-y-2 text-left">
                  <li>• Vestido longo ou cocktail</li>
                  <li>• Cores: Rosa, dourado, branco</li>
                  <li>• Evitar preto total</li>
                  <li>• Acessórios elegantes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  🤵 Para os Homens
                </h3>
                <ul className="space-y-2 text-left">
                  <li>• Terno escuro ou azul marinho</li>
                  <li>• Camisa branca ou rosa claro</li>
                  <li>• Gravata ou laço</li>
                  <li>• Sapatos sociais</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-serif text-center text-gray-800 mb-8">
            Como Chegar
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Endereço
              </h3>
              <p className="text-gray-600 mb-4">
                Espaço de Eventos Flores
                <br />
                Av. Pedro Álvares Cabral
                <br />
                Vila Mariana - São Paulo, SP
                <br />
                CEP: 04094-050
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🚇</span>
                  <span className="text-gray-600">
                    Metrô: Estação Vila Mariana (Linha Azul)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🚌</span>
                  <span className="text-gray-600">
                    Ônibus: Linhas 8000, 8001, 8002
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">🚗</span>
                  <span className="text-gray-600">
                    Uber/Táxi: 15 min do centro
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden h-64 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1234567890123!2d-46.66234567890123!3d-23.56789012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a1234567890%3A0xabcdef1234567890!2sParque%20Ibirapuera%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Local da Cerimônia - Parque Ibirapuera"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
