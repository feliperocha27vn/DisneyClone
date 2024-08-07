// Função para listar os filmes da API
async function listaFilmes() {
  // Faz uma solicitação para obter a lista de filmes
  const conexao = await fetch("http://localhost:3000/filmes");
  // Converte a resposta para JSON
  const conexaoConvertida = await conexao.json();
  
  // Retorna a lista de filmes convertida
  return conexaoConvertida;
}

// Seleciona o elemento onde os filmes serão adicionados
const lista = document.querySelector("[data-filme]");

// Função para construir o card do filme
function constroiCard(title, image) {
  // Cria um elemento div para o filme
  const filme = document.createElement("div");
  
  // Adiciona o conteúdo HTML dentro da div
  filme.innerHTML = `
     <div>
            <img
              src=${image}
              alt="${title}"
              class="rounded-lg"
            />
            <label class="font-medium">${title}</label>
          </div>
  `;
  
  return filme;
}

// Função para listar e exibir os filmes
async function listaFilme() {
  // Traz a lista de filmes da API usando a função listaFilmes
  const listaApi = await listaFilmes();
  
  // Itera sobre cada filme na lista
  listaApi.forEach(elemento => {
    // Constrói um card para cada filme e o adiciona ao elemento lista
    lista.appendChild(constroiCard(elemento.title, elemento.image));
  });
}

// Chama a função listaFilme para exibir os filmes na página
listaFilme();
