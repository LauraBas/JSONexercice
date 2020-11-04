const todosTable =document.getElementById("todosTable");

function studyList() {
  let data = fetch("todos.json")
    .then(response => response.json())
    .then(data => { 
      console.log(data);
        
      let rows =[];

      for(let i = 0; i < data.results.length; i++){
        let row = document.createElement("tr");
        row.innerHTML = "<td>" + data["results"][i]["title"] + "</td><td>" + data["results"][i]["priority"] + "</td>";
        rows.push(row);
        todosTable.appendChild(rows[i]);
      }
    })

}

studyList();
  
  