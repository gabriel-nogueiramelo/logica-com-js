const API_URL = 'https://jsonplaceholder.typicode.com/users'

async function getUsers () {
  const response = await fetch(API_URL)
  const data = await response.json()
  console .log(pessoa-teste)
}

getUsers()