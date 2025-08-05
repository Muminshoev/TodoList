function addTodo() {
    const list = document.getElementById("list");

}

function createTodo(todoText) {
    const listItem = document.createElement("li");
    listItem.className = "list-item";
    listItem.innerText = todoText;
};