
let capacitateCilindrica = prompt ("Ce capacitate cilindrica are masina?")

const numardefractiuni = Math.round(capacitateCilindrica / 200)

console.log("Numarul de fractiuni este:",numardefractiuni)


// 8 lei pentru fiecare 200 cm3 => formula 8*numarul de fractiuni
// 72 lei pentru motoare mai mari de 2500 cm3


let formulaImpozit=(8*numardefractiuni)


if (capacitateCilindrica >= 2500){
    formulaImpozit=(72*numardefractiuni)
    console.log("Impozitul pentru masina dumneavoastra este:", formulaImpozit, "lei")
}else {
    formulaImpozit=(8*numardefractiuni)
    console.log("Impozitul pentru masina dumneavoastra este:",formulaImpozit, "lei")
}


