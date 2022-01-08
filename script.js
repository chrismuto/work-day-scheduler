var time = moment();
var hour = time.format("k");
var saveBtn = $(".saveBtn");
var parentEl = $(".saveBtn").parent();
var currentDay = $("#currentDay");
var hour9 = $("#hour-9");
var hour10 = $("#hour-10");
var hour11 = $("#hour-11");
var hour12 = $("#hour-12");
var hour13 = $("#hour-13");
var hour14 = $("#hour-14");
var hour15 = $("#hour-15");
var hour16 = $("#hour-16");
var hour17 = $("#hour-17");
var hourArray = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];

bigTimer();

onPageLoad();

function bigTimer() {
    var date = time.format("dddd, MMMM Do");
    currentDay.text(date);
}

function onPageLoad() {
    for (i = 0; i < hourArray.length; i++) {
        //gets the id tag from the element
        hourId = hourArray[i].attr("id");
        //removes the non-numerical part of the id name
        hourTest = hourId.replace("hour-", "");
         //gets the id tag from the element
         hourId = hourArray[i].attr("id");
         //pulls values from local storage
        hourArray[i].children().eq(1).text(localStorage.getItem(hourId));
        //parseInt turns the time and the remaining Id numerical for less than/equal tests
        if (parseInt(hourTest) === parseInt(hour)) {
            hourArray[i].addClass("present");
            // console.log(parseInt(hourArray[i]));
        } else if (parseInt(hourTest) < parseInt(hour)) {
            hourArray[i].addClass("past");
        } else {
            hourArray[i].addClass("future");
        }
    }

}

//saves task to local storage
saveBtn.on("click", function() {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
    console.log(time, text);
})