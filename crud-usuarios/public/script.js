let form = document.getElementById('userForm');
let inputid = document.getElementById('usuarioId');
let inputnome = document.getElementById('nome');
let inputemail = document.getElementById('email');
let userList = document.getElementById('usuariosTableBody');

async function carregarUsuarios() {
    const resposta = await fetch('/usuarios')
    const usuarios = await resposta.json();

    userList.innerHTML = '';

    usuarios.forEach(usuario => {
        userList.innerHTML += `
            <tr>
                <td>${usuario.id}</td>
                <td>${usuario.nome}</td>
                <td>${usuario.email}</td>
                <td>
                    <button onclick="editarUsuario(${usuario.id})">Editar</button>
                    <button onclick="excluirUsuario(${usuario.id})">Excluir</button>
                </td>
            </tr>
        `
    });
}

carregarUsuarios();

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = inputid.value;
    const nome = inputnome.value;
    const email = inputemail.value;

    if (!id) {
        await fetch('/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, email })
        });


    }

    else {
        await fetch(`/usuarios/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, email })
        });


    }

    inputnome.value = '';
    inputemail.value = '';

    carregarUsuarios();
});

async function editarUsuario(id) {
    const resposta = await fetch('/usuarios');
    const usuarios = await resposta.json();

    const usuario = usuarios.find(usuario => usuario.id === id);

    inputid.value = usuario.id;
    inputnome.value = usuario.nome;
    inputemail.value = usuario.email;

}


async function excluirUsuario(id) {

    if (!confirm('Tem certeza que deseja excluir este usuário?')) {
        return;
    }

    await fetch(`/usuarios/${id}`, {
        method: 'DELETE'
    });

    carregarUsuarios();
}