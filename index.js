const createTodo = async () =>{

let a ={
  method:"POST",
  headers:{
    "Content-type":"application/json"
  },
  body:JSON.stringify({
      title: 'Sanjay',
      body: 'Mali',
      userId: 1,
  
  }) ,
}
let p = await fetch('https://jsonplaceholder.typicode.com/posts', a)
  let response = await p.json()
  return response
}
const getTodo = async(id)=>{
 let response = fetch('https://jsonplaceholder.typicode.com/posts/ + id')
  let r = await response.json()
  return r
  
}
const mainFun = async()=>{

  var todo ={
    title: 'Sanjay',
    body: 'Mali',
      userId: 1,
  


  }
  var todor = await createTodo(todo)
  console.log(todor)
}


  mainFun()