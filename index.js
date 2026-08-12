const canvas = document.getElementById("matrix-canvas");
const ctx = canvas.getContext("2d");
const caracteres = "01{}[]<>/\\$#constletfunctionreturn=>HTMLCSSJSReactNode";
const fonte = 16;
let colunas = 0;
let gotas = [];

const ajustarCanvas = () => {
    const escala = window.devicePixelRatio || 1;
    canvas.width = Math.floor(window.innerWidth * escala);
    canvas.height = Math.floor(window.innerHeight * escala);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(escala, 0, 0, escala, 0, 0);

    colunas = Math.ceil(window.innerWidth / fonte);
    gotas = Array.from({ length: colunas }, () => Math.random() * -window.innerHeight);
};

const desenharMatrix = () => {
    ctx.fillStyle = "rgba(2, 4, 10, 0.14)";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.font = `${fonte}px monospace`;

    for (let i = 0; i < gotas.length; i += 1) {
        const texto = caracteres[Math.floor(Math.random() * caracteres.length)];
        const x = i * fonte;
        const y = gotas[i] * fonte;

        ctx.fillStyle = Math.random() > 0.96 ? "#eef7ff" : "#47ffa4";
        ctx.fillText(texto, x, y);

        if (y > window.innerHeight && Math.random() > 0.975) {
            gotas[i] = 0;
        }

        gotas[i] += 0.75;
    }

    requestAnimationFrame(desenharMatrix);
};

const revelarSecoes = () => {
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visivel");
            }
        });
    }, { threshold: 0.18 });

    document.querySelectorAll(".revelar").forEach((elemento) => {
        observador.observe(elemento);
    });
};

const enviarWhatsApp = (evento) => {
    evento.preventDefault();

    const meuNumero = "5565993307137";
    const nome = document.getElementById("nome-contato").value.trim();
    const mensagemTexto = document.getElementById("mensagem-texto").value.trim();

    if (!nome || !mensagemTexto) {
        alert("Preencha seu nome e sua mensagem antes de enviar.");
        return;
    }

    const mensagemLimpa = mensagemTexto.replace(/(\r\n|\n|\r)/gm, " ");
    const mensagemCompleta = `Olá, meu nome é ${nome}. Quero falar sobre: ${mensagemLimpa}`;
    const mensagemCodificada = encodeURIComponent(mensagemCompleta);
    const url = `https://wa.me/${meuNumero}?text=${mensagemCodificada}`;

    window.open(url, "_blank");
};

window.addEventListener("resize", ajustarCanvas);
document.getElementById("formulario-whatsapp").addEventListener("submit", enviarWhatsApp);

ajustarCanvas();
desenharMatrix();
revelarSecoes();
