// Método Simples
document.body.innerHTML += '<h1 id="titulo">Título Adicionado com JavaScript</h1>';

// Método Complexo
const produtoElement = document.createElement('div');
produtoElement.id = 'produto';

const nomeElement = document.createElement('h2');
nomeElement.textContent = 'Nome do Produto';

const descricaoElement = document.createElement('p');
descricaoElement.textContent = 'Descrição do produto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

const precoElement = document.createElement('p');
precoElement.textContent = 'Preço: R$ 99,99';

// Adiciona os elementos filhos ao elemento do produto
produtoElement.appendChild(nomeElement);
produtoElement.appendChild(descricaoElement);
produtoElement.appendChild(precoElement);

// Adiciona o elemento do produto ao corpo do documento
document.body.appendChild(produtoElement);
