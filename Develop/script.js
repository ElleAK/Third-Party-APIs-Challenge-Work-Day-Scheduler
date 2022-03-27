


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

})