// Lista dos estados brasileiros 
const listaEstados = ["AC.png", "AL.png", "AM.png", "AP.png", "BA.png", "CE.png", "DF.png", "ES.png", "GO.png", "MA.png", "MG.png", "MS.png", "MT.png", "PA.png", "PB.png", "PE.png", "PI.png", "PR.png", "RJ.png", "RN.png", "RO.png", "RR.png", "RS.png", "SC.png", "SE.png", "SP.png", "TO.png"]
const capitais = { // Mudei os nomes para os nomes das capitais 
    "AC" : "Rio Branco",
    "AL" : "Maceió",
    "AM" : "Manaus",
    "AP" : "Macapá",
    "BA" : "Salvador",
    "CE" : "Fortaleza",
    "DF" : "Brasília",
    "ES" : "Vitória",
    "GO" : "Goiânia",
    "MA" : "São Luís",
    "MG" : "Belo Horizonte",
    "MS" : "Campo Grande",
    "MT" : "Cuiabá",
    "PA" : "Belém",
    "PB" : "João Pessoa",
    "PE" : "Recife",
    "PI" : "Teresina",
    "PR" : "Curitiba",
    "RJ" : "Rio de Janeiro",
    "RN" : "Natal",
    "RO" : "Porto Velho",
    "RR" : "Boa Vista",
    "RS" : "Porto Alegre",
    "SC" : "Florianópolis",
    "SE" : "Aracaju",
    "SP" : "São Paulo",
    "TO" : "Palmas"
}

// Função em que ao clicar em começar, habilite somente o primeiro campo e chame a função para que a bandeira seja mostrada
const comecar = () => {
    document.getElementById("s0").disabled = false
    document.getElementById("s1").disabled = true
    document.getElementById("s2").disabled = true
    mostrarBandeira()
    document.getElementById("botaoComecar").disabled = true // desabilita o botão de começar após a bandeira aparecer
    document.getElementById("botaoChute").disabled = false
}

//Função para mostrar a bandeira, ao clicar no botão próximo
const mostrarBandeira = () => {
    const imagem = document.getElementById("bandeira")
    const nomeArquivo = "./bandeiras/" + nomeEstado // Removi o '+png' pq nomeEstado já vem com .png no final
    imagem.src = nomeArquivo
}

const numAleatorio = (min,max) => {
    return min + Math.floor(Math.random()*max) 
}

// Essa constante armazena o nome do estado da rodada. 
const nomeEstado = listaEstados[numAleatorio(0, listaEstados.length)]

//Função que checa o palpite e habilita e desabilita os campos, por enquanto ainda sem o estado da rodada.
const palpite = () => {
    const  sigla = nomeEstado.slice(0,-4) 
    // Usando capitais[sigla] eu consigo acessar a capital pelo registro das capitais 
    if(document.getElementById("s0").value == capitais[sigla]){
       document.getElementById("saida").textContent = "Correto!!"
       document.getElementById("botaoProximo").disabled = false
       //Testa com Aracaju para poder generalizar depois aos demais estados.
    }
    else if(document.getElementById("s1").value == capitais[sigla]){
        document.getElementById("saida").textContent = "Correto!!"
        document.getElementById("botaoProximo").disabled = false
     }
     else if(document.getElementById("s2").value == capitais[sigla]){
        document.getElementById("saida").textContent = "Correto!!"
        document.getElementById("botaoProximo").disabled = false
     }
    else if (document.getElementById("s1").disabled == false){
        document.getElementById("s1").disabled = true
        document.getElementById("s2").disabled = false
        document.getElementById("saida").textContent = "Incorreto"
    }
    else if (document.getElementById("s2").disabled == false) {
        document.getElementById("s1").disabled = true
        document.getElementById("s2").disabled = true
        document.getElementById("botaoChute").disabled = true
        document.getElementById("botaoProximo").disabled = false
        document.getElementById("saida").textContent = capitais[sigla]
    }
    else {
        document.getElementById("s0").disabled = true
        document.getElementById("s1").disabled = false
        document.getElementById("saida").textContent = "Incorreto"
    }
}
// Função que recarrega a página ao clicar no "Próximo".
const reload = () => {
    window.location.reload(true); 
}