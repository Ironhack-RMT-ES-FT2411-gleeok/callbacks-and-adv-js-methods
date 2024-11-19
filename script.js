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