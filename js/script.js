let section = document.getElementById("resultado-pesquisa-elenco");

for (let item of elencos) {
  section.innerHTML += `
    <div class="elenco-item">
        <h2>
          <a href="#">${item.titulo}</a>
        </h2>
        <div class="elenco-item-img-conteudo" ${item.descricao}>
          <img src="${item.imagem}" alt="${item.titulo}" />
          <div class="elenco-descricao">
            <p class="descricao-frase">"${item.descricaoFrase}"
            </p>
            <p class="descricao-texto">${item.descricaotexto}
            </p>
          </div>
        </div>
    </div>
      `;
}
