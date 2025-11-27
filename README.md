# 🤖 Bot de Atendimento WhatsApp

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-16+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Educacional-orange?style=for-the-badge)
![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)
![Built with Claude](https://img.shields.io/badge/Built_with-Claude.ai-5A67D8?style=for-the-badge&logo=anthropic&logoColor=white)

**Bot automatizado para WhatsApp usando WPPConnect**

[Recursos](#-recursos) • [Instalação](#-instalação) • [Como Usar](#-como-usar) • [Personalização](#-personalizando-o-bot) • [Avisos](#-avisos-importantes)

[![GitHub stars](https://img.shields.io/github/stars/fjavier777/bot-whatsapp?style=social)](https://github.com/fjavier777/bot-whatsapp/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/fjavier777/bot-whatsapp?style=social)](https://github.com/fjavier777/bot-whatsapp/network/members)

</div>

---

## ⚠️ Avisos Importantes

> **ATENÇÃO:** Este projeto é **apenas para fins educacionais e aprendizado**.

- ❌ Utiliza bibliotecas **não-oficiais** do WhatsApp
- ❌ Viola os **Termos de Serviço** do WhatsApp
- ❌ Pode resultar em **banimento permanente** da conta
- ✅ Use **apenas para testes** com números descartáveis
- ✅ Para uso comercial, utilize a [WhatsApp Business API Oficial](https://business.whatsapp.com/products/business-platform)

---

## ✨ Recursos

- 🔄 Respostas automáticas personalizáveis
- 📋 Sistema de menu interativo
- ⏰ Informações de horário e serviços
- 💬 Detecção de saudações e agradecimentos
- 🤖 Simulação de "digitando..."
- 📊 Logs detalhados de conversas
- 🔌 Fácil integração com bancos de dados e APIs

---

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Google Chrome](https://www.google.com/chrome/) (usado pelo Puppeteer)
- Um número de WhatsApp para testes

---

## 🚀 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/fjavier777/bot-whatsapp.git
cd bot-whatsapp
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute o bot

```bash
npm start
```

### 4. Conecte seu WhatsApp

Um **QR Code** aparecerá no terminal. Escaneie com seu WhatsApp:

1. Abra o WhatsApp no celular
2. Toque em **Mais opções** (⋮) ou **Configurações**
3. Toque em **Aparelhos conectados**
4. Toque em **Conectar um aparelho**
5. Aponte a câmera para o QR Code

---

## 💬 Como Usar

### Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `/menu` ou `menu` | Exibe o menu principal com todas as opções |
| `1` | Mostra o horário de atendimento |
| `2` | Lista os serviços disponíveis |
| `3` | Solicita transferência para atendente humano |
| `4` | Informações sobre a empresa |
| `oi`, `olá`, `ola` | Recebe uma saudação de boas-vindas |
| `obrigado`, `obrigada`, `valeu` | Recebe uma mensagem de agradecimento |

### Exemplo de Conversa

```
Usuário: Oi
Bot: Olá! 👋 Seja bem-vindo(a)!
     Digite /menu para ver as opções disponíveis.

Usuário: /menu
Bot: 🤖 Menu de Opções
     1️⃣ Horário de atendimento
     2️⃣ Serviços disponíveis
     3️⃣ Falar com atendente
     4️⃣ Sobre nós

Usuário: 1
Bot: ⏰ Horário de Atendimento
     Segunda a Sexta: 8h às 18h
     Sábado: 9h às 13h
     Domingo: Fechado
```

---

## 🛠️ Personalizando o Bot

### Adicionar Novas Respostas

Edite o objeto `respostas` no arquivo `bot.js`:

```javascript
const respostas = {
  '5': `🎯 *Nova Opção*\n\nDescrição da nova funcionalidade...`,
  '/preco': `💰 *Tabela de Preços*\n\nConsulte nossos valores...`
};
```

### Modificar a Lógica de Processamento

Personalize a função `processarMensagem()`:

```javascript
function processarMensagem(mensagem) {
  const texto = mensagem.toLowerCase().trim();
  
  // Adicione suas próprias regras
  if (texto.includes('preço') || texto.includes('valor')) {
    return 'Resposta sobre preços...';
  }
  
  // Sua lógica personalizada aqui
}
```

---

## 🔧 Recursos Avançados

### 📸 Enviar Imagens

```javascript
await client.sendImage(
  chatId,
  'caminho/para/imagem.jpg',
  'imagem',
  'Legenda da imagem'
);
```

### 📍 Enviar Localização

```javascript
await client.sendLocation(
  chatId,
  '-23.550520',
  '-46.633308',
  'Endereço da Empresa'
);
```

### 📎 Enviar Arquivos

```javascript
await client.sendFile(
  chatId,
  'caminho/para/arquivo.pdf',
  'documento.pdf',
  'Confira nosso catálogo'
);
```

### 🎥 Enviar Vídeos

```javascript
await client.sendVideoAsGif(
  chatId,
  'caminho/para/video.mp4',
  'video',
  'Tutorial em vídeo'
);
```

---

## 🗄️ Integrações Sugeridas

### Banco de Dados

```bash
# MongoDB
npm install mongoose

# MySQL
npm install mysql2

# PostgreSQL
npm install pg
```

### Inteligência Artificial

```bash
# OpenAI (ChatGPT)
npm install openai

# Anthropic (Claude)
npm install @anthropic-ai/sdk

# Google Gemini
npm install @google/generative-ai
```

### Outras Integrações

```bash
# Sistema de logs avançado
npm install winston

# Agendamento de tarefas
npm install node-cron

# Requisições HTTP
npm install axios
```

---

## 📁 Estrutura do Projeto

```
bot-whatsapp/
├── node_modules/       # Dependências (não enviar ao Git)
├── tokens/            # Sessões do WhatsApp (não enviar ao Git)
├── bot.js             # Código principal do bot
├── package.json       # Configurações e dependências
├── .gitignore         # Arquivos ignorados pelo Git
├── LICENSE            # Licença MIT do projeto
└── README.md          # Este arquivo
```

---

## 🐛 Solução de Problemas

### QR Code não aparece

**Solução:** Altere `headless: false` na configuração para ver o navegador:

```javascript
const botConfig = {
  headless: false,  // Mostra o navegador
  // ...
};
```

### Conexão cai frequentemente

**Causa:** Limitação das bibliotecas não-oficiais.

**Solução:** Implemente reconexão automática ou use a API oficial.

### Mensagens não são recebidas/enviadas

**Verifique:**
- ✅ Conexão com internet estável
- ✅ WhatsApp conectado no celular
- ✅ Número não foi banido pelo WhatsApp
- ✅ Chrome instalado corretamente

### Erro ao instalar dependências

```bash
# Limpe o cache e reinstale
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

---

## 📚 Próximos Passos

Evolua seu bot com estas funcionalidades:

- [ ] 🤖 Integrar com IA (GPT, Claude, Gemini)
- [ ] 💾 Adicionar banco de dados para histórico
- [ ] 📊 Criar dashboard web de gerenciamento
- [ ] 👥 Sistema de múltiplos atendentes
- [ ] 📈 Análise de métricas e relatórios
- [ ] 🎯 Segmentação de clientes
- [ ] ⏰ Agendamento de mensagens
- [ ] 🔔 Sistema de notificações

---

## 📖 Documentação e Links Úteis

- [WPPConnect - Documentação Oficial](https://wppconnect.io/)
- [WPPConnect - GitHub](https://github.com/wppconnect-team/wppconnect)
- [WhatsApp Business API Oficial](https://business.whatsapp.com/products/business-platform)
- [Node.js - Documentação](https://nodejs.org/docs/)

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

---

## ⚖️ Considerações Legais

Este projeto é destinado **exclusivamente para fins educacionais**.

### Para Uso Comercial:

1. ✅ Utilize a [WhatsApp Business API Oficial](https://business.whatsapp.com/)
2. ✅ Contrate um **Business Solution Provider (BSP)** certificado
3. ✅ Siga rigorosamente os **Termos de Serviço** do WhatsApp
4. ✅ Implemente políticas de **privacidade** e **proteção de dados** (LGPD/GDPR)

### Responsabilidade:

Os desenvolvedores deste projeto **não se responsabilizam** por:
- Banimentos de contas
- Perda de dados
- Uso indevido da ferramenta
- Violações dos Termos de Serviço

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Consulte o arquivo [LICENSE](https://github.com/fjavier777/bot-whatsapp/blob/main/LICENSE) para mais detalhes.

**Importante:** Este projeto é destinado exclusivamente para fins educacionais. O uso de bibliotecas não-oficiais do WhatsApp pode violar os Termos de Serviço.

---

## 👨‍💻 Autor

Desenvolvido por **[Fernando J. A. Bello](https://github.com/fjavier777)**

Projeto educacional para estudo de automação, chatbots e integração com APIs.

Desenvolvido para fins educacionais e de aprendizado.

---

## 📧 Contato

Tem dúvidas, sugestões ou quer contribuir? Entre em contato:

- 🐛 **Reportar bugs**: Abra uma [issue](https://github.com/fjavier777/bot-whatsapp/issues)
- 💬 **Dúvidas gerais**: Use as [discussões](https://github.com/fjavier777/bot-whatsapp/discussions)
- 💼 **LinkedIn**: [fjavier777](https://www.linkedin.com/in/fjavier777)
- ⭐ **Curtiu o projeto?**: Deixe uma estrela no repositório!

> **Dica:** Para questões técnicas, prefira abrir issues no GitHub para que outros possam aprender com as respostas!

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela!**

Feito com 😬[estresse], ☕[café] e 💧[água]

</div>