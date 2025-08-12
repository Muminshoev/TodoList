import { deleteTodo } from "./removeTodo.js";

const list = document.getElementById("list");


function addTodo() {
    const addBtn = document.getElementById("add-btn");
    const input = document.getElementById("input-field");
    addBtn.addEventListener("click", () =>{
        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete";
        deleteBtn.innerText = "Delete";
        const liEl = document.createElement("li");
        let inputText = input.value;
        if(inputText == ""){            
            alert("Pleas write something");
            return false
        };
        liEl.className = "list-item";
        liEl.innerText = inputText;
        liEl.appendChild(deleteBtn);
        list.appendChild(liEl);
        input.value = "";
        
        setData()
        
    })
};


export function setData() {
    localStorage.setItem("data", list.innerHTML)
};

function getData() {
    list.innerHTML = localStorage.getItem("data")
};

addTodo();
getData();
deleteTodo()