//	var titulo = document.querySelector("h1");
let titulo = document.querySelector(".titulo");
titulo.textContent = "you was hacked";

let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++){

    let paciente = pacientes[i];

    let peso = paciente.querySelector(".info-peso").textContent;
    let altura = paciente.querySelector(".info-altura").textContent;
    let imc = paciente.querySelector(".info-imc");

    let resultadoImc = peso / (altura*altura);
    resultadoImc = resultadoImc.toFixed(2);

    if (peso <= 0 || peso > 500) {
        resultadoImc = "Peso inválido";
        paciente.classList.add("paciente-invalido");
        // paciente.style.backgroundColor = "lightcoral"
    }

    if (altura <= 0 || altura > 3) {
        resultadoImc = "Altura inválida";
        // paciente.style.backgroundColor = "lightcoral"
        paciente.classList.add("paciente-invalido");
    }

    imc.textContent = resultadoImc;

}


