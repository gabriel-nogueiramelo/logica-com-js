function fatorial (n) {
  let resposta = 1
  while (n>= 2) {
    resposta = resposta * n
    n--
  }
  return resposta
}

const number = 4
const resposta = fatorial(number)
console.log(resposta)