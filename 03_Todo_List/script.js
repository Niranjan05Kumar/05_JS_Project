const todoInput = document.querySelector("#todo-input");
const todoListUL = document.querySelector("#todo-list");
const todoForm = document.querySelector("form");

let allTodos = [];
var todoLI;

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodo();
});

function addTodo(){
    const todoText = todoInput.value.trim();
    if(todoText.length > 0){
        allTodos.push(todoText);
        updateTodoList();
        todoInput.value = ""
    }
}
function updateTodoList(){
    todoListUL.innerHTML = "";
    allTodos.forEach((todo, todoIndex)=>{
        todoItem = createTodoItem(todo, todoIndex);
        todoListUL.append(todoItem);
    })
}
function createTodoItem(todo, todoIndex){
    const todoId = "todo-"+todoIndex;
    todoLI = document.createElement("li");
    todoLI.className = "todo"
    todoLI.innerHTML = `
        <input type="checkbox" id="${todoId}">
            <label for="${todoId}" class="custom-checkbox">
                <i class="ri-check-fill"></i>
            </label>
            <label for="${todoId}" class="todo-text">
                ${todo}
            </label>
            <button class="del-btn">
                <i class="ri-delete-bin-7-line"></i>
            </button>
    `
    return todoLI
}