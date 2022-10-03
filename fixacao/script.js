const elementoP = document.getElementById("paragrafo")
console.log(elementoP.innerHTML)



function imprimirTextoDigitado(){
    let textoDoInput = document.getElementById("texto")
    console.log(textoDoInput.value)
}

function mudarElemento(){
    elementoP.innerHTML += document.getElementById("texto").value
}