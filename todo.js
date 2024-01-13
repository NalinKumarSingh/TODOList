let todolist = [];
let inDate = [];
display();

function addtask(){
    let inputText = document.querySelector('#inp-text');
    let newtodo = inputText.value;
    todolist.push(newtodo);
    let inputDate = document.querySelector('#inp-date');
    let dt = inputDate.value;
    inDate.push(dt);
    display();
    inputText.value = '';
}
function display(){
    let taskcontainer = document.querySelector('#tasks');
    let newhtml = '';
    for(let i = 0; i<todolist.length; i++){
        newhtml += `<div class='maindiv'>
        <span class='ls'>${todolist[i]}</span>
        <span class='ls'>${inDate[i]}</span>
        <button class='btn' onclick='todolist.splice(${i},1);inDate.splice(${i},1); display()'>Delete</button>
        </div>
        `
    }
    taskcontainer.innerHTML = newhtml;
}