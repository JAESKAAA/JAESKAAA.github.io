const toDoListForm = document.querySelector(".js-toDoListForm"),
 toDoInput = toDoListForm.querySelector("input"),
 toDoList = document.querySelector(".toDoList");

const TODOS_LS = "toDos"

const toDos = [];


function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "X";
    const span = document.createElement("span");
    span.innerText =text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: toDos.length + 1
    };
    toDos.push(toDoObj);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";

}

function loadToDoList(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {

    }
}

 function init(){
    loadToDoList();
    toDoListForm.addEventListener("submit", handleSubmit);
 }

 init();