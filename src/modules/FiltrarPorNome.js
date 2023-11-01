export default function filtrarPorNome() {
    const inputFiltrar = document.querySelector('.filtrar');
    const btnFiltrar = document.querySelector('.btn-filtrar');

    btnFiltrar.addEventListener('click', () => {
    const nomeFiltrar = inputFiltrar.value.toLowerCase(); // Obtém o valor do input e converte para minúsculas
    
    const digimonCards = document.querySelectorAll('.digimon-card'); // Obtém todos os cartões de Digimon
        
        
        
        digimonCards.forEach(card => {
            const nomeDigimon = card.querySelector('h2').textContent.toLowerCase();

            // Verifica se o nome do Digimon começa com o filtro inserido pelo usuário
            if (nomeDigimon.startsWith(nomeFiltrar)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}
