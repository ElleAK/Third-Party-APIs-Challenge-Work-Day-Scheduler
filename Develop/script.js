


$(document).ready(function(){


    

$("#currentDay").text(moment().format("MMMM Do YYYY, hh:mm:ss a"));


$(".time-block").each(function(){
    var hourBlock = parseInt($(this).attr("id").split("hour")[1]);
    var currentTime = moment().hours();

    if (currentTime > hourBlock) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    } else if (currentTime < hourBlock) {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
    } else {
        $(this).removeClass("future");
        $(this).addClass("present");
        $(this).removeClass("past");
    }
})

$(".saveBtn").on("click", function () {
    //get nearby values.
    
    var text = $(this).siblings(".description").val(); // taken the change from the sibling html description attribute
    var time = $(this).parent().attr("id"); // taken the change from the parent html id attribute

    //set items in local storage.
    localStorage.setItem(time, text);
})

//var saveEvent = JSON.parse(localStorage.getItem("hour"));

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));



})