//selectors 
const todo = document.querySelector('.todoinput');
const addtodo = document.querySelector('.tosubmit');
const todoUl = document.querySelector('.todo-list');
//eventlistenrs 
addtodo.addEventListener("click" , todofun);
todoUl.addEventListener("click" , checkDelete);


//functions
function todofun(event){
    console.log("buttonclicked");
    //prevent form from submitting
     event.preventDefault();
     // creating div
     const todoDiv = document.createElement("div");
      todoDiv.classList.add("newtodo-div");
     // creating li
     const newTodo = document.createElement('li');
       newTodo.innerText = todo.value;
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
     todo.value = "";
}
 // checkDelete function
 function checkDelete(e){
     const item = e.target;
     if(item.classList[0]=== 'trashbtn') {
        const  delcheck = item.parentElement;
        delcheck.classList.add("fall");
        delcheck.addEventListener("transitionend" , function(){
           delcheck.remove();
        })
        
     }
     if (item.classList[0]==="completebtn") {
         const delcheck =item.parentElement;
         delcheck.classList.toggle("completed");

     }
 }


