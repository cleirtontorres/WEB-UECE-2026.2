function adicionar(){
    let valor = document.querySelector("input").value

let lista = document.querySelector("ul")

//let item = `<li>${valor} <button onclick="deletar(${item})">Delete </button> </li>`

let item = document.createElement("li")
item.innerHTML 

lista.innerHTML += item
}

function deletar(item){
    let lista = document.querySelector("ul")
    lista.removeAttribute(item)
}
