$(document).ready(function() {
    //console.log(moment().format('LL'))
    document.getElementById("currentDay").innerHTML = moment().format('LL');
    });

//store tasks in local storage

var taskInput = document.querySelector("#task");
var saveButton = document.querySelector("#save-btn");


saveButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("button works")
  
    var savedTask = document.querySelector("#task").value;
    
    localStorage.setItem("task", savedTask);
    
  });

  