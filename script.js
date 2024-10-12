// Lista dos estados brasileiros 
const listaEstados = ["AC.png", "AL.png", "AM.png", "AP.png", "BA.png", "CE.png", "DF.png", "ES.png", "GO.png", "MA.png", "MG.png", "MS.png", "MT.png", "PA.png", "PB.png", "PE.png", "PI.png", "PR.png", "RJ.png", "RN.png", "RO.png", "RR.png", "RS.png", "SC.png", "SE.png", "SP.png", "TO.png"]
const nomeEstados = {
    "AC" : "Acre",
    "AL" : "Alagoas",
    "AM" : "Amazonas",
    "AP" : "Amapá",
    "BA" : "Bahia",
    "CE" : "Ceará",
    "DF" : "Distrito Federal",
    "ES" : "Espírito Santo",
    "GO" : "Goiás",
    "MA" : "Maranhão",
    "MG" : "Minas Gerais",
    "MS" : "Mato Grosso do Sul",
    "MT" : "Mato Grosso",
    "PA" : "Pará",
    "PB" : "Paraíba",
    "PE" : "Pernambuco",
    "PI" : "Piauí",
    "PR" : "Paraná",
    "RJ" : "Rio de Janeiro",
    "RN" : "Rio Grande do Norte",
    "RO" : "Rondônia",
    "RR" : "Roiraima",
    "RS" : "Rio Grande do Sul",
    "SC" : "Santa Catarina",
    "SE" : "Sergipe",
    "SP" : "São Paulo",
    "TO" : "Tocantins"
}
//Função para mostrar a bandeira, ao clicar no botão próximo
const mostrarBandeira = () => {
    const imagem = document.getElementById("bandeira")
    const nomeEstado = listaEstados[numAleatorio(0, listaEstados.length)].slice(0, -4)
    // Os 4 últimos caracteres do título da imagem são '.png', então o slice é utilizado para buscar apenas o código do estado. 
    const nomeArquivo = "./bandeiras/" + nomeEstado + ".png"
    imagem.src = nomeArquivo
}

const numAleatorio = (min,max) => {
    return min + Math.floor(Math.random()*max)
}