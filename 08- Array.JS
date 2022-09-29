let array = [10, 20, 30] 

for (let pos = 0; pos < array; pos++) {
}
// for in
for (let pos in array){
  //console.log(pos)
  //console.log(array[pos])
}
// for of
for(let arr of array)
//  console.log(arr)

const numbers = [10, 20, 30] 
let sum = 0
for (let num of numbers) {
  sum = sum + num
}
const media = sum / numbers.length
 console.log(media)