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

    if (peso <= 0 || peso > 500)
        resultadoImc = "Peso inválido";

    if (altura <= 0 || altura > 3)
        resultadoImc = "Altura inválida";

    imc.textContent = resultadoImc.toFixed(2);

}


