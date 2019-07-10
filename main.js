

let inText=document.querySelector(".input");

let ul=document.querySelector("ul");

let clearCompleted = document.querySelector('.clear');
clearCompleted.style.display = 'none'

// Empty array
// let arr = [];

let todos=[];
let count = 0;

function enterKey(e){
    if (event.keyCode=== 13){
        if(inText.value.length>0){
         todos = todos.concat({text: inText.value, done: false});
         inText.value="";
        displayitems(); 
        }else {
            alert("todos is empty");
        }
              
    }
    
}

function displayitems(data = todos){
    ul.innerHTML = data.map((item, index) => {
        return (
        `<li>
            <input  type="checkbox" name="" id="inp" data-id=${index}  ${item.done ? "checked" : " "}>
            <span>${item.text}</span>
            <button class="btn-delete" data-id=${index}>x</button>
        </li>`
        )

    }).join(" ");   
    totalitemleft();
    clearCompleted.style.display = 'none';

    let strikethrough=document.querySelector("#inp")
    // inp.classList.add("otherclass");
    // otherclass.style.text-decoration="line-through";

}

inText.addEventListener("keyup", enterKey)

// enter key condition call by the event
function deleteitem(e){
    // id is given to the button 
    let btnId=e.target.dataset.id
    if (event.target.className==="btn-delete"){
        todos.splice(btnId,1)
        displayitems();
    }
     
}

//id is given to the checkbox
function checkboxed(e){
    if(event.target.id==="inp"){
        let inputId=e.target.dataset.id
        todos[inputId].done=!todos[inputId].done;
        displayitems();
        totalitemleft();
        clearCompleted.style.display = 'block';
    }
    
}
ul.addEventListener("click",deleteitem )
ul.addEventListener("click",checkboxed)
// 
let arr;
function completetodos(){
 let arr=todos.filter(todo => todo.done === true);
    displayitems(arr);
    // clearCompleted.style.display = 'block';
}
let complete=document.querySelector(".complete")
complete.addEventListener("click",completetodos)


let newarr;
function showTodosTask(){
    newarr=todos.filter(todo=>todo.done===false);
    displayitems(newarr);
    
}

let uncompleted=document.querySelector(".notcomplete")
uncompleted.addEventListener("click",showTodosTask)



function ShowAllTheTask(){
    displayitems(todos);
}

let allShow=document.querySelector(".allTask")
allShow.addEventListener("click", ShowAllTheTask)

    
function clearCompleteTask(e){
    todos=todos.filter(todo=>todo.done===false);
    displayitems(todos);
    clearCompleted.style.display = 'block';
    
    }
let clear=document.querySelector(".clear")
clear.addEventListener("click",clearCompleteTask)


let itemsleft=document.querySelector(".item-left");
function totalitemleft(){
   var count=todos.filter(todo=>todo.done===false).length;
   itemsleft.innerHTML= ` ${count} items left`;
}
window.addEventListener("load",totalitemleft);








   
