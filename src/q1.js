// Function expressiva 
let string = function (teste) {
    //
  return typeof teste == "string";
}
// variáveis para testar
let lista = [1, 2, 3]
let nome = "Jefferson"

// Testando se vai ser string ou não
console.log(string(lista)); // Vai retornar false poque não é uma string
console.log(string(nome)); // Vai retornar true poque é uma string