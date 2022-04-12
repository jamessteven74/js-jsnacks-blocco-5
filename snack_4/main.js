// SNACK 4
// Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) 
// prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

// scrivo primo array con lettere abc

const array1 = ["a","b", "c"]
console.log(array1);

const array2 = [1,2,3];
console.log(array2);

arrayFinale = []
console.log(arrayFinale);


//potrei fare un ciclo for

for(let i = 0; i < array1.length; i++){
   arrayFinale.push(array1[i])
   arrayFinale.push(array2[i])
}

console.log(arrayFinale);



