console.log("probando")

// callbacks


function saludar(name) {
  console.log(`Hola ${name}`)
} // ref 1234

saludar("bob")

function despedirse(name) {
  console.log(`Adios ${name}`)
}



function functionDiferente( funcionDeCallback ) {
  // let funcionDeCallback = saludar // ref 1234
  // console.log(funcionDeCallback)

  // ...

  funcionDeCallback("patricio") // ref 1234

} // ref 4567

functionDiferente(saludar)
functionDiferente(despedirse)



// por que aprendemos callbacks?

// 1. existen lógicas avanzadas que usan el concepto de callbacks para hacer el código lo más dinamico posible.
// 2. existen muchos metodos y herramientas que usan este sistema de callbacks.

let arr = [2, 4, 8, 12, 100, 2000]

function imprimirAlgo() {
  console.log("algo")
}

arr.forEach( imprimirAlgo )

// imprimirAlgo()
// imprimirAlgo()
// imprimirAlgo()
// imprimirAlgo()
// imprimirAlgo()
// imprimirAlgo()

// .forEach()

let randomNumbers = [4, 8, 15, 16, 23, 42];


// function funcionTest() {
//   console.log("patata")
// }

randomNumbers.forEach( (cadaNumero, i) => {
  // console.log("patata")
  console.log(i, cadaNumero)

  if (cadaNumero === 42) {
    console.log("encontramos el 42, la respuesta a el universo, la vida y todo lo demás")
  }

} )
// diferencias con el bucle tradicional
// 1. siempre va de inicio a fin y siempre pasa por cada elemento
// 2. no podemos detenr el bucle una vez empieza. No tenemos las palabras continue o break.

// for (let i = 0; i < randomNumbers.length; i++) {
//   console.log(i, randomNumbers[i])
// }


// .map() => creamos un nuevo array donde cada uno de los elementos del original está modificado

let nuevoArray = randomNumbers.map((eachNumber) => {

  console.log(eachNumber)

  // siempre nos pide que retornemos un valor
  let nuevoValor = eachNumber * 100
  return nuevoValor
})

console.log(nuevoArray) // siempre tiene la misma cantidad de elmentos


let arrayDeString = randomNumbers.map((eachNumber, i) => {

  let numberAsString = `${i}: Numero ${eachNumber}`
  return numberAsString

})

console.log(arrayDeString)

console.log(randomNumbers)


// .filter()

const cars = [
  { brand: "Mercedes-Benz", year: 2012, weight: 0.8 },
  { brand: "Porsche", year: 2020, weight: 1.3 },
  { brand: "Bugatti", year: 2003, weight: 0.5 },
  { brand: "Volvo", year: 2010, weight: 1.9 },
  { brand: "Smart", year: 2010, weight: 0.1 },
];

let filteredCars = cars.filter((cadaCoche) => {

  // el filter no necesita que le retornemos el objeto
  // el filter REQUIERE que retornemos un booleano
  // true (incluye el elemento)
  // false (no incluye el elemento)

  if (cadaCoche.weight >= 1) {
    return true // incluyelo
  } else {
    return false // no lo incluyas
  }

  // cuando tenemos un condicional y este retorna un boolean, podemos simplemente retornar el booleano

  // return cadaCoche.weight >= 1
    
})

console.log(filteredCars)


// .reduce()

let someNumbers = [1, 2, 3, 4, 5]

// sumar todos estos numeros
// let sum = 0;
// for (let i = 0; i < someNumbers.length; i++) {
//   let cadaValor = someNumbers[i]
//   sum += cadaValor
// }

// console.log(sum)

let sum2 = someNumbers.reduce((acumulador, cadaValor) => {

  console.log(acumulador, cadaValor)
  // SIEMPRE tenemos que retornar lo que será el valor proximo del acumulador.
  return acumulador + cadaValor

}, 0)

console.log(sum2)


const people = [
  { name: 'Candice', candy: 25 },
  { name: 'Tammy', candy: 30 },
  { name: 'Allen' },
  { name: 'Nettie', candy: 20 },
  { name: 'Stuart', candy: 17 },
  { name: 'Bill', candy: 19 },
];

// sumar todos los caramelitos de las personas

let totalCandy = people.reduce((acc, eachPerson) => {

  console.log(acc, eachPerson.candy)
  if (eachPerson.candy !== undefined) {
    return acc + eachPerson.candy
  } else {
    return acc
  }

}, 0)

console.log(totalCandy)


// .reverse() // muta el original
// .toReversed() // no muta el array original, crear un nuevo array

let orderedNumbers = [1, 2, 3, 4, 5] // ref 1234

let arrayInvertido = orderedNumbers.toReversed() // ref 4567

console.log(arrayInvertido) // ref 4567
console.log(orderedNumbers) // ref 1234. muta el array original


// sort() // muta el original
// toSorted() // no muta el array original, crear un nuevo array


let someLetters = ["a", "e", "c", "b", "d"]

someLetters.sort()

console.log(someLetters)

let numeros = [30, 1, 400, 2, 3, 50, 1000]

numeros.sort((elemento1, elemento2) => {

  // un algoritmo de orden
  // TENEMOS que retornar un valor numerico
  // - positivo: el elemento2 elemento va primero
  // - negativo: el elemento1 elemento va primero
  // - 0: no debes cambiar el orden
  console.log(elemento1, elemento2)

  if (elemento1 < elemento2) {
    return -1
  } else if (elemento2 < elemento1) {
    return +1
  } else {
    return 0
  }

})

console.log(numeros)


const people2 = [
  { name: 'Candice', candy: 25 },
  { name: 'Tammy', candy: 30 },
  { name: 'Allen', candy: 40 },
  { name: 'Nettie', candy: 20 },
  { name: 'Stuart', candy: 17 },
  { name: 'Bill', candy: 19 },
];


people2.sort((persona1, persona2) => {

  if (persona1.candy < persona2.candy) {
    return -1
  } else if (persona2.candy < persona1.candy) {
    return +1
  } else {
    return 0
  }

})

console.log(people2)