const frm = document.querySelector("#frmNotas");
const resp = document.querySelector("#respResultado");
const tbResultados = document.querySelector("#tbResultados");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = frm.inNome.value;
    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);
    const frequencia = Number(frm.inFrequencia.value);

    const media = (nota1 + nota2) / 2;
    let situacao = "";

    // Regras de classificação
    if (frequencia < 75) {
        situacao = "Reprovado (Frequência insuficiente)";
    } else if (media >= 7) {
        situacao = "Aprovado";
    } else if (media > 4) {
        situacao = "Em exame";
    } else {
        situacao = "Reprovado (Média insuficiente)";
    }

    // Exibe o resultado principal
    resp.textContent = `${nome}: Média ${media.toFixed(1)} e Frequência ${frequencia}% - Situação: ${situacao}`;

    // Adiciona na tabela
    const linha = tbResultados.insertRow();
    const colNome = linha.insertCell(0);
    const colMedia = linha.insertCell(1);
    const colFreq = linha.insertCell(2);
    const colSituacao = linha.insertCell(3);

    colNome.textContent = nome;
    colMedia.textContent = media.toFixed(1);
    colFreq.textContent = frequencia + "%";
    colSituacao.textContent = situacao;

    // Reseta o formulário e foca no nome
    frm.reset();
    frm.inNome.focus();
});
