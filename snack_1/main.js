/*Crea un array di 10 oggetti che rappresentano una zucchina, 
indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.

*/

//creo oggetto applicando una costante.

const zucchine  = [{
    varieta: 'faenza',
    peso: 10,
    lunghezza: 10
},
    

{
    varieta: 'faenza',
    peso: 30,
    lunghezza: 15
},

{
    varieta: 'faenza',
    peso: 50,
    lunghezza: 6
},

{
    varieta: 'faenza',
    peso: 40,
    lunghezza: 8
},

{
    varieta: 'faenza',
    peso: 25,
    lunghezza: 10
},


{
    varieta: 'faenza',
    peso: 20,
    lunghezza: 25
},

{
    varieta: 'faenza',
    peso: 20,
    lunghezza: 30
},


{
    varieta: 'faenza',
    peso: 20,
    lunghezza: 45
},


{
    varieta: 'faenza',
    peso: 20,
    lunghezza: 15
},


{
    varieta: 'faenza',
    peso: 20,
    lunghezza: 15
}

]


//devo calcolare la somma del peso di tutte le zucchine

let somma = 0

zucchine.forEach((zucchina)=>{
    console.log(zucchina.peso);

    let peso = zucchina.peso;
    somma += peso
}) 

console.log(somma);
    
