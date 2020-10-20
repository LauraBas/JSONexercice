

fetch("todos.json")
  .then(response => response.json())
  .then(data => { console.log(data)
    //   let tasksList = JSON.parse(data)
  })
  .catch(e => console.log(e))
  
  