var dados = [
  "Maçã",
  "Banana",
  "Laranja",
  "Abacaxi",
  "Morango",
  "Nícolas",
  "Isaac",
  "Família",
  "Compras",
  "Samuel",
  "Heloisa",
  "Wilson",
  "Lourdes"
];

function filtrar() {
  var filtro = document.getElementById("filtroInput").value.toLowerCase();
  var listaResultados = document.getElementById("listaResultados");
  listaResultados.innerHTML = "";

  if (filtro !== "") {
    for (var i = 0; i < dados.length; i++) {
      var item = dados[i].toLowerCase();
      if (item.indexOf(filtro) !== -1) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(dados[i]));
        listaResultados.appendChild(li);
      }
    }
  }
}

var filtroInput = document.getElementById("filtroInput");
filtroInput.addEventListener("keyup", filtrar);