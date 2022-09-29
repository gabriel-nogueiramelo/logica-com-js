const lista = [18, 10, 19, 70, 80, 15, 22, 29, 35, 42, 59, 60, 22, 29, 79, 99]
 let facultativo = 0
 let obrigatorio = 0
 let naoEleitor = 0

for (let idade of lista ) {
  if (idade >= 18 && idade <= 69) obrigatorio++
  else if (idade < 16) naoEleitor++
  else facultativo++
}

console.log("Obrigatorio: ", obrigatorio)
console.log("Não Eleitor: ", naoEleitor)
console.log("Facultativo: ",  facultativo)