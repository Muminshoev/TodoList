import { setData } from "./addTodo.js";

export function deleteTodo() {
    let deleteBtn = document.querySelectorAll(".delete");
    deleteBtn.forEach((i) => {
        i.addEventListener("click", () =>{
            i.closest("li").remove();
            setData()
        });
        
    })
}

