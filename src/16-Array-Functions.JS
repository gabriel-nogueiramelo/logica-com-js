const array = [1, 5, 4, 3, 10, 7, 8, 20, 12]
// forEach: passa por todos os elementosdo array.
array.forEach((elemento, posicao) => {
//console.log(`${elemento} - posicao &{posicao}`)
})

// Find: Retorna o elemento
const valor = array.find((elemento) => {
return elemento === 10
})
//console.log(valor)

//findIndex: Retorna a posição do elemento no array.

const index = array.findIndex(elemento => elemento === 10)
//console.log(index)

//some: retorna true se pelo menos um numero satisfazer a consição
const some = array.some((elemento) => {
  if (elemento >= 21) return true
  return false
})
//console.log(some)

//every: retorna o true se TODOS os numeros respeitarem a consição.

const every = array.every((elemento) => {
  if (elemento >= 1) return true
  return  false
})
//console.log(every)
//splice: corta o array, o 1ª paran. é o inicio, o seg. quantidade.
const newArray = [1, 2, 3, 4, 5]
//console.log(newArray.slice(4,2))

//map: altera os valores dentro do array seguindo regras.
/*console.log(newArray.map((elemento) => {
  return (elemento) * 2
}))
*/

// Filter: Filtra os elementos dentro do array
/*console.log(newArray.filter((elemento) => {
  return elemento % 2 === 0
}))
*/

console.log(newArray.reduce((acumulado, elemento) => {
  return acumulado + elemento
}, 0))

