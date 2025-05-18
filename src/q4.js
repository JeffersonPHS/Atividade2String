//function declarativa que vai implementar o slice para recortar que está por sua vez iniciando com zero
function initCut(inicio, numletra){
    return inicio.slice(0, numletra)
}

//variavel para amarzenar nome
let nome = "Jefferson"


//variável recordar para armazenar o nome  recortado
let recortar = initCut(nome, 5)
console.log(recortar)