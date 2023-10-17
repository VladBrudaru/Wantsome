

let initialValues=[2, 7, 6, "Wantsome", true, 24]

let otherValues=[23, 5, 8, "Frontend"]

initialValues.push(otherValues)

console.log(initialValues)


const lista=[4, "City", 6, "Arsenal", 8, "Liverpool"]
console.log(lista)


for(let i=0; i<lista.length; i++){
    if (typeof lista[i] === "number"){
        lista[i]=lista[i]+2
        console.log(lista[i])
    }
}
console.log(lista)

for(let i=0; i<lista.length; i++){
    if (typeof lista[i] === "string"){
        lista[i]=lista[i]+"happy codding"
        console.log(lista[i])
    }

}

for(let i=0; i<lista.length; i++){
    if (typeof lista[i] === "boolean"){
        lista[i]!=true
        console.log(lista[i])
    }

}