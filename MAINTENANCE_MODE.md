# Modo de Manutenção - Site de Casamento

## Como usar o modo de manutenção

O site de casamento possui um sistema de modo de manutenção que permite mostrar uma página temporária enquanto o site está sendo finalizado.

### Ativar/Desativar o modo de manutenção

1. Abra o arquivo `src/App.jsx`
2. Localize a linha 17:
   ```javascript
   const isMaintenanceMode = true;
   ```
3. Para **ativar** o modo de manutenção: mantenha como `true`
4. Para **desativar** o modo de manutenção: mude para `false`

### O que acontece em cada modo

#### Modo de Manutenção Ativo (`isMaintenanceMode = true`)

- Mostra apenas a página de manutenção
- Esconde todo o conteúdo do site
- Exibe uma mensagem elegante informando que o site está em construção
- Ideal para quando o site ainda não está pronto para o público

#### Modo Normal (`isMaintenanceMode = false`)

- Mostra o site completo com todas as páginas
- Navegação normal entre seções
- Todas as funcionalidades disponíveis

### Personalizar a mensagem de manutenção

Para personalizar a mensagem exibida na página de manutenção, edite o arquivo `src/components/MaintenancePage.jsx`.

### Deploy no Vercel

Quando fizer o deploy no Vercel:

1. Mantenha `isMaintenanceMode = true` se o site ainda não estiver pronto
2. Mude para `isMaintenanceMode = false` quando quiser liberar o site completo
3. Faça um novo deploy após a mudança

### Exemplo de uso

```javascript
// Site em manutenção (público vê apenas a página de manutenção)
const isMaintenanceMode = true;

// Site completo liberado (público vê todo o conteúdo)
const isMaintenanceMode = false;
```

### Modo Desenvolvedor

O site possui um modo desenvolvedor que permite acessar o conteúdo completo mesmo com o modo de manutenção ativo:

#### Como ativar o modo desenvolvedor:

**Desktop:**

1. **Combinação de teclas**: Pressione `Ctrl + Shift + D`
2. **Para desativar**: Pressione `Ctrl + Shift + D` novamente

**Mobile:**

1. **Toques secretos**: Toque 5 vezes no canto superior esquerdo da tela
2. **Botão aparecerá**: Um botão azul "🛠️ Ativar Dev Mode" aparecerá no canto superior esquerdo
3. **Clique no botão**: Para ativar/desativar o modo desenvolvedor
4. **Auto-hide**: O botão desaparece automaticamente após 3 segundos

**Indicador visual**: Quando ativo, aparece um badge "🛠️ DEV MODE" no canto superior direito

#### Benefícios do modo desenvolvedor:

- ✅ Permite testar o site completo durante o desenvolvimento
- ✅ Não afeta o modo de manutenção para visitantes normais
- ✅ Fácil de ativar/desativar
- ✅ Indicador visual claro quando ativo

### Benefícios

- ✅ Controle total sobre quando o site fica disponível
- ✅ Mensagem profissional para visitantes
- ✅ Fácil de ativar/desativar
- ✅ Mantém o site no ar mesmo durante ajustes finais
- ✅ Não afeta o SEO quando ativo
- ✅ Modo desenvolvedor para testes
