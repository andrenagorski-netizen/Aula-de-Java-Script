const fmr = document.querySelector("form");
const tbResultados = document.querySelector("#tbResultados");

fmr.addEventListener("submit", function(event){
    event.preventDefault();
    
    const peso = Number(document.querySelector("#inPeso").value);
    const altura = Number(document.querySelector("#inAltura").value);
    
    const imc = (peso / (altura * altura)).toFixed(2);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade grau 1";
    } else if (imc < 40) {
        classificacao = "Obesidade grau 2";
    } else {
        classificacao = "Obesidade grau 3";
    }

    
    const linha = tbResultados.insertRow();
    const colImc = linha.insertCell(0);
    const colClassificacao = linha.insertCell(1);

    colImc.textContent = imc;
    colClassificacao.textContent = classificacao;

    
    fmr.reset();
    document.querySelector("#inPeso").focus();
});
