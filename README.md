# 💕 Erica & Junior - Site de Casamento

Um site de casamento moderno, elegante e totalmente responsivo criado com React, Vite e Tailwind CSS. Design sofisticado com animações suaves e funcionalidades completas.

## ✨ Características

- **🎨 Design Elegante**: Interface moderna com gradientes suaves, glassmorphism e animações
- **📱 Totalmente Responsivo**: Otimizado para desktop, tablet e mobile com navegação adaptativa
- **🏠 Single Page Application (SPA)**: Navegação suave com scroll automático entre seções
- **📧 Formulários Funcionais**: Integração com EmailJS para envio real de emails
- **🎯 Navegação Intuitiva**: Menu mobile com sidebar elegante e indicadores de seção ativa
- **⚡ Performance Otimizada**: Carregamento rápido e animações fluidas

## 🏠 Seções do Site

### **Home**

- Hero section com imagem de fundo responsiva
- Logo do casal em destaque
- Botão de confirmação de presença
- Design limpo e elegante

### **História**

- Mensagem de boas-vindas personalizada
- Contagem regressiva funcional para o casamento
- Seção "O Casal" com fotos lado a lado
- Carrossel 3D interativo com galeria de fotos
- Thumbnails responsivos com navegação

### **Cerimônia**

- Informações detalhadas sobre a cerimônia
- Imagem da igreja em destaque
- Mapa interativo do Google Maps
- Design responsivo com cards elegantes

### **Recepção**

- Detalhes da recepção com imagem da mansão
- Informações sobre horário e local
- Aviso sobre taxa de estacionamento
- Mapa interativo da localização

### **Presentes**

- Lista única de presentes com imagens
- Modal PIX com QR code e informações de pagamento
- Paginação responsiva (6 itens por página)
- Cards elegantes com categorias e preços
- Layout otimizado para mobile (2 cards por linha)

### **Confirmação**

- Formulário simplificado e funcional
- Campos: Nome, Telefone, Número de Convidados, Confirmação, Mensagem
- Integração com EmailJS para envio real
- Feedback visual de sucesso/erro
- Design responsivo e acessível

### **Contato**

- Informações de contato organizadas
- Formulário simplificado (Nome, Assunto, Mensagem)
- Seção FAQ com perguntas frequentes
- Integração com EmailJS
- Cards interativos com hover effects

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
```

3. Configure o EmailJS (opcional):

   - Crie uma conta em [EmailJS](https://www.emailjs.com/)
   - Configure os templates conforme `EMAILJS_SETUP.md`
   - Atualize as configurações em `src/config/emailjs.js`

4. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

5. Abra o navegador em `http://localhost:5173`

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Navbar.jsx          # Navegação principal com sidebar mobile
│   └── Footer.jsx          # Rodapé elegante com informações
├── pages/
│   ├── Home.jsx            # Página inicial com hero section
│   ├── Historia.jsx        # História do casal com carrossel
│   ├── Cerimonia.jsx       # Informações da cerimônia
│   ├── Recepcao.jsx        # Detalhes da recepção
│   ├── Presentes.jsx       # Lista de presentes com modal PIX
│   ├── Confirmacao.jsx     # Formulário de RSVP
│   └── Contato.jsx         # Página de contato com FAQ
├── config/
│   └── emailjs.js          # Configuração do EmailJS
├── assets/
│   ├── logo.jpg            # Logo do casal
│   ├── igreja.png          # Imagem da igreja
│   └── mansao.jpg          # Imagem da mansão
├── App.jsx                 # Componente principal (SPA)
├── main.jsx               # Ponto de entrada
└── index.css              # Estilos globais e animações
```

## 🎨 Design e Estilo

### **Paleta de Cores**

- **Primária**: Tons de rosa e rosa escuro (`pink-300`, `rose-500`)
- **Secundária**: Tons de slate e cinza (`slate-50`, `gray-100`)
- **Acentos**: Gradientes elegantes e transparências

### **Tipografia**

- **Títulos**: Playfair Display (elegante e sofisticada)
- **Corpo**: Inter (moderna e legível)
- **Destaque**: Dancing Script (romântica para elementos especiais)

### **Animações**

- **Entrada**: Fade-in com translate suave
- **Hover**: Scale e shadow effects
- **Carrossel**: Transições 3D fluidas
- **Loading**: Spinners elegantes

## 📧 Configuração do EmailJS

### **Templates Necessários**

#### **RSVP Template** (`template_4dmzovs`)

```html
<h2>Nova Confirmação de Presença</h2>
<p><strong>Nome:</strong> {{from_name}}</p>
<p><strong>Telefone:</strong> {{phone}}</p>
<p><strong>Convidados:</strong> {{guests}}</p>
<p><strong>Vai comparecer:</strong> {{attending}}</p>
<p><strong>Mensagem:</strong> {{message}}</p>
```

#### **Contact Template** (`template_y4m5ijg`)

```html
<h2>Nova Mensagem de Contato</h2>
<p><strong>Nome:</strong> {{from_name}}</p>
<p><strong>Assunto:</strong> {{subject}}</p>
<p><strong>Mensagem:</strong> {{message}}</p>
```

### **Configuração**

1. Crie uma conta no [EmailJS](https://www.emailjs.com/)
2. Configure um serviço de email (Gmail, Outlook, etc.)
3. Crie os templates acima
4. Atualize `src/config/emailjs.js` com seus IDs

## 📱 Responsividade

### **Breakpoints**

- **Mobile**: < 640px (1 coluna, cards empilhados)
- **Tablet**: 640px - 1024px (2 colunas, layout adaptativo)
- **Desktop**: > 1024px (3 colunas, layout completo)

### **Recursos Mobile**

- **Sidebar Navigation**: Menu hamburger com overlay
- **Touch-friendly**: Botões e elementos otimizados para toque
- **Imagens Responsivas**: Otimizadas para diferentes tamanhos
- **Texto Adaptativo**: Tamanhos ajustados para legibilidade

## 🛠️ Tecnologias Utilizadas

- **React 19.1.0**: Biblioteca JavaScript para interfaces
- **Vite 7.0.4**: Build tool rápida e moderna
- **Tailwind CSS 3.4.3**: Framework CSS utilitário
- **@emailjs/browser**: Integração com EmailJS
- **Google Fonts**: Tipografia elegante
- **Google Maps**: Mapas interativos

## 🚀 Deploy

### **Vercel (Recomendado)**

```bash
npm run build
# Conecte ao Vercel e configure:
# Build Command: npm run build
# Output Directory: dist
```

### **Netlify**

```bash
npm run build
# Conecte ao Netlify e configure:
# Build Command: npm run build
# Publish Directory: dist
```

### **GitHub Pages**

```bash
npm run build
# Configure GitHub Actions para deploy automático
```

## 📝 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run preview` - Preview da build
- `npm run lint` - Verificação de código

## 🎯 Funcionalidades Principais

### **Formulários**

- ✅ Validação client-side
- ✅ Integração com EmailJS
- ✅ Backup no localStorage
- ✅ Feedback visual de status
- ✅ Design responsivo

### **Navegação**

- ✅ SPA com scroll suave
- ✅ Detecção de seção ativa
- ✅ Sidebar mobile elegante
- ✅ Indicadores visuais

### **Carrossel**

- ✅ Navegação 3D
- ✅ Autoplay com pause
- ✅ Thumbnails interativos
- ✅ Responsivo

### **Presentes**

- ✅ Modal PIX funcional
- ✅ Paginação
- ✅ Filtros por categoria
- ✅ Layout responsivo

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 💝 Agradecimentos

- Criado com 💕 para celebrar o amor de Erica & Junior
- Design inspirado em casamentos reais
- Tecnologias modernas para momentos especiais
- Comunidade React e Tailwind CSS

---

**Erica & Junior** - Unidos pelo amor, celebrando a vida juntos! 💕

_22 de Novembro de 2025_
