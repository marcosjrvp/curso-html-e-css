const listaNumeros = [4,4,4,5,6,4,7,8,4,4];

function verificarRepeticao(listaNumeros){

    let contador = 0;
    let valor = listaNumeros[0];

    for(let i =0; i < listaNumeros.length; i++){
        if(listaNumeros[i] === valor){
            valor = listaNumeros[i];
            contador ++;
            console.log(`O números ${listaNumeros[i]} se repetiu`)
        }
    }return contador;
}

console.log(verificarRepeticao(listaNumeros));