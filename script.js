//use moment.js to display the time and use setInterval to keep up to date.
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
    console.log(currentHour);

    var dateRep = {
        "9": "9a",
        "10": "10a",
        "11": "11a",
        "12": "12a",
        "13": "1p",
        "14": "2p",
        "15": "3p",
        "16": "4p",
        "17": "5p"
    };
        //function to check the time of the event and compare to current time
            if (currentHour > dateRep.values) { 
                $(".wrapper").attr("style", "background-color: blue");
            }
            if (currentHour < dateRep.values) { 
                $(".wrapper").attr("style", "background-color: yellow");
            }
            if (currentHour == dateRep.values) { 
                $(".wrapper").attr("style", "background-color: red");
            }
        };
      
realTime();


//Save function of save button
$(".save").on("click", function (event) {

    console.log($(this).siblings(".description").val())

    var savedTask = $(this).siblings(".description").val();
    //console.log(this)
    console.log(savedTask)
    localStorage.setItem("description", savedTask);

    event.preventDefault();
    
});
