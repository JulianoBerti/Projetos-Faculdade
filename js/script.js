function openModal(tipo){

    const modal = document.getElementById("modal");
    const titulo = document.getElementById("tituloModal");
    const texto = document.getElementById("textoModal");

    modal.style.display = "block";

    if(tipo == "Tradicional"){
        titulo.innerHTML = "Burger Tradicional";
        texto.innerHTML = "Hambúrguer artesanal com queijo.";
    }

    if(tipo == "Bacon"){
        titulo.innerHTML = "Burger Bacon";
        texto.innerHTML = "Hambúrguer com bacon crocante.";
    }

    if(tipo == "Especial"){
        titulo.innerHTML = "Burger Especial";
        texto.innerHTML = "Hambúrguer especial da casa.";
    }
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
}