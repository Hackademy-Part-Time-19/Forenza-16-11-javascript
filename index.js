let array = [ "franco" ,"Gennaro" , "Valerio", "Giulia", "eugenio" ]

/*for ( let indice= 0; indice<array.length; indice++) {
    console.log(array[indice])
 }*/

 for ( let indice= 0; indice<array.length; indice = indice + 1) {
    
    for(let indice2 = 0; indice2<array[indice].length; indice2++){
        console.log(array[indice][indice2])
     }
     
 }