const form = document.querySelector("form");
const mascara = document.querySelector(".mascara-formulario")


function cliqueinobotao() {
    form.style.left = "50%";
    form.style.transform = "translateX(-50%)"; 
    mascara.style.visibility = "visible"
}

function cliquenamascara() {
    form.style.left = "-300px" 
    form.style.transform = "translateX(0%)"; 
    mascara.style.visibility = "hidden"
}





// Função para alternar o menu de Personagens
function togglePersonagensMenu(event) {
    event.preventDefault(); // Evita comportamento padrão do link
    let menuPersonagens = document.getElementById("menuPersonagens");
    menuPersonagens.style.display = menuPersonagens.style.display === "block" ? "none" : "block";
}

// Fecha o menu "Personagens" se clicar fora dele
document.addEventListener("click", function(event) {
    let menuPersonagens = document.getElementById("menuPersonagens");
    let personagensBtn = document.querySelector(".menu a");

    if (!menuPersonagens.contains(event.target) && event.target !== personagensBtn) {
        menuPersonagens.style.display = "none";
    }
});





// Função para alternar o menu "Onde Comprar"
function toggleOndeComprarMenu(event) {
    event.preventDefault(); // Evita comportamento padrão do link
    let menuComprar = document.getElementById("ondeComprar");
    menuComprar.style.display = menuComprar.style.display === "block" ? "none" : "block";
}

// Fecha o menu "Onde Comprar" se clicar fora dele
document.addEventListener("click", function(event) {
    let menuComprar = document.getElementById("ondeComprar");
    let OndeComprarBtn = document.querySelector(".comprar a");

    if (!menuComprar.contains(event.target) && event.target !== OndeComprarBtn) {
        menuComprar.style.display = "none";
    }
});