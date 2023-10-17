const listaNumere=[5, 78, 120, 4, 8, 426]

console.log(listaNumere)


let suma=0

for(let i=0; i<listaNumere.length; i++){
    suma=suma+listaNumere[i];
}

const mediaAritmetica=suma/listaNumere.length


console.log("Media aritmetica este:", mediaAritmetica)


const listaMixta=[45, true, 23, "Audi", "Programare", false, 88]

console.log(listaMixta)

let suma2=0

for(let i=0; i<listaMixta.length; i++){
    if (typeof listaMixta[i] === "number"){
        suma2=suma2+listaMixta[i]
        
    }
}
console.log("Suma numerelor din lista este:",suma2)



const fibonaci=20

let n1=0
let n2=1
let n3;

console.log("Fibonacci first 20 numbers:")


for(let i=1; i<=20; i++){
    console.log(n1)
    n3=n1+n2
    n1=n2
    n2=n3
}


