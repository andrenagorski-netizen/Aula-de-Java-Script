const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const cidade = document.querySelector("#cidade");
const btnSalvar = document.querySelector("#salvar");
const lista = document.querySelector("#lista");

// Função para pegar usuários
function obterUsuarios() {
    const dados = localStorage.getItem("usuarios");
    return dados ? JSON.parse(dados) : [];
}

// Função para salvar usuários
function salvarUsuarios(usuarios) {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Renderizar lista
function renderizar() {
    lista.innerHTML = "";
    const usuarios = obterUsuarios();

    usuarios.forEach((user, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            ${user.nome} - ${user.idade} anos - ${user.cidade}
            <button class="remover" data-index="${index}">X</button>
        `;

        lista.appendChild(li);
    });
}

// Adicionar usuário
btnSalvar.addEventListener("click", () => {
    const usuarios = obterUsuarios();

    const novoUsuario = {
        nome: nome.value,
        idade: idade.value,
        cidade: cidade.value
    };

    usuarios.push(novoUsuario);
    salvarUsuarios(usuarios);
    renderizar();

    nome.value = "";
    idade.value = "";
    cidade.value = "";
});

// Remover usuário (delegação de evento)
lista.addEventListener("click", (e) => {
    if (e.target.classList.contains("remover")) {
        const index = e.target.getAttribute("data-index");

        const usuarios = obterUsuarios();
        usuarios.splice(index, 1);

        salvarUsuarios(usuarios);
        renderizar();
    }
});

// Inicializar lista
renderizar();