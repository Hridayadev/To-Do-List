let inputHo = document.querySelector(".inputArea");
var inputValue = inputHo.value;
document.addEventListener("keypress", function(event) {
    if (event.key == "Enter") {
        let inputHo = document.querySelector(".inputArea");
        var inputValue = inputHo.value;
        if (inputValue.trim() === "") {
            return;
        } else {
            addNew();
        }
    }
});


document.querySelector(".addBtn").addEventListener("click", function(event){
    if(event.target==this){
        let inputHo = document.querySelector(".inputArea");
        var inputValue = inputHo.value;
        if (inputValue.trim() === "") {
            return;
        } else {
            addNew();
        }
    }
});

function addNew(){
    let inputHo = document.querySelector(".inputArea");
    var inputValue = inputHo.value;
    inputHo.value="";
    
    var childNew = document.querySelector(".listAll").appendChild(document.createElement("li"));
    childNew.setAttribute("class","list");

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "checkBox";
    childNew.appendChild(checkBox);

    childNew.innerHTML += inputValue;

    childNew.addEventListener("click", function() {
        checkBox.checked = !checkBox.checked;
        if (checkBox.checked) {
            childNew.setAttribute("id", "la");
        } else {
            childNew.removeAttribute("id");
        }
    });

    let button = document.createElement("button");
    button.className = "dltBtn"; 
    button.textContent = "Delete"; 
    button.addEventListener("click", function() {
        childNew.remove(); 
    });
    childNew.appendChild(button);   
}

document.querySelector(".clearAll").addEventListener("click", clearAll);
function clearAll(){
    let listAll = document.querySelectorAll("li");
    for(let i=0;i<=15;i++){
        listAll[i].remove();
    }
}
