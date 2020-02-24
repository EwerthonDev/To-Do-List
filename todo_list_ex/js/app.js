var listElement = document.querySelector("div#app ul");
var inputElement = document.querySelector("div#app input");
var buttonElement = document.querySelector("div#app button");



var todo = JSON.parse(localStorage.getItem('lista_todos')) || [];


function renderTodos() {
    listElement.innerHTML = '';
    for (todos of todo) {
        var todoList = document.createElement('li');
        var todoText = document.createTextNode(todos);
        var todoListErase = document.createElement('button');
        var todoListEraseText = document.createTextNode("Excluir");
        todoListErase.setAttribute("id", "erase");
        todoListErase.setAttribute("class", "btn btn-dark btn-sm");
        var pos = todo.indexOf(todos);
        todoListErase.setAttribute("onclick", `removeList(${pos})`);
        todoList.appendChild(todoText);

        listElement.appendChild(todoList);


        todoListErase.appendChild(todoListEraseText);
        listElement.appendChild(todoListErase);
        todoList.appendChild(todoListErase);
    }
}
renderTodos();


function adicionar_todo() {
    var conteudo = inputElement.value;
    if (!conteudo) {
        alert("Preencha com uma tarefa!");
    } else {
        todo.push(conteudo);
        inputElement.value = '';
        renderTodos();
        saveToStorage();
    }
}
function removeList(pos) {
    todo.splice(pos, 1);
    renderTodos();
    saveToStorage();
};

function saveToStorage() {
    localStorage.setItem('lista_todos', JSON.stringify(todo));
}