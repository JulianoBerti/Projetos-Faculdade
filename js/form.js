function mascaraTelefone(event){

    let input = event.target;

    input.value = input.value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
}

document
.getElementById("telefone")
.addEventListener("input", mascaraTelefone);