//selectors 
const todo = document.querySelector('.todoinput');
const addtodo = document.querySelector('.tosubmit');
const todoUl = document.querySelector('.todo-list');
const todofilter = document.querySelector('.todo-filter');
//eventlistenrs 

addtodo.addEventListener("click" , todofun);
todoUl.addEventListener("click" , checkDelete);
todofilter.addEventListener("click", filtertodo);
document.addEventListener('DOMContentLoaded',getTodos)


//functions
function todofun(event){
    // console.log("buttonclicked");
    //prevent form from submitting
     event.preventDefault();
     // creating div
     const todoDiv = document.createElement("div");
      todoDiv.classList.add("newtodoDiv");
     // creating li
     const newTodo = document.createElement('li');
       newTodo.innerText = todo.value;
      newTodo.classList.add("new-todo");
      todoDiv.appendChild(newTodo);
      SavetoLocalStorage(todo.value);
     //creating  tick buttons
     const complete =document.createElement("button");
     complete.innerHTML = '<i class="fa-solid fa-check"></i>';
     complete.classList.add("completebtn");
     todoDiv.appendChild(complete);
      // creating delete button
     const remove = document.createElement("button");
     remove.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
     remove.classList.add("trashbtn");
     todoDiv.appendChild(remove);
     todoUl.appendChild(todoDiv);
     todo.value = "";
}
 // checkDelete function
 function checkDelete(e){
     const item = e.target;
     if(item.classList[0]=== 'trashbtn') {
        const  delcheck = item.parentElement;
        delcheck.classList.add("fall");
        removeLocalTodos(delcheck);
        delcheck.addEventListener("transitionend" , function(){
           delcheck.remove();
        })
       
     }
     if (item.classList[0]==="completebtn") {
         const delcheck =item.parentElement;
         delcheck.classList.toggle("completed");

     }
 }
 function filtertodo(e){
    const todos = document.querySelectorAll('.newtodoDiv');
        // console.log(todos);
    todos.forEach(
        function(delcheck)
     {
        // console.log("function worked");

        switch(e.target.value){
            case "All":
                delcheck.style.display = "flex";
                break;
            case "Completed" :  
                if (delcheck.classList.contains("completed")) {
                    delcheck.style.display = "flex";
                }
                else {
                    delcheck.style.display = "none";
                }

                break;
            case "UnCompleted" :
                if (!delcheck.classList.contains("completed")) {
                    delcheck.style.display = "flex";
                }
                else {
                    delcheck.style.display = "none";
                }
                break;
        }


     })

    }
    function SavetoLocalStorage(todo) {
        //checking the localstorage
        let todos;
        if(localStorage.getItem("todos") === null) {
            todos=[];
        }
        else {
            todos = JSON.parse(localStorage.getItem("todos"));
        }
       todos.push(todo);
       localStorage.setItem("todos" ,JSON.stringify(todos));
    }
        
 
  function getTodos(){
    let todos;
        if(localStorage.getItem("todos") === null) {
            todos=[];
        }
        else {
            todos = JSON.parse(localStorage.getItem("todos"));
        }
        todos.forEach(function(todovar){
             // creating div
     const todoDiv = document.createElement("div");
     todoDiv.classList.add("newtodoDiv");
    // creating li
    const newTodo = document.createElement('li');
      newTodo.innerText = todovar;
     newTodo.classList.add("new-todo");
     todoDiv.appendChild(newTodo);
    //creating  tick buttons
    const complete =document.createElement("button");
    complete.innerHTML = '<i class="fa-solid fa-check"></i>';
    complete.classList.add("completebtn");
    todoDiv.appendChild(complete);
     // creating delete button
    const remove = document.createElement("button");
    remove.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    remove.classList.add("trashbtn");
    todoDiv.appendChild(remove);
    todoUl.appendChild(todoDiv);
        })
  }


  function removeLocalTodos(todoR){
    //check ---- hey do i already have thing in there?
    let todos;
    if(localStorage.getItem('todos')===null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    const todoIndex = todoR.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem("todos",JSON.stringify(todos));

}
