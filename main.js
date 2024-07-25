const inputBtn =document.querySelector(".input");
const listContainer = document.querySelector(".list-container");
const addBtn = document.querySelector(".btn");

addBtn.addEventListener('click', addList);

function addList(){
    if(inputBtn.value === ''){
        alert("please type something fifst!!!!")
    }
    else{
       let li = document.createElement('li');
        li.innerHTML = inputBtn.value;
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBtn.value = '';
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        // e.target.classList.toggal("checked");
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    }, false);

    function saveData(){
        localStorage.setItem('data', listContainer.innerHTML)
    }

    function showData(){
        listContainer.innerHTML = localStorage.getItem('data')
    }

    showData();