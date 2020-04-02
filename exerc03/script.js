function carregadoSucesso() {
    document.getElementById("paragrafo").innerHTML = "Carregado com sucesso."
}

function carregar() {
    document.getElementById("paragrafo").innerHTML = "<img src='https://www12.senado.leg.br/jovemsenador/home/imagens/carregando/image'/>"
    setTimeout(carregadoSucesso, 500);
}