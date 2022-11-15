// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {

  $('.saveBtn').on('click', function () {
    console.log('this');
  })
  // current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY hh:mm:ss a'));

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //



  
  //added a listener for each save button click event for each time along with setting 
  //and getting the local attribute
  $('#9am-saveBtn').on('click', function () {
    var textInput9 = $(this).siblings(".description").val();
    localStorage.setItem('9am-task', JSON.stringify(textInput9));
    $('#9am-task').text(localStorage.getItem('9am-task'));
  });

  $('#10am-saveBtn').on('click', function () {
    var textInput10 = $(this).siblings(".description").val();
    localStorage.setItem('10am-task', JSON.stringify(textInput10));
    $('#10am-task').text(localStorage.getItem('10am-task'));
  });

  $('#11am-saveBtn').on('click', function () {
    var textInput11 = $(this).siblings(".description").val();
    localStorage.setItem('11am-task', JSON.stringify(textInput11));
    $('#11am-task').text(localStorage.getItem('11am-task'));
  });

  $('#12pm-saveBtn').on('click', function () {
    var textInput12 = $(this).siblings(".description").val();
    localStorage.setItem('12pm-task', JSON.stringify(textInput12));
    $('#12pm-task').text(localStorage.getItem('12pm-task'));
  });

  $('#1pm-saveBtn').on('click', function () {
    var textInput13 = $(this).siblings(".description").val();
    localStorage.setItem('1pm-task', JSON.stringify(textInput13));
    $('#1pm-task').text(localStorage.getItem('1pm-task'));
  });

  $('#2pm-saveBtn').on('click', function () {
    var textInput14 = $(this).siblings(".description").val();
    localStorage.setItem('2pm-task', JSON.stringify(textInput14));
    $('#2pm-task').text(localStorage.getItem('2pm-task'));
  });

  $('#3pm-saveBtn').on('click', function () {
    var textInput15 = $(this).siblings(".description").val();
    localStorage.setItem('3pm-task', JSON.stringify(textInput15));
    $('#3pm-task').text(localStorage.getItem('3pm-task'));
  });

  $('#4pm-saveBtn').on('click', function () {
    var textInput16 = $(this).siblings(".description").val();
    localStorage.setItem('4pm-task', JSON.stringify(textInput16));
    $('#4pm-task').text(localStorage.getItem('4pm-task'));
  });

  $('#5pm-saveBtn').on('click', function () {
    var textInput17 = $(this).siblings(".description").val();
    localStorage.setItem('5pm-task', JSON.stringify(textInput17));
    $('#5pm-task').text(localStorage.getItem('5pm-task'));
  });




  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  function hourTracker() {

    var currentHour = dayjs().hour()// gets current hour
    console.log(currentHour)
    // loop over time blocks
    $(".time-block").each(function () {
      //getting the number from the id attribute to compare to current hour
      var blockHour = parseInt($(this).attr("id").split("hour")[1])
      console.log(blockHour)

      //check if we've moved past this time, click into css/html given classes of past, present, or future
      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      }
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }

    })
  }
  hourTracker(); //re-run function
}



);


