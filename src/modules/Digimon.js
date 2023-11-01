import axios from 'axios';

// Função para obter e exibir os Digimons com filtro por ordem alfabética
// Caso queria mudar a ordem para ser inversa a ordem alfabética mudar o parâmetro para desc 
export default async function getDigimons(order = 'asc') {
    try {
        // Faz uma requisição à API para obter os dados dos Digimons
        const response = await axios.get('https://digimon-api.vercel.app/api/digimon');
        const digimons = response.data; // Armazena a resposta da API em uma variável

        // Ordena os Digimons por nome em ordem alfabética
        digimons.sort((a, b) => (order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)));

        // Obtém a lista HTML onde os Digimons serão exibidos
        const digimonList = document.getElementById('digimon-list');
        digimonList.innerHTML = ''; // Limpa a lista antes de adicionar os Digimons

        // Itera sobre os Digimons ordenados e cria elementos HTML para cada um
        digimons.forEach(digimon => {
            const digimonCard = document.createElement('div');
            digimonCard.classList.add('digimon-card'); // Adiciona a classe 'digimon-card' para estilização

            // Cria um elemento de título (<h2>) para o nome do Digimon e adiciona ao cartão
            const digimonName = document.createElement('h2');
            digimonName.textContent = digimon.name;
            digimonCard.appendChild(digimonName);

            // Cria um elemento de parágrafo (<p>) para o nível do Digimon e adiciona ao cartão
            const digimonLevel = document.createElement('p');
            digimonLevel.textContent = `Nível: ${digimon.level}`;
            digimonCard.appendChild(digimonLevel);

            // Cria um elemento de imagem (<img>) para a imagem do Digimon e adiciona ao cartão
            const digimonImage = document.createElement('img');
            digimonImage.src = digimon.img;
            digimonImage.alt = digimon.name;
            digimonCard.appendChild(digimonImage);

            // Adiciona o cartão com as informações do Digimon à lista de Digimons
            digimonList.appendChild(digimonCard);
        });
    } catch (error) {
        // Captura e imprime qualquer erro que ocorra durante a requisição à API
        console.error('Error fetching digimons:', error);
    }
}
