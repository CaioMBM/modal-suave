var modal = document.getElementById("modal")

/* Exibir o modal */
function showModal(){
    modal.classList.add('showModal');  
    modal.classList.remove('closeModal');  

    modal.style.display = 'block'; // Certifica que o modal está visível
}

/* Esconder o modal */
function closeModal(){
    modal.classList.add('closeModal');  
    modal.classList.remove('showModal');  

    // Usar setTimeout() para esperar a animação terminar antes de esconder
    setTimeout(function() {
        modal.style.display = 'none'; // Esconde o modal após a animação
    }, 1000); // O tempo deve corresponder à duração da animação (.closeModal 1s)
    
    // Precisa do setTimeout() porque quando o display de um elemento tem o valor “none”, ele é removido do fluxo de renderização e isso impede que qualquer animação CSS seja exibida.
}