//Every method
const arr=[23,4,3,8,10,46,44,120,227];
console.log(arr);

function onlyOddNumbers(element,index,array){
    return element%2==0;
}

function oddNumbers(){
    let value=arr.every(onlyOddNumbers);
    console.log(value)
}

oddNumbers()

//ForEach method
const students=["John","Mike","Sara","Laura"]

students.forEach(myFunction);

function myFunction(student){
    console.log(student)
}
myFunction()

//Reduce method

const numbers=[23,4,3,8,10,46,44,120,227]
console.log(numbers)

function sumCalculator(accumulator,currentValue){
    return accumulator+currentValue;
}

let sum=numbers.reduce(sumCalculator)
console.log(sum)

 