function alerta() {
    alert('Despertar')
}

function despertar() {
    let input = document.querySelector('#time')
    setTimeout(alerta, input.value)
}