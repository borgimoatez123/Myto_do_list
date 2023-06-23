const inputbox =document.getElementById('input-box');
const tasks=document.getElementById("tasks");
function addtask(){
    if (inputbox===''){
        alert("you must tayping a task to add "); 
    }
    else{
        let li =document.createElement('li');
        li.innerHTML=inputbox.value;
        tasks.appendChild(li);
        let sup =document.createElement('span');
        sup.innerHTML='\u00d7';
        li.appendChild(sup);
    }
    inputbox.value='';
    savedata();
}
tasks.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
},false);
function savedata(){
    localStorage.setItem("data",tasks.innerHTML);
}
function showtask(){
    tasks.innerHTML=localStorage.getItem("data");

}
showtask();