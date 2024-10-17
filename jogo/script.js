// Lista dos estados brasileiros 
const listaEstados = ["AC.png", "AL.png", "AM.png", "AP.png", "BA.png", "CE.png", "DF.png", "ES.png", "GO.png", "MA.png", "MG.png", "MS.png", "MT.png", "PA.png", "PB.png", "PE.png", "PI.png", "PR.png", "RJ.png", "RN.png", "RO.png", "RR.png", "RS.png", "SC.png", "SE.png", "SP.png", "TO.png"]
const estadosInfo = { // cria registro com estado e capital
    "AC" : ["Acre","Rio Branco"],
    "AL" : ["Alagoas","Maceió"],
    "AM" : ["Amazonas","Manaus"],
    "AP" : ["Amapá","Macapá"],
    "BA" : ["Bahia","Salvador"],
    "CE" : ["Ceará","Fortaleza"],
    "DF" : ["Distrito Federal","Brasília"],
    "ES" : ["Espírito Santo","Vitória"],
    "GO" : ["Goiás","Goiânia"],
    "MA" : ["Maranhão","São Luís"],
    "MG" : ["Minas Gerais","Belo Horizonte"],
    "MS" : ["Mato Grosso do Sul","Campo Grande"],
    "MT" : ["Mato Grosso","Cuiabá"],
    "PA" : ["Pará","Belém"],
    "PB" : ["Paraíba","João Pessoa"],
    "PE" : ["Pernambuco","Recife"],
    "PI" : ["Piauí","Teresina"],
    "PR" : ["Paraná","Curitiba"],
    "RJ" : ["Rio de Janeiro","Rio de Janeiro"],
    "RN" : ["Rio Grande do Norte","Natal"],
    "RO" : ["Rondônia","Porto Velho"],
    "RR" : ["Roraima","Boa Vista"],
    "RS" : ["Rio Grande do Sul","Porto Alegre"],
    "SC" : ["Santa Catarina","Florianópolis"],
    "SE" : ["Sergipe","Aracaju"],
    "SP" : ["São Paulo","São Paulo"],
    "TO" : ["Tocantins","Palmas"]
}

// Cria uma função para verificar palpite do mapa 
const palpiteMapa = (evento) => { 
    const errados = [...document.getElementsByClassName('errados')] // pegamos os estados já clicados e diferentes da bandeira da rodada
    const certo = [...document.getElementsByClassName('estadoCerto')]
    const texto = evento.target.id // pega o id da área clicada
    if (texto == 'svg') {
        document.getElementById("txtEstado").textContent = 'Clique sobre o mapa!'
    }
    else if (texto == sigla && certo.length != 1) { // compara o id com a sigla do estado da rodada e verifica se já foi criada a classe para o estado certo
        document.getElementById("txtEstado").textContent = 'Correto!!'
        document.getElementById("s0").disabled = false 
        document.getElementById("mapa").style.display = 'none'
        document.getElementById("respostaDiv").style.display ='initial'
        document.getElementById("h5").style.display = 'initial'
        document.getElementById("s0").style.display = 'initial'
        document.getElementById("s1").style.display = 'initial'
        document.getElementById("s2").style.display = 'initial'
        document.getElementById("botaoChute").style.display = 'initial'
        document.getElementById("botaoProximo").style.display = 'initial'
    }
    else {
        if (errados.length == 2) { // se usuário já errou 2 vezes
            document.getElementById("txtEstado").textContent = 'Tente Novamente!!'
            document.getElementById(sigla).classList.add('estadoCerto') // cria classe para estado certo 
            document.getElementById('botaoProximo').style.display = 'initial'
            document.getElementById('botaoProximo').disabled = false
        }
        else {
            document.getElementById("txtEstado").textContent = 'Incorreto!!'
            document.getElementById(texto).classList.add('errados')
        }
    }
}

// Cria uma função para esconder o formulário 
// (agora a função esconde cada elemento individualmente, em vez da div inteira)
const esconder = () => {
    document.getElementById("s0").style.display = 'none'
    document.getElementById("s1").style.display = 'none'
    document.getElementById("s2").style.display = 'none'
    document.getElementById("botaoChute").style.display = 'none'
    document.getElementById("botaoProximo").style.display = 'none'
    document.getElementById("h5").style.display = 'none'
    mostrarBandeira()
}
//Função para mostrar a bandeira, ao clicar no botão próximo
const mostrarBandeira = () => {
    const imagem = document.getElementById("bandeira")
    const nomeArquivo = "/bandeiras/" + nomeEstado // Removi o '+png' pq nomeEstado já vem com .png no final
    imagem.src = nomeArquivo
    document.getElementById("h5").textContent = "Selecione a capital de " + estadosInfo[nomeEstado.slice(0,-4)][0]
}

const numAleatorio = (min,max) => {
    return min + Math.floor(Math.random()*max) 
}

// Essa constante armazena o nome do estado da rodada. 
const nomeEstado = listaEstados[numAleatorio(0, listaEstados.length)]
// Essa constante armazena a sigla do estado da rodada
const sigla = nomeEstado.slice(0,-4) 

//Função que checa o palpite e habilita e desabilita os campos, por enquanto ainda sem o estado da rodada.
const palpite = () => {
    if (document.getElementById("s0").value == "Escolher ⌵") {
        document.getElementById("saida").textContent = "Selecione uma capital"
    }
    // Usando esatdosInfo[sigla] eu consigo acessar a capital pelo registro das capitais
    else if(document.getElementById("s0").value == estadosInfo[sigla][1]){
       document.getElementById("saida").textContent = "Correto!!"
       document.getElementById("botaoProximo").disabled = false
       document.getElementById("botaoChute").disabled = true
    }
    else if (document.getElementById("s0").disabled == false){
        document.getElementById("s0").disabled = true
        document.getElementById("s1").disabled = false
        document.getElementById("saida").textContent = "Incorreto"
    }
    else if (document.getElementById("s1").value == "Escolher ⌵") {
        document.getElementById("saida").textContent = "Selecione uma capital"
    }
    else if(document.getElementById("s1").value == estadosInfo[sigla][1]){
        document.getElementById("saida").textContent = "Correto!!"
        document.getElementById("botaoProximo").disabled = false
        document.getElementById("botaoChute").disabled = true
     }
     else if (document.getElementById("s1").disabled == false){
        document.getElementById("s1").disabled = true
        document.getElementById("s2").disabled = false
        document.getElementById("saida").textContent = "Incorreto"
    }
     else if (document.getElementById("s2").value == "Escolher ⌵") {
        document.getElementById("saida").textContent = "Selecione uma capital"
    }
     else if(document.getElementById("s2").value == estadosInfo[sigla][1]){
        document.getElementById("saida").textContent = "Correto!!"
        document.getElementById("botaoProximo").disabled = false
        document.getElementById("botaoChute").disabled = true
     }
    else {
        document.getElementById("s1").disabled = true
        document.getElementById("s2").disabled = true
        document.getElementById("botaoChute").disabled = true
        document.getElementById("botaoProximo").disabled = false
        document.getElementById("saida").textContent = estadosInfo[sigla][1]
    }
   
}
// Função que recarrega a página ao clicar no "Próximo".
const reload = () => {
    window.location.reload(true); 
}