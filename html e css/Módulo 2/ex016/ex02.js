const listaNumeros = [5,7,18,9,33,10];

function verificarMenor(listaNumeros){

    let menor = listaNumeros[0];

    for(let i=0; i < listaNumeros.length; i++){
        if(listaNumeros[i] <= menor){
            menor = listaNumeros[i];
        }
    }
    return menor;
}

console.log(verificarMenor(listaNumeros));