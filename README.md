# 🚀 Portfólio de Desenvolvedor Front-end

### Por: João Gabriel da silva

---

## 🎯 Sobre o Projeto

Este portfólio demonstra minhas habilidades em **Front-end puro** (HTML, CSS e JavaScript). É um projeto estático, focado em manipulação de DOM para criar interatividade, com um design moderno e totalmente responsivo.

## ✨ Funcionalidades em Destaque

| Funcionalidade | Descrição | Tecnologia |
| :--- | :--- | :--- |
| **🖼️ Carrossel Interativo** | Galeria de projetos que permite a navegação entre imagens através de botões laterais (Slider). | JavaScript (Manipulação de DOM) |
| **📲 Contato Rápido** | Envio de mensagens diretamente para o meu **WhatsApp** pelo formulário de contato, sem a necessidade de servidor. | JavaScript & API `wa.me` |
| **🎨 Design Moderno** | Layout estilizado com cores sólidas e fontes modernas, otimizado para dispositivos móveis. | HTML & CSS (Flexbox & Media Queries) |

---

## 🛠️ Como Visualizar o Projeto

### 🌐 1. Online (Deploy)

Você pode acessar a versão pública do portfólio no link abaixo (se você já subiu para o GitHub Pages):

➡️ **[Link para o meu Portfólio Online](https://SEUNOMEDEUSUARIO.github.io/NOMEDOREPOSITORIO)**

### 💻 2. Localmente

Para rodar o projeto no seu computador:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEUNOMEDEUSUARIO/NOMEDOREPOSITORIO.git](https://github.com/SEUNOMEDEUSUARIO/NOMEDOREPOSITORIO.git)
    ```
    (Ou baixe o arquivo ZIP)
2.  **Abra o arquivo:** Localize o arquivo `index.html` e dê um **clique duplo** para abri-lo em seu navegador.

---

## ⚙️ Estrutura de Arquivos

A organização do projeto é simples e focada em performance:

* `index.html`: A estrutura completa da página e o conteúdo principal.
* `style.css`: Toda a estilização e responsividade da página.
* `index.js`: Contém a lógica do Carrossel e a função de envio para o WhatsApp.
* `images/`: Pasta com todas as imagens do projeto (perfil e carrossel).

---

## 🔑 Configuração do WhatsApp (Para Edição)

Se for necessário atualizar o número de contato:

1.  Abra o arquivo **`index.js`**.
2.  Localize a função `enviarWhatsApp()`.
3.  Altere a variável `meuNumero` para o seu novo telefone (formato internacional, como `5511987654321`).

```javascript
// Exemplo de Formato Correto
const meuNumero = '5511999998888';
