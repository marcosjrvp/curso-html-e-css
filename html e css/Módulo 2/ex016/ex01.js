function contarNumerosPares(numero){
  
 listaNumeros = [];

 for(let i=0; i <= numero; i++){
     if(i% 2 != 0){

        listaNumeros.push(i);
     }
    }return listaNumeros;
}


function exibirNumerosImpares(numeros){

    console.log(`Os numeros pares listados até ${numeros} : `);
    console.log(contarNumerosPares(numeros));
}


exibirNumerosImpares(50);

