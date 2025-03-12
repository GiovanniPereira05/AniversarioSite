
// Apagar as velas
document.querySelectorAll('.chama').forEach(fogo => {
    fogo.addEventListener('click', () => {
        let id = fogo.getAttribute('data-id'); 
        let chamaCima = document.querySelectorAll('.chamaCima')[id - 1]; 

        if (fogo.textContent === "(*)") {
            fogo.textContent = "   "; 
            if (chamaCima) chamaCima.textContent = " "; 
        }
    });
});

// Chaminha ficar mexendo 
setInterval(() => {
    document.querySelectorAll('.chamaCima').forEach(chamaCima => {
        chamaCima.classList.add('animar');

        setTimeout(() => {
            if (chamaCima.textContent === ")") {
                chamaCima.textContent = "(";
            } else if (chamaCima.textContent === "(") {
                chamaCima.textContent = ")";
            }


            chamaCima.classList.remove('animar');
        }, 300); 
    });
}, 450); 

// Verifica se todas as velas foram apagadas
function verificarVelas() {
    let todasApagadas = true;

    document.querySelectorAll('.chama').forEach(fogo => {
        if (fogo.textContent.trim() !== "") {
            todasApagadas = false; 
        }
    });



    if (todasApagadas) {
        // se todas as velas forem apagadas apagar o texto de apagar as velas (tirar o for depois)
        let textoEmbaixo = document.getElementsByClassName("textoApagavel");
        for (let i = 0; i < textoEmbaixo.length; i++){
            textoEmbaixo[i].textContent = ""
        }

        let textoNiver = document.getElementsByClassName("textoNiver")
        for (let i = 0; i < textoNiver.length; i++){
            textoNiver[i].style.display = "block"
        }
    }
}

document.querySelectorAll('.chama').forEach(fogo => {
    fogo.addEventListener('click', verificarVelas);
});


let presenteTampa = document.getElementById("presenteTampa");
let presente = document.getElementById("presente")

let dentroPresente = document.getElementById("dentroPresente");
let textoPresente = document.getElementById("textoPresente")

presente.addEventListener("click", abrirPresente);
presenteTampa.addEventListener("click", abrirPresente);

function abrirPresente(){
    presenteTampa.classList.add("presenteTampaAbrir");
    dentroPresente.classList.remove("dentroPresenteEscondido");
    textoPresente.textContent = ""
}



function whiteMode(){
    let botaoWhiteMode = document.getElementById("botaoWhiteMode")
  
    if (botaoWhiteMode.textContent === "Dark Mode"){
        botaoWhiteMode.textContent = "White Mode"
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"  
    }
    else if(botaoWhiteMode.textContent === "White Mode"){
        botaoWhiteMode.textContent = "Dark Mode"
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
    }
    
}