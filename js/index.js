

import "../scss/style.scss"

console.log("JS DA LISTA")

executar()

async function executar() {
    
    const cursosRetornados = await buscarValoresNaAPI()

    // for (let index = 0; index < cursosRetornados.length; index++) {
    //     console.log(" == VOLTA ==")
    //     console.log(cursosRetornados[index].title)
    //     console.log(cursosRetornados[index].description)
    // }

    let linhasTabela = `
        <tr>
            <td>Nome do Curso</td>
            <td>Descrição do Curso</td>
        </tr>
    `
    cursosRetornados.forEach(curso => {
            linhasTabela += `
            <tr>
                <td>${ curso.title }</td>
                <td>${ curso.description }</td>
            </tr>
        `
    });

    console.log(linhasTabela)

    
    // Alterando o valor da Tabela no HTML
    // document.querySelector("#tabelaCurso").innerHTML = "VALOR FIXO NO CÓDIGO!"
    document.querySelector("#tabelaCurso").innerHTML = linhasTabela
}

async function buscarValoresNaAPI(){
    // const responseOriginal = await fetch("https://pokeapi.co/api/v2/pokemon/1")
    const responseOriginal = await fetch("https://api-dwi.herokuapp.com/api/tutorials")
    const response = await responseOriginal.json()

    return response
}