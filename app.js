var task=document.querySelector(".t1");
var addbtn=document.querySelector(".b1");
var clear=document.querySelector(".b2");
var filter=document.querySelector(".t2");
var form=document.querySelector("#f");
var taskList=document.querySelector(".task");
var page=document.querySelector(".d1");
form.addEventListener("submit",addTask);
page.addEventListener("click",deleteTask);
clear.addEventListener("click",clearAll);
filter.addEventListener("keyup",filterTasks);
document.addEventListener("DOMContentLoaded",getTask);
function getTask(e){
var tasks;
if(localStorage.getItem("tasks")===null){
    tasks=[];
}
else{
 tasks=JSON.parse(localStorage.getItem("tasks"));}
tasks.forEach(function(task){

   var li=document.createElement("li");
    li.className="l1";
    var link=document.createElement("a");
    link.className="del";
    link.setAttribute("href","#");
    link.innerHTML="delete"; 
    li.appendChild(link);
    li.appendChild(document.createTextNode(task));
    taskList.appendChild(li);


});
}

function addTask(e){
    if(task.value===""){
        alert("Please add a task");
    }
    else{
        
li=document.createElement("li");
li.className="l1";
var link=document.createElement("a");
link.className="del";
link.setAttribute("href","#");
link.innerHTML="delete"; 
li.appendChild(link);
li.appendChild(document.createTextNode(task.value));
taskList.appendChild(li);

storeTask(task.value);
    }
   
    e.preventDefault();
}
function storeTask(task){
var tasks;
if(localStorage.getItem("tasks")===null){
    tasks=[];
}
else{
    tasks=JSON.parse(localStorage.getItem("tasks"));
}
tasks.push(task);
localStorage.setItem("tasks",JSON.stringify(tasks));

}


function deleteTask(e){
 if(e.target.className==="del"){
    deleteFromLocalStorage(e.target.parentElement);    
 e.target.parentElement.remove();
 }
}

function deleteFromLocalStorage(taskItem){
    var tasks;
if(localStorage.getItem("tasks")===null){
    tasks=[];
}
else{
    tasks=JSON.parse(localStorage.getItem("tasks"));
    
}
tasks.forEach(function(t,index){
if(taskItem.lastChild.textContent===t){
    tasks.splice(index,1);
}


});
localStorage.setItem("tasks",JSON.stringify(tasks));
}


function clearAll(e){
    if(confirm("Are you sure")){
while(taskList.firstChild){
taskList.removeChild(taskList.firstChild);

}
localStorage.clear();
    }
}
function filterTasks(e){
   
  document.querySelectorAll("li").forEach(function(item)
  {
    console.log(item);
    var text=e.target.value.toLowerCase();
       var t=item.textContent;
       if(t.toLowerCase().indexOf(text)!=-1){
           item.style.display="block";
       }
       else{
           item.style.display="none";
       }
      
  });
    
}