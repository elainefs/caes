/* Galeria de Imagens */
const banners = [
  "img/poodle.jpg",
  "img/labrador.jpg",
  "img/bulldog.jpg",
  "img/golden.jpg",
  "img/pastor-alemao.jpg",
];

let bannerAtual = 0;

const banner = document.getElementById("galeria");
let img = document.createElement("img");
img.width = 200;
img.higth = 200;

function trocarBanner() {
  bannerAtual = (bannerAtual + 1) % banners.length;
  banner.appendChild(img);
  img.src = banners[bannerAtual];
}

setInterval(trocarBanner, 2500);

/* Exibir raça */
function exibirRaca(raca) {
  let info = {
    Labrador: "Amigável, inteligente e energético",
    Poodle: "Inteligente, e fácil de treinar",
    Bulldog: "Extremamente inteligente e ativo",
  };
  document.getElementById("infoRaca").innerHTML = info[raca];
}

function pesquisarRaca() {
  let pesquisa = document.getElementById("campoPesquisa").value.toLowerCase();
  let racas = ["labrador", "bulldog", "poodle"];
  let resultadoPesquisaElement = document.getElementById("resultadoPesquisa");
  let infoRacaElement = document.getElementById("infoRaca");

  if (racas.includes(pesquisa)) {
    resultadoPesquisaElement.innerHTML = "Raça encontrada.";
    if (pesquisa === "labrador") {
      exibirRaca("Labrador");
    } else if (pesquisa === "poodle") {
      exibirRaca("Poodle");
    } else if (pesquisa === "bulldog") {
      exibirRaca("Bulldog");
    }
  } else {
    infoRacaElement.innerHTML = "Raça não encontrada.";
  }
}
