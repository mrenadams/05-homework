$(document).ready(function () {
    //console.log(moment().format('LL'))
    document.getElementById("currentDay").innerHTML = moment().format('LL');
});

//store tasks in local storage

var taskInput = document.querySelector("#task");
var saveButton = document.querySelectorAll(".btn-primary");


saveButton.forEach(btnprimary => {

    btnprimary.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("button works")

        var savedTask = document.querySelector("#task").value;
        console.log(this)
        console.log(savedTask)
        localStorage.setItem("task", savedTask);

    })


});

