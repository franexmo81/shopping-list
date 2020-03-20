var input = document.getElementById("input");
var button = document.getElementById("button");
var ul = document.getElementsByTagName("ul")[0];
var deleteBtn = document.getElementsByClassName("delete-btn");
var li = document.getElementsByTagName ("li");

var itemBtn;
for (var i = 0, tot = deleteBtn.length; i < tot; i++) {
  itemBtn = deleteBtn[i];
  addDeleteEvent(itemBtn);
}

var itemLi;
for (var j = 0, liTot = li.length; j < liTot; j++) {
  itemLi = li[j];
  addDoneEvent(itemLi);
}

function addDeleteEvent(btn){
  btn.addEventListener("click", deleteEvent);
}

function addDoneEvent(li){
  li.addEventListener("click", doneEvent);
}

function deleteEvent(){
  this.parentElement.classList.add("deleted");
  var width = this.parentElement.offsetWidth;
  this.parentElement.firstChild.style.transform = "translateX("+width+"px)";
  setTimeout(function(){document.getElementsByClassName("deleted")[0].remove();}, 1000);
}

function doneEvent(){
  this.classList.toggle("done");
}

function checkIfItem(){
  if (input.value.length > 0) {
    return true;
  } else {
    return false;
  }
}

function createListElement(){
  if (checkIfItem()) {
    var li = document.createElement("li");
    var span = document.createElement("span");
    var button = document.createElement("button");
    span.appendChild(document.createTextNode(input.value));
    li.addEventListener("click", doneEvent);
    button.addEventListener("click", deleteEvent);
    button.classList.add("btn", "delete-btn");
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    input.value = "";
  } else {
    alertNoItem();
  }
}

function addToListAfterClick(){
    createListElement();
}

function addToListAfterEnter(event){
  if (event.keyCode === 13) {
    createListElement();
  }
}

function alertNoItem(){
  alert("There was nothing to add");
}

button.addEventListener("click", addToListAfterClick)

input.addEventListener("keypress", addToListAfterEnter)
