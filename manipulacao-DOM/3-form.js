function cadastrar(){
    let valor = document.querySelector("input").value

    console.log(valor)

    let h1 = document.querySelector("h1")

    h1.ten += `O nome digitado foi: ${valor}`
}