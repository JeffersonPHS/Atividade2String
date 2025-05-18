//function declarativa
function nomeCurto(nome) {
  // Cria array com as palavras
  let lista = nome.split(" ");
  
  // Se tiver mais de uma palavra, abrevia as primeiras
  if (lista.length > 1) {
    let primeirapalavra = lista[0]; // pega Robin
    lista[0] = primeirapalavra[0] + "."; // agora pega "R" e adiciona o ponta ao lando
  }


//Condição para caso não tenha nenhuma conjunto de palavras
  if (!nome){
    console.log("Não tem nenhum conjunto de palavras!")
  }
  
  // Junta tudo
  return lista.join(" ");
}

// Testes
console.log(nomeCurto("Jefferson Lima")); 