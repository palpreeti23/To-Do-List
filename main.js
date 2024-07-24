const inputBtn =document.querySelector("#input");
const listContainer = document.querySelector(".list-container");
const addBtn = document.querySelector("#btn");

addBtn.addEventListener('click', addList);

function addList(){
    if(inputBtn.value === ''){
        alert("please type something fifst!!!!")
    }
    else{
       let LI = document.createElement('li');
        LI.innerHTML = inputBtn.value;
        listContainer.appendChild(LI)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        listContainer.appendChild(span)
    }
    inputBtn.value = '';
}