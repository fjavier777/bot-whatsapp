// Bot de Atendimento WhatsApp - Projeto Educacional
// Biblioteca: wpp-connect

const wppconnect = require('@wppconnect-team/wppconnect');

// Configuração do bot
const botConfig = {
  session: 'bot-atendimento',
  headless: true, // false para ver o navegador
  devtools: false,
  useChrome: true,
  debug: false,
  logQR: true,
  browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
  autoClose: 60000,
  disableWelcome: true
};

// Base de conhecimento simples do bot
const respostas = {
  '/menu': `🤖 *Menu de Opções*\n\n1️⃣ Horário de atendimento\n2️⃣ Serviços disponíveis\n3️⃣ Falar com atendente\n4️⃣ Sobre nós\n\nDigite o número da opção desejada!`,
  
  '1': `⏰ *Horário de Atendimento*\n\nSegunda a Sexta: 8h às 18h\nSábado: 9h às 13h\nDomingo: Fechado\n\nDigite /menu para voltar ao menu principal.`,
  
  '2': `💼 *Nossos Serviços*\n\n✅ Consultoria\n✅ Desenvolvimento\n✅ Suporte técnico\n✅ Treinamentos\n\nDigite /menu para voltar ao menu principal.`,
  
  '3': `👤 *Transferindo para atendente...*\n\nAguarde um momento que já vamos te atender!`,
  
  '4': `ℹ️ *Sobre Nós*\n\nSomos uma empresa focada em soluções tecnológicas inovadoras.\n\nDigite /menu para voltar ao menu principal.`
};

// Armazena estado das conversas
const sessoes = new Map();

// Função para processar mensagens
function processarMensagem(mensagem) {
  const texto = mensagem.toLowerCase().trim();
  
  // Comandos especiais
  if (texto === '/menu' || texto === 'menu') {
    return respostas['/menu'];
  }
  
  // Opções do menu
  if (respostas[texto]) {
    return respostas[texto];
  }
  
  // Saudações
  if (texto.includes('oi') || texto.includes('olá') || texto.includes('ola') || texto === 'ola') {
    return `Olá! 👋 Seja bem-vindo(a)!\n\nDigite /menu para ver as opções disponíveis.`;
  }
  
  // Agradecimentos
  if (texto.includes('obrigado') || texto.includes('obrigada') || texto.includes('valeu')) {
    return `Por nada! 😊 Estamos aqui para ajudar.\n\nDigite /menu se precisar de mais alguma coisa.`;
  }
  
  // Resposta padrão
  return `Desculpe, não entendi sua mensagem. 🤔\n\nDigite /menu para ver as opções disponíveis.`;
}

// Iniciar o bot
wppconnect
  .create(botConfig)
  .then((client) => start(client))
  .catch((error) => {
    console.error('Erro ao iniciar o bot:', error);
  });

function start(client) {
  console.log('✅ Bot iniciado com sucesso!');
  console.log('📱 Escaneie o QR Code para conectar');

  // Listener para novas mensagens
  client.onMessage(async (message) => {
    try {
      // Ignora mensagens de grupos e do próprio bot
      if (message.isGroupMsg || message.isMedia) return;

      const chatId = message.from;
      const nomeContato = message.notifyName || message.sender.pushname || 'Usuário';
      
      console.log(`📩 Mensagem de ${nomeContato}: ${message.body}`);

      // Simula "digitando..."
      await client.startTyping(chatId);
      
      // Processa a mensagem
      const resposta = processarMensagem(message.body);
      
      // Pequeno delay para parecer mais natural
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Envia a resposta
      await client.sendText(chatId, resposta);
      
      // Para de "digitar"
      await client.stopTyping(chatId);
      
      console.log(`✅ Resposta enviada para ${nomeContato}`);

    } catch (error) {
      console.error('❌ Erro ao processar mensagem:', error);
    }
  });

  // Listener para status de conexão
  client.onStateChange((state) => {
    console.log('Estado da conexão:', state);
    if (state === 'CONFLICT' || state === 'UNLAUNCHED') {
      console.log('⚠️ Conexão encerrada. Reiniciando...');
    }
  });

  // Listener para desconexão
  client.onStreamChange((state) => {
    console.log('Stream status:', state);
  });
}

// Tratamento de erros não capturados
process.on('unhandledRejection', (err) => {
  console.error('Erro não tratado:', err);
});

console.log('🚀 Iniciando bot de WhatsApp...');