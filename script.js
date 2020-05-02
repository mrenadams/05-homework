//use moment.js to display the time and use setInterval to keep up to date.
//will use it later to change the time slot css
function showTime() {
    //console.log(moment().format('MMMM Do YYYY, h:mm a'))

    setInterval(function () {
        $("#currentDay").html(moment().format('MMMM Do YYYY, h:mm a'));
    }, 1000);
};
showTime();

//make hours into integers to allow for color change based on current hour
function realTime() {
    var currentHour = parseInt(moment().hours());
    //console.log(currentHour)
}
realTime();




$(".save").on("click", function (event) {
    console.log($(this).siblings(".description").val())
});


/*saveButton.forEach(btnprimary => {

    btnprimary.addEventListener("click", function (event) {
        event.preventDefault();

        console.log("button works")

        var savedTask = document.querySelector("#task").value;
        console.log(this)
        console.log(savedTask)
        localStorage.setItem("task", savedTask);

    })


});*/

