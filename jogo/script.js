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
// Cria funções que fazem aparecer, desaparecer, habilitar e desabilitar elementos do html.
const some = (x) => document.getElementById(x).style.display = 'none'
const aparece = (x) => document.getElementById(x).style.display = 'initial'
const habilita = (x) => document.getElementById(x).disabled = false
const desabilita = (x) => document.getElementById(x).disabled = true
const texto = (x) => (txt) => document.getElementById(x).textContent = `${txt}`

const numAleatorio = (min,max) => {
    return min + Math.floor(Math.random()*max) 
}

// Essa constante armazena o nome do estado da rodada. 
const nomeEstado = listaEstados[numAleatorio(0, listaEstados.length)]
// Essa constante armazena a sigla do estado da rodada
const sigla = nomeEstado.slice(0,-4) 
// Essa constante armazena a capital do estado da rodada
const capital = estadosInfo[sigla][1]

// Cria uma função para começar, escondendo a segunda parte do jogo e mostrando a bandeira 
const comecar = () => {
    const esconderEl = ["s0", "s1", "s2", "botaoChute", "botaoProximo", "h5"]
    esconderEl.map((x) => some(x)) // faz com que a função de sumir seja aplicada a todos os elementos que precisamos de uma vez
    mostrarBandeira(nomeEstado)
}

//Função para mostrar a bandeira, ao clicar no botão próximo
const mostrarBandeira = (nomeEstado) => {
    const imagem = document.getElementById("bandeira")
    const nomeArquivo = "/bandeiras/" + nomeEstado // Removi o '+png' pq nomeEstado já vem com .png no final
    imagem.src = nomeArquivo
    texto('h5')(`Selecione a capital de ${estadosInfo[nomeEstado.slice(0,-4)][0]}`)
}

// Cria uma função para verificar palpite do mapa 
const palpiteMapa = (evento) => { 
    const errados = [...document.getElementsByClassName('errados')] // pegamos os estados já clicados e diferentes da bandeira da rodada
    const certo = [...document.getElementsByClassName('estadoCerto')]
    const id = evento.target.id // pega o id da área clicada
    if (id == 'svg') {
        texto('txtEstado')('Clique sobre o mapa!')
    }
    else if (id == sigla && certo.length != 1) { // compara o id com a sigla do estado da rodada e verifica se já foi criada a classe para o estado certo
        const palpiteMapaAparecer = ["respostaDiv", "h5", "s0", "s1", "s2", "botaoChute", "botaoProximo"]
        palpiteMapaAparecer.map((x) => aparece(x) )
        texto('txtEstado')('Correto!!')
        habilita("s0")
        some("mapa") 
    }
    else {
        if (errados.length == 2 && errados[0] != evento.target && errados[1] != evento.target) { // se usuário já errou 2 vezes
            texto('txtEstado')('Tente Novamente!!')
            document.getElementById(sigla).classList.add('estadoCerto') // cria classe para estado certo 
            aparece("botaoProximo")
            habilita('botaoProximo') 
        }
        else {
            texto('txtEstado')('Incorreto!!')
            document.getElementById(id).classList.add('errados')
        }
    }
}

//Função que checa o palpite e habilita e desabilita os campos, por enquanto ainda sem o estado da rodada.
const palpite = (capital) => {
    if (document.getElementById("s0").value == "Escolher ⌵") {
        texto('saida')('Selecione uma capital')
    }
    // Usando esatdosInfo[sigla] eu consigo acessar a capital pelo registro das capitais
    else if(document.getElementById("s0").value == capital){
        texto('saida')('Correto!!')
        habilita("botaoProximo")
        desabilita("botaoChute")
    }
    else if (document.getElementById("s0").disabled == false){
        desabilita("s0")
        habilita("s1")
        texto('saida')('Incorreto')
    }
    else if (document.getElementById("s1").value == "Escolher ⌵") {
        texto('saida')('Selecione uma capital')
    }
    else if(document.getElementById("s1").value == capital){
        texto('saida')('Correto!!')
        habilita("botaoProximo")
        desabilita("botaoChute")
     }
     else if (document.getElementById("s1").disabled == false){
        desabilita("s1")
        habilita("s2")
        texto('saida')('Incorreto!')
    }
     else if (document.getElementById("s2").value == "Escolher ⌵") {
        texto('saida')('Selecione uma capital')
    }
     else if(document.getElementById("s2").value == capital){
        texto('saida')('Correto!!')
        habilita("botaoProximo")
        desabilita("botaoChute")
     }
    else {
        const elementosDesabilitar = ["s1", "s2", "botaoChute"]
        elementosDesabilitar.map((x) => desabilita(x))
        habilita("botaoProximo")
        texto('saida')(`A capital é: ${capital}`)
        texto('saida')(`A capital é ${capital}`)
    }
}
// Função que recarrega a página ao clicar no "Próximo".
const reload = () => {
    window.location.reload(true); 
}