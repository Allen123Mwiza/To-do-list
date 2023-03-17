const todoList = document.getElementById("todoList");
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${todo}</span>
                    <button class="removeBtn">Remove</button>
                    <button class="editBtn">Edit</button>`;
    todoList.prepend(li);
  });
}

renderTodos();

function addTodo() {
  const todo = todoInput.value.trim();
  if (todo !== "") {
    todos.unshift(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderTodos();
    todoInput.value = "";
  }
}

function removeTodo() {
  const li = this.parentNode;
  const todo = li.firstChild.textContent;
  todos = todos.filter
