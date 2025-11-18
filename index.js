document.getElementById('enviar-whatsapp').addEventListener('click', enviarWhatsApp);

function enviarWhatsApp() {
    // 1. **SEU NÚMERO REAL**
    const meuNumero = '5565993307137' ; // SUBSTITUA AQUI

    // 2. Coleta os dados (AGORA SÓ NOME E MENSAGEM)
    const nome = document.getElementById('nome-contato').value;
    // const email = document.getElementById('email-contato').value; // REMOVIDO!
    const mensagem = document.getElementById('mensagem-texto').value;

    // 3. Validação
    if (nome.trim() === '' || mensagem.trim() === '') {
        alert('Por favor, preencha seu nome e a mensagem antes de enviar.');
        return; 
    }

    // 4. Monta o texto da mensagem (AGORA SEM O E-MAIL)
    const mensagemPadrao = `Olá, meu nome é ${nome}.%0A%0AQuero falar sobre:%0A${mensagem}`;

    // 5. Codifica e Constrói a URL
    const textoCodificado = encodeURIComponent(mensagemPadrao);
    const urlWhatsApp = `https://wa.me/${meuNumero}?text=${textoCodificado}`;

    // 6. Abre o link
    window.open(urlWhatsApp, '_blank');
}
