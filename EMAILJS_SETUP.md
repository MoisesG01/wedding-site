# 📧 Configuração do EmailJS - Site de Casamento

Este guia explica como configurar o EmailJS para enviar emails reais através dos formulários do site.

## 🚀 Passo a Passo

### 1. Criar Conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em "Sign Up" e crie uma conta gratuita
3. Faça login na sua conta

### 2. Configurar Serviço de Email

1. No dashboard, vá para **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha seu provedor de email:
   - **Gmail** (recomendado)
   - **Outlook**
   - **Yahoo**
   - **Outros**
4. Siga as instruções para conectar sua conta
5. **Anote o Service ID** (ex: `service_gvf7pkf`)

### 3. Criar Templates de Email

#### Template para Confirmação de Presença (RSVP)

1. Vá para **"Email Templates"**
2. Clique em **"Create New Template"**
3. Configure o template:

**Assunto:**

```
Confirmação de Presença - {{from_name}}
```

**Conteúdo:**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Confirmação de Presença</title>
  </head>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #e91e63; text-align: center;">
        💕 Confirmação de Presença
      </h1>

      <div
        style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;"
      >
        <h2 style="color: #333;">Olá {{to_name}}!</h2>
        <p>Recebemos uma confirmação de presença para nosso casamento.</p>
      </div>

      <div
        style="background: white; padding: 20px; border: 1px solid #ddd; border-radius: 10px; margin: 20px 0;"
      >
        <h3 style="color: #e91e63;">📝 Informações do Convidado</h3>
        <ul style="list-style: none; padding: 0;">
          <li><strong>Nome:</strong> {{from_name}}</li>
          <li><strong>Email:</strong> {{from_email}}</li>
          <li><strong>Telefone:</strong> {{phone}}</li>
          <li><strong>Número de Convidados:</strong> {{guests}}</li>
          <li><strong>Confirmou Presença:</strong> {{attending}}</li>
          <li>
            <strong>Restrições Alimentares:</strong> {{dietary_restrictions}}
          </li>
        </ul>
      </div>

      <div
        style="background: #fff3e0; padding: 20px; border-radius: 10px; margin: 20px 0;"
      >
        <h3 style="color: #ff9800;">💝 Mensagem Especial</h3>
        <p style="font-style: italic;">{{message}}</p>
      </div>

      <div style="text-align: center; margin: 30px 0;">
        <p style="color: #666;">Com amor,</p>
        <h2 style="color: #e91e63;">Wilson & Erica</h2>
      </div>
    </div>
  </body>
</html>
```

4. **Anote o Template ID** (ex: `template_4dmzovs`)

#### Template para Mensagens de Contato

1. Crie outro template para mensagens de contato
2. Configure:

**Assunto:**

```
Mensagem do Site - {{subject}}
```

**Conteúdo:**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Mensagem de Contato</title>
  </head>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #e91e63; text-align: center;">📧 Nova Mensagem</h1>

      <div
        style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;"
      >
        <h2 style="color: #333;">Olá {{to_name}}!</h2>
        <p>Você recebeu uma nova mensagem através do site do casamento.</p>
      </div>

      <div
        style="background: white; padding: 20px; border: 1px solid #ddd; border-radius: 10px; margin: 20px 0;"
      >
        <h3 style="color: #e91e63;">📝 Informações do Remetente</h3>
        <ul style="list-style: none; padding: 0;">
          <li><strong>Nome:</strong> {{from_name}}</li>
          <li><strong>Email:</strong> {{from_email}}</li>
          <li><strong>Assunto:</strong> {{subject}}</li>
        </ul>
      </div>

      <div
        style="background: #fff3e0; padding: 20px; border-radius: 10px; margin: 20px 0;"
      >
        <h3 style="color: #ff9800;">💬 Mensagem</h3>
        <p style="white-space: pre-wrap;">{{message}}</p>
      </div>

      <div style="text-align: center; margin: 30px 0;">
        <p style="color: #666;">Com amor,</p>
        <h2 style="color: #e91e63;">Wilson & Erica</h2>
      </div>
    </div>
  </body>
</html>
```

3. **Anote o Template ID** (ex: `template_y4m5ijg`)

### 4. Obter Public Key

1. No dashboard, vá para **"Account"** → **"API Keys"**
2. **Anote a Public Key** (ex: `3nsjjxziUMy949J-v`)

### 5. Atualizar Configuração no Código

1. Abra o arquivo `src/config/emailjs.js`
2. Substitua os valores pelos seus IDs reais:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: "seu_service_id_aqui",
  RSVP_TEMPLATE_ID: "seu_template_rsvp_aqui",
  CONTACT_TEMPLATE_ID: "seu_template_contato_aqui",
  PUBLIC_KEY: "sua_public_key_aqui",
};
```

### 6. Testar o Envio

1. Execute o site: `npm run dev`
2. Teste os formulários de confirmação e contato
3. Verifique se os emails chegam na caixa de entrada

## 🔧 Configurações Avançadas

### Limite de Emails Gratuitos

- **Plano Gratuito**: 200 emails/mês
- **Plano Pago**: 1000+ emails/mês

### Personalização dos Templates

Você pode personalizar os templates HTML com:

- Cores do casamento
- Logo personalizado
- Informações específicas do evento
- Links para redes sociais

### Configuração de Resposta Automática

1. Crie um template de resposta automática
2. Configure para enviar confirmação ao convidado
3. Use a função `emailjs.send` com o template de resposta

## 🚨 Solução de Problemas

### Email não chega

- Verifique se o Service ID está correto
- Confirme se o email de origem está autorizado
- Verifique a pasta de spam

### Erro de autenticação

- Reconfigure o serviço de email
- Verifique se a Public Key está correta
- Teste com um email diferente

### Limite excedido

- Verifique o uso no dashboard do EmailJS
- Considere fazer upgrade do plano

## 📞 Suporte

- **EmailJS Docs**: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- **EmailJS Support**: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)

---

**Nota**: Mantenha suas chaves de API seguras e não as compartilhe publicamente!
