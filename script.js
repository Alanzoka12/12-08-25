const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Onde você acredita que a vida encontra sua maior expressão?",
        alternativas: [
            
            {
                texto: "No vasto oceano, profundo e misterioso!",
                afirmacao: "afirmação"
            },
            {
                texto: " Na floresta densa, viva e pulsante!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: " Como você acha que os seres vivos melhor se mantêm em harmonia com o ambiente?",
        alternativas: [
            {
                texto: " Adaptando-se silenciosamente, quase invisíveis",
                afirmacao: "afirmação"
            },
            {
                texto: "Interagindo ativamente com outras formas de vida",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: " O que você valoriza mais como resultado dessa convivência com a natureza?",
        alternativas: [
            {
                texto: "O equilíbrio delicado entre todas as formas de vida",
                afirmacao: "afirmação"
            },
            {
                texto: "A transformação constante que impulsiona a evoluçao",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Diante disso, como você acredita que devemos agir em relação à natureza?",
        alternativas: [
            {
                texto: "Preservar com respeito, intervindo o mínimo possível",
                afirmacao: "afirmação"
            },
            {
                texto: " Interagir com responsabilidade, buscando um futuro sustentável",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: " Qual papel você acredita que o ser humano ocupa dentro da natureza? ",
        alternativas: [
            {
                texto: "Um guardião consciente, parte do todo que precisa proteger",
                afirmacao: "afirmaçao"
            },
            {
                texto: "Um transformador criativo, capaz de moldar e também restaurar",
                afirmacao: "afirmaçao"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length ){
        mostraresultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    
}
function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}


mostraPergunta();