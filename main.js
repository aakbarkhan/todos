

let inText=document.querySelector(".input");

let ul=document.querySelector("ul");

// Empty array
// let arr = [];
//
let todos=[];

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
    }
    
}
ul.addEventListener("click",deleteitem )
ul.addEventListener("click",checkboxed)
// 
let arr;
function completetodos(){
 let arr=todos.filter(todo => todo.done === true);
    displayitems(arr);
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
    
    }
let clear=document.querySelector(".clear")
clear.addEventListener("click",clearCompleteTask)





   
