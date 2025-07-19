export default function Cerimonia() {
  return (
    <div className="min-h-screen elegant-gradient">
      <div className="max-w-6xl mx-auto px-4 py-24">
        {/* Header */}
        <div className="text-center mb-20 elegant-animation">
          <h1 className="text-6xl text-elegant mb-6 elegant-text-gradient">
            Cerimônia & Recepção
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-300 to-gray-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-body text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Venha celebrar conosco este momento especial. Será uma noite
            inesquecível repleta de amor, alegria e momentos únicos que ficarão
            para sempre em nossas memórias.
          </p>
        </div>

        {/* Schedule */}
        <div className="elegant-card p-12 mb-20 elegant-animation-delay-1">
          <h2 className="text-4xl text-elegant text-center mb-12 elegant-text-gradient">
            Programação do Dia
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-slate-300 to-gray-400 mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="elegant-card p-8 elegant-card-hover">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">⛪</div>
                <h3 className="text-2xl text-elegant mb-4 elegant-text-gradient">
                  Cerimônia Religiosa
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                  <div>
                    <p className="text-body-medium text-slate-800">
                      Horário: 18:00
                    </p>
                    <p className="text-body text-slate-600">
                      Igreja Nossa Senhora da Conceição
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                  <div>
                    <p className="text-body-medium text-slate-800">
                      Endereço: Rua das Flores, 456
                    </p>
                    <p className="text-body text-slate-600">
                      Centro - São Paulo
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                  <div>
                    <p className="text-body-medium text-slate-800">
                      Dress Code: Elegante
                    </p>
                    <p className="text-body text-slate-600">
                      Traje social completo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="elegant-card p-8 elegant-card-hover">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl text-elegant mb-4 elegant-text-gradient">
                  Recepção
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                  <div>
                    <p className="text-body-medium text-slate-800">
                      Horário: 20:00
                    </p>
                    <p className="text-body text-slate-600">
                      Cocktail de boas-vindas
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                  <div>
                    <p className="text-body-medium text-slate-800">
                      Local: Espaço de Eventos Flores
                    </p>
                    <p className="text-body text-slate-600">
                      Rua das Flores, 123
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                  <div>
                    <p className="text-body-medium text-slate-800">
                      Jantar: 21:00
                    </p>
                    <p className="text-body text-slate-600">
                      Menu especial do casal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Details */}
        <div className="elegant-card p-12 mb-20 elegant-animation-delay-2">
          <h2 className="text-4xl text-elegant text-center mb-12 elegant-text-gradient">
            Como Chegar
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-slate-300 to-gray-400 mx-auto mb-12 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl text-elegant mb-6 elegant-text-gradient">
                Espaço de Eventos Flores
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mt-3"></div>
                  <div>
                    <p className="text-body-medium text-slate-800">
                      Rua das Flores, 123
                    </p>
                    <p className="text-body text-slate-600">
                      Jardim Europa - São Paulo
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mt-3"></div>
                  <div>
                    <p className="text-body-medium text-slate-800">
                      Estacionamento gratuito
                    </p>
                    <p className="text-body text-slate-600">
                      Capacidade para 200 veículos
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-slate-400 rounded-full mt-3"></div>
                  <div>
                    <p className="text-body-medium text-slate-800">
                      Metrô mais próximo
                    </p>
                    <p className="text-body text-slate-600">
                      Estação Consolação (Linha Verde)
                    </p>
                  </div>
                </div>
              </div>

              <div className="elegant-card p-6">
                <h4 className="text-lg text-elegant mb-4 elegant-text-gradient">
                  Transporte
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🚗</span>
                    <span className="text-body text-slate-600">
                      Carro próprio (estacionamento gratuito)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🚕</span>
                    <span className="text-body text-slate-600">
                      Uber/Táxi (recomendado)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🚇</span>
                    <span className="text-body text-slate-600">
                      Metrô + 10 min caminhada
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="elegant-card p-6 elegant-card-hover">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1234567890123!2d-46.67890123456789!3d-23.56789012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM0JzA0LjQiUyA0NsKwNDAnNDQuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                title="Localização do Espaço de Eventos Flores"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="elegant-gradient-pink p-12 rounded-3xl text-gray-600 mb-20 elegant-animation-delay-3">
          <div className="text-center">
            <h2 className="text-4xl text-elegant mb-8">
              Informações Importantes
            </h2>
            <div className="w-16 h-1 bg-white/30 mx-auto mb-12 rounded-full"></div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-4 animate-pulse">⏰</div>
                <h3 className="text-xl text-elegant mb-3">Pontualidade</h3>
                <p className="text-body text-gray-600 font-semibold">
                  Pedimos que cheguem com 30 minutos de antecedência para a
                  cerimônia.
                </p>
              </div>
              <div className="text-center">
                <div
                  className="text-5xl mb-4 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                >
                  📱
                </div>
                <h3 className="text-xl text-elegant mb-3">Fotos</h3>
                <p className="text-body text-gray-800 font-semibold">
                  Durante a cerimônia, pedimos que os celulares fiquem no modo
                  silencioso.
                </p>
              </div>
              <div className="text-center">
                <div
                  className="text-5xl mb-4 animate-pulse"
                  style={{ animationDelay: "1s" }}
                >
                  🎵
                </div>
                <h3 className="text-xl text-elegant mb-3">Música</h3>
                <p className="text-body text-gray-800 font-semibold">
                  Teremos uma playlist especial selecionada pelo casal.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact for Questions */}
        <div className="elegant-card p-12 text-center">
          <h2 className="text-4xl text-elegant mb-8 elegant-text-gradient">
            Dúvidas?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-slate-300 to-gray-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-body text-slate-600 mb-8 max-w-2xl mx-auto">
            Se você tem alguma dúvida sobre a cerimônia, localização ou
            programação, não hesite em entrar em contato conosco.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="elegant-card p-6 elegant-card-hover">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="text-lg text-elegant mb-2 elegant-text-gradient">
                Telefone
              </h3>
              <p className="text-body text-slate-600">(11) 99999-9999</p>
            </div>
            <div className="elegant-card p-6 elegant-card-hover">
              <div className="text-3xl mb-3">💬</div>
              <h3 className="text-lg text-elegant mb-2 elegant-text-gradient">
                WhatsApp
              </h3>
              <p className="text-body text-slate-600">(11) 99999-9999</p>
            </div>
            <div className="elegant-card p-6 elegant-card-hover">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="text-lg text-elegant mb-2 elegant-text-gradient">
                Email
              </h3>
              <p className="text-body text-slate-600">wilson.erica@email.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
