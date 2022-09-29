const person = {
  name: 'Gabriel',
  lastName: 'Nogueira'
}
// Object.keys(): Cria um array com todas as chaves do objeto.
//console.log(Object.keys(person))

//Object.values(): Cria um array com todos os valores do objeto.
//console.log(Object.values(person))

//Objecto.entries(): Cria um array com um array de objetos e valores.
//const array = Object.entries(person)

const livros = {
  'Livro A': 20.00,
  'Livro B': 30.00,
  'Livro C': 40.00
}

const values = Object.values(livros)
// values = [20, 30, 40]
const sum = values.reduce((val, acc) =>  val + acc, 0)

console.log(sum)