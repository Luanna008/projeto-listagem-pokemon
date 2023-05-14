const BotaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body")

BotaoAlterarTema.addEventListener("click", () => {
    const ModoEscuroAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro");
   
    if(ModoEscuroAtivo) {
body.classList.remove("modo-escuro");
const ImagemBotaoTrocadeTema = document.querySelector(".imagem-botao")
ImagemBotaoTrocadeTema.setAttribute("src", "./src/imagens/sun.png")
  } else {
//4//
body.classList.add("modo-escuro");
const ImagemBotaoTrocadeTema = document.querySelector(".imagem-botao")
ImagemBotaoTrocadeTema.setAttribute("src", "./src/imagens/moon.png")
  }
    });

