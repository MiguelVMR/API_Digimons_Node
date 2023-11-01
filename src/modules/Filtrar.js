export default function filtrarDigimons() {
    const inputFiltrar = document.querySelector('.filtrar');
    const btnFiltrar = document.querySelector('.btn-filtrar');

    btnFiltrar.addEventListener('click', () => {
        const nivelFiltrar = inputFiltrar.value.toLowerCase(); // Obtém o valor do input e converte para minúsculas

        const digimonCards = document.querySelectorAll('.digimon-card'); // Obtém todos os cartões de Digimon

        // Itera sobre os cartões de Digimon e verifica se o nível corresponde ao valor filtrado
        digimonCards.forEach(card => {
            const nivelDigimon = card.querySelector('p').textContent.toLowerCase(); // Obtém o nível do Digimon

            // Se o nível do Digimon corresponder ao nível filtrado, exibe o cartão, caso contrário, oculta o cartão
            if (nivelDigimon.includes(nivelFiltrar)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}
