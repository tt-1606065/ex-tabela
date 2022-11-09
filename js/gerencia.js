import "../scss/style.scss"

console.log("JS DA GERENCIA")


document.querySelector("#botaoCadastrar")
    .addEventListener("click", executarCadastro)

document.querySelector("#botaoDeletar")
    .addEventListener("click", executarDelete)

async function executarCadastro() {
    // Pegando os valores dos inputs do HTML
    const titulo = document.querySelector("#titulo").value
    const descricao = document.querySelector("#descricao").value

    // Mandar esses valores para a API guardar na Base de Dados
    const result = await cadastrarCurso(titulo, descricao)
    console.log(result)
}


async function cadastrarCurso(titulo, descricao) {
    const corpoDaRequisicao = {
        title: titulo,
        description: descricao
    }

    const fetchResposta = await fetch("https://api-dwi.herokuapp.com/api/tutorials", {
        method: "POST",
        body: JSON.stringify(corpoDaRequisicao),
        headers: { "Content-type": "application/json" }
    })

    const respostaEmJSON = await fetchResposta.json()
    return respostaEmJSON
}


async function executarDelete(){
    const fetchResposta = await fetch("https://api-dwi.herokuapp.com/api/tutorials", {
        method: "DELETE"
    })

    const respostaEmJSON = await fetchResposta.json()
    return respostaEmJSON
}
