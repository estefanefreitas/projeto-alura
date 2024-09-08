//Ativando a funcionalidade do botão
const formElemento = document.querySelector("form");

// A função pesquisar está sendo chamada no elemento do formulario via evento
formElemento.addEventListener("submit", (event) => {
  event.preventDefault();
  pesquisar();
});

function pesquisar() {
  let section = document.getElementById("resultado-pesquisa-elenco");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
    section.innerHTML = "<p>Nada foi encontrado</p>";
    return;
  }

  // Verifique se o valor da pesquisa está correto
  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = "";
  let titulo = "";
  let descricaoFrase = "";
  let descricaoTexto = "";

  // Itera sobre cada item da lisda de elenco
  for (let item of elenco) {
    titulo = item.titulo.toLowerCase();
    descricaoFrase = item.descricaoFrase.toLowerCase();
    descricaoTexto = item.descricaoTexto.toLowerCase();
    // se titulo includes campoPesquisa
    if (
      titulo.includes(campoPesquisa) ||
      descricaoFrase.includes(campoPesquisa) ||
      descricaoTexto.includes(campoPesquisa)
    ) {
      //cria um novo elemento
      resultados += `
    <div class="elenco-item">
        <h2>
          <a href="#">${item.titulo}</a>
        </h2>
        <div class="elenco-item-img-conteudo">
          <img src="${item.imagem}" alt="${item.titulo}" />
          <div class="elenco-descricao">
            <p class="descricao-frase">"${item.descricaoFrase}"
            </p>
            <p class="descricao-texto">${item.descricaoTexto}
            </p>
          </div>
        </div>
    </div>
      `;
    }
  }
  if (!resultados) {
    resultados = "<p>Nada foi encontrado</p>";
  }
  //Atribui os resultados gerados a seção HTML
  section.innerHTML = resultados;
}
