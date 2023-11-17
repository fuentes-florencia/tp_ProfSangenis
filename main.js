
let numerosGenerados = [];

let sumaNumeros = 0;
let menorNumero = Number.MAX_SAFE_INTEGER;
let mayorNumero = Number.MIN_SAFE_INTEGER;

function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random() * 100) + 1;
    
    document.getElementById("numeroAleatorio").value = numeroGenerado;

   
    sumaNumeros += numeroGenerado;
    if (numeroGenerado < menorNumero) {
        menorNumero = numeroGenerado;
    }
    if (numeroGenerado > mayorNumero) {
        mayorNumero = numeroGenerado;
    }

   
    return numeroGenerado;
}


function almacenarNumero() {
    let numeroGenerado = generarNumeroAleatorio();

   
    numerosGenerados.push(numeroGenerado);

    mostrarNumerosAlmacenados();
}

function mostrarNumerosAlmacenados() {
    let numerosAlmacenadosDiv = document.getElementById("numerosAlmacenados");

    numerosAlmacenadosDiv.innerHTML = "";

    for (let i = 0; i < numerosGenerados.length; i++) {
        let numeroP = document.createElement("p");
        numeroP.textContent = "Número almacenado: " + numerosGenerados[i];
        numerosAlmacenadosDiv.appendChild(numeroP);
    }


    document.getElementById("sumaNumeros").textContent = sumaNumeros;
    document.getElementById("menorNumero").textContent = (numerosGenerados.length > 0) ? menorNumero : "-";
    document.getElementById("mayorNumero").textContent = (numerosGenerados.length > 0) ? mayorNumero : "-";
}