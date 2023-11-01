# Digimon API

Este projeto é uma API que consome informações sobre Digimons de uma fonte externa e oferece funcionalidades para listar e filtrar Digimons com base no nível.Link da API externa https://digimon-api.vercel.app/ feita por https://shadowsmith.com/

## Tecnologias Utilizadas

- **HTML/CSS/JavaScript:** Para a estrutura, estilo e interatividade da aplicação.
- **Axios:** Uma biblioteca para fazer requisições HTTP.
- **API de Digimons:** [https://digimon-api.vercel.app](https://digimon-api.vercel.app) (API utilizada para obter os dados dos Digimons).

## Funcionalidades

1. **Exibição de Digimons:**
   - A aplicação faz uma requisição à API de Digimons e exibe os Digimons na página.
   - Cada Digimon é exibido como um cartão contendo o nome, o nível e uma imagem em ordem alfabética 

2. **Filtrar Digimons por nível**
   - Os Digimons podem ser filtrados por nivel. Digite o nível desejado  (por exemplo, "Rookie") no campo de filtro.
   - Clique no botão `Filtrar`  para ver apenas os Digimons com o nível especificado. 
  
3. **Filtrar Digimons por nome**
   - Os Digimons podem ser filtrados por nome. Digite o nome desejado  (por exemplo, "Agumon") no campo de filtro.
   - Clique no botão `Filtrar`  para ver apenas os Digimons com o nível especificado. 

## Configuração

Antes de começar, assegure-se de ter as seguintes dependências instaladas em seu sistema:

- Node.js
- NPM
- Vscode
- Extensão Live Server no Vscode

## Como Usar
Clone o repositório para o seu ambiente local.

instale o as dependências do projeto com o seguinte comando:

      npm i

Para iniciar o projeto, utilize o comando:

      npm run dev

Abra o arquivo `index.html` e inicie a extensão Live Server para visualizar a aplicação em tempo real.




## Estrutura do Projeto

- **`index.html`:** Contém a estrutura HTML da página.
- **`style.css`:** Arquivo de estilos para a aplicação.
- **`Digimon.js`:** Código JavaScript que faz requisições à API e manipula a interface do usuário.


<div style="text-align: center;">
  <img src="https://logospng.org/wp-content/uploads/node-js.png" 
  alt="Logo do projeto" style="width: 200px; margin: 0 auto;border-radius:10px">
    <img src="https://www.10bestdesign.com/blog/content/images/2018/03/20.png" 
  alt="Logo do projeto" style="width: 200px; margin: 0 auto;border-radius:10px; margin-left:4em">
</div>
