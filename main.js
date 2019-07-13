

let inText=document.querySelector(".input");

let ul=document.querySelector("ul");

let clearCompleted = document.querySelector('.clear');
clearCompleted.style.display = 'none'
let allbutton=document.querySelector(".all-btn");
allbutton.style.display="none"

// Empty array
// let arr = [];

let todos= localStorage.getItem('todosdata') ? JSON.parse(localStorage.getItem('todosdata')) :  [];

let count = 0;

function enterKey(e){
    if (event.keyCode=== 13){
        if(inText.value.length>0){
            todos = todos.concat({text: inText.value, done: false});
            inText.value="";
            displayitems(); 
            localStorage.setItem("todosdata", JSON.stringify(todos));
            const data=JSON.parse(localStorage.getItem("todosdata"));
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
        allbutton.style.display="block"
        
        // let strikethrough=document.querySelector("#inp")
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
            if (todos.length===0){
                allbutton.style.display="none" 
            }
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
    clearCompleted.style.display = 'block';
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
    // allbutton.style.display="none"
    }
let clear=document.querySelector(".clear")
clear.addEventListener("click",clearCompleteTask)


let itemsleft=document.querySelector(".item-left");
function totalitemleft(){
   var count=todos.filter(todo=>todo.done===false).length;
   itemsleft.innerHTML= ` ${count} items left`;
}
window.addEventListener("load",totalitemleft);








   

//
// array=[1,2,3,45];
// array.map(n=>n+2);


// array=[1,2,3,45];
// function myMap(array,cb){
//     let arraynew=[];
//     for(let i=0;i<array.length;i++){
//      arraynew.push(cb(array[i],i,array));  
//     }
//     return arraynew;
// }

// function cb(n){
//    let num=n+2
// return num;
// }

// array=[1,2,3,45];
// array.filter(n=>n>2);

// array=[1,2,3,45];
// function myFilter (array,cb){
//     let newarray=[];
//     for (let i=0;i<array.length;i++){
//         if (array[i]>2){
//             newarray.push(cb(array[i]));
            
//         }
        
//     }
//     return newarray;
// }

// function cb (n){
//     if(n>2) {
//     return n;
// }
// }
// array=[1,2,3,45,8,10];
// array.reduce((sum,num)=>sum=sum+num);


// array=[1,2,3,45,8,10];
// function myReduce(acc,cb){
//     for (i=0;i<array.length;i++){
//         cb(array[i],acc);
        
//     }
//     return acc;
// }

// var sum=0;
// function cb(acc,array){
//     sum=acc+array[i];
//     return sum;
// }

// var z=10;
// var x=5;
// var y=10;
// function add (){
//     function add1 (){
//         return x+y;
//     }
//     return x+z;
// }
// add();

// var str="Hello world";
// str.split(" ");




