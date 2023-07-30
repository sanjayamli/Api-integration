const createTodo = async (todo) =>{

let a ={
  method:"POST",
  headers:{
    "Content-type":"application/json"
  },
  body:JSON.stringify(todo)
}
let p = await fetch('https://jsonplaceholder.typicode.com/posts', a)
  let response = await p.json()
  return response
}
const getTodo = async (id)=>{
 let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  let r = await response.json()
  return r
  
}
const mainFun = async()=>{

  let todo ={
    title: 'Sanjay',
    body: 'Mali',
      userId: 1,
  


  }
  let todor = await createTodo(todo)
  console.log(todor)
  console.log(await getTodo(101))
}


  mainFun()
