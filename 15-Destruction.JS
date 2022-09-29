 const pessoa = {
  nome: "Gabriel",
  sobrenome: "Nogueira",
  idade: 29,
  senha:"123"
 }
 
 const { nome, idade} = pessoa
// const.nome = pessoa.nome
//const.idade = pessoa.idade
 console.log(nome)
 console.log(idade)

 const pessoaAtualizada = {
   ...pessoa,
   idade:30,
   senha:"456"
 }

 console.log(pessoaAtualizada)

 const array = [10, 20, 30]
 const [a, b] = array


 const newarray = [0, ...array, 5]
 console.log(newarray)