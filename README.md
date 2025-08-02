# 💕 Erica & Junior - Site de Casamento

Um site de casamento moderno e responsivo criado com React, Vite e Tailwind CSS.

## ✨ Características

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Navegação Intuitiva**: Menu de navegação com indicadores de página ativa
- **Páginas Completas**:
  - 🏠 **Home**: Página principal com informações do casal e contagem regressiva
  - 📖 **História**: Timeline da história de amor do casal
  - 💒 **Cerimônia**: Detalhes completos sobre o evento
  - ✅ **Confirmação**: Formulário para RSVP dos convidados
  - 🎁 **Presentes**: Lista de presentes organizada por categorias
  - 📞 **Contato**: Informações de contato e formulário de mensagem
- **Formulários Funcionais**: Formulários de confirmação e contato
- **Design Elegante**: Interface moderna com gradientes e animações
- **SEO Otimizado**: Estrutura semântica e meta tags

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd wedding-site
```

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

4. Abra o navegador em `http://localhost:5173`

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Navbar.jsx      # Navegação principal
│   └── Footer.jsx      # Rodapé do site
├── pages/
│   ├── Home.jsx        # Página inicial
│   ├── Historia.jsx    # História do casal
│   ├── Cerimonia.jsx   # Informações da cerimônia
│   ├── Confirmacao.jsx # Formulário de RSVP
│   ├── Presentes.jsx   # Lista de presentes
│   └── Contato.jsx     # Página de contato
├── App.jsx             # Componente principal
├── main.jsx           # Ponto de entrada
└── index.css          # Estilos globais
```

## 🎨 Personalização

### Cores e Tema

O site usa um tema rosa/rosa escuro. Para alterar as cores, edite as classes do Tailwind CSS nos componentes.

### Conteúdo

- **Informações do Casal**: Edite os nomes, datas e informações em cada página
- **Fotos**: Substitua os emojis por imagens reais
- **Local e Horário**: Atualize as informações do evento
- **Lista de Presentes**: Modifique os itens e categorias

### Formulários

Os formulários estão configurados para exibir mensagens de sucesso. Para integrar com um backend:

1. Modifique as funções `handleSubmit` nos componentes
2. Adicione validação de dados
3. Configure o envio para sua API

## 🛠️ Tecnologias Utilizadas

- **React 19**: Biblioteca JavaScript para interfaces
- **Vite**: Build tool rápida e moderna
- **React Router**: Navegação entre páginas
- **Tailwind CSS**: Framework CSS utilitário
- **PostCSS**: Processador CSS
- **ESLint**: Linter para qualidade do código

## 📱 Responsividade

O site é totalmente responsivo e inclui:

- Menu mobile com hamburger
- Layout adaptativo para diferentes tamanhos de tela
- Imagens e textos otimizados para mobile
- Touch-friendly em dispositivos móveis

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure o build command: `npm run build`
3. Configure o output directory: `dist`
4. Deploy automático a cada push

### Netlify

1. Conecte seu repositório ao Netlify
2. Configure o build command: `npm run build`
3. Configure o publish directory: `dist`

### GitHub Pages

1. Execute `npm run build`
2. Configure o GitHub Actions para deploy automático

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run preview` - Visualiza a versão de produção
- `npm run lint` - Executa o linter

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 💝 Agradecimentos

- Criado com 💕 para celebrar o amor
- Inspirado em casamentos reais
- Design moderno e elegante para momentos especiais

---

**Erica & Junior** - Unidos pelo amor, celebrando a vida juntos! 💕
