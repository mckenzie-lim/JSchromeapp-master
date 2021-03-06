const toDoForm = document.querySelector(".js-toDoForm"), 
    toDoInput = toDoForm.querySelector("input"), 
    toDoList = document.querySelector(".js-toDoList"); 


const TODOS_LS = "toDos"; 

let toDos = []; 

/*function filterFn(toDo) {
    return toDo.id === 1; 
} */



//JS localstorage can save only string 
function saveTodos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); 
}

function paintToDo(text) {
const li = document.createElement("li"); 
const delBtn = document.createElement("span"); 
const span = document.createElement("span"); 
const newId = toDos.length + 1; 
delBtn.innerHTML = "❌";
delBtn.addEventListener("click", deleteToDo); 
span.innerText = text; 
li.appendChild(delBtn);
li.appendChild(span); 
li.id = newId; 
toDoList.appendChild(li);  
const toDoObj = {
    text: text, 
    id: newId
    };
    toDos.push(toDoObj); 
    saveTodos(); 
}


function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value; 
    paintToDo(currentValue); 
    toDoInput.value = ""; 
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS); 
    if( loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos); 
        parsedToDos.forEach(function(toDo) {
            //console.log(toDo.text); 
            paintToDo(toDo.text); 

        })
    }
} 

function deleteToDo(event) {
    /*console.dir(event.target); 
    console.log(event.target.parentNode); */
    const btn = event.target; 
    const li = btn.parentNode; 
    toDoList.removeChild(li); 
    //console.log(toDo.id, li.id); li.id is String 
    const cleanToDos = toDos.filter(function(toDo) {
        return toDo.id !== parseInt(li.id); 
    });
    //console.log(cleanToDos);  
    toDos = cleanToDos; 
    saveTodos(); 
    } 

    
function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}
init(); 