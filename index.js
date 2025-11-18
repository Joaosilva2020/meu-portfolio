

const enviarWhatsApp = () => {
    // 
    const meuNumero = '5565993307137'; 

    // 1. 
    const nome = document.getElementById('nome-contato').value;
    const mensagemTexto = document.getElementById('mensagem-texto').value;
    
    // 2. 
    const mensagemLimpa = mensagemTexto.replace(/(\r\n|\n|\r)/gm, ' '); 

    // 3. Montar a mensagem completa
    const mensagemCompleta = `Olá, meu nome é ${nome}.Quero falar sobre:${mensagemLimpa}`;

    // 4. Codificar a URL da mensagem
    const mensagemCodificada = encodeURIComponent(mensagemCompleta);

    // 5. Montar e abrir a URL final
    const url = `https://wa.me/${meuNumero}?text=${mensagemCodificada}`;

    window.open(url, '_blank');
};

//6
document.getElementById('enviar-whatsapp').addEventListener('click', enviarWhatsApp);
