let submit = document.querySelector("#submit");
submit.addEventListener('click', createTable);

function createTable(){
    let col = document.querySelector("#col").value;
    let row = document.querySelector("#row").value;
    let table = document.createElement("table");
    table.id = "myTable";
    let container = document.querySelector("#for-table");
    
    for (let i = 0; i < row; i++){
     let tr = document.createElement("tr");
     for (let j = 0; j < col; j++){
       let td = document.createElement("td");
       tr.appendChild(td);
     }
     table.appendChild(tr);
    }
    if(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.appendChild(table);
    table.onclick = function(event) {
 	 let cell = event.target;
 	 if (cell.tagName.toLowerCase() != 'td')
 	   return;
 	 let i = cell.parentNode.rowIndex + 1;
 	 let j = cell.cellIndex + 1;
 	 alert(`${i}.${j}`);
 	}
}