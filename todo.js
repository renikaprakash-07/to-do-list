const inputbox=document.querySelector('.box');
const containerlist = document.querySelector('.list');
function addTask(){
  if(inputbox.value==''){
    alert("add a task");
  }else{
    let li = document.createElement('li');
    li.innerHTML=inputbox.value;
    containerlist.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);

  }
  inputbox.value='';
  saveData();

}
containerlist.addEventListener("click",function(e){
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if(e.target.tagName ==="SPAN"){
    e.target.parentElement.remove();
    saveData();

  }
},false);

function saveData(){
  localStorage.setItem("data",containerlist.innerHTML);
}
function getData(){
  containerlist.innerHTML = localStorage.getItem("data");
}
getData();
