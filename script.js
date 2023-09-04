// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  $('.saveBtn').click(function(){
    localStorage.setItem(("#" + this.parentElement.id), this.parentElement.children[1].value)
  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  function populateDay () {
    for (let i = 9; i < 18; i++) {
      var cycle = "#hour-" + i;
      if (localStorage.getItem(cycle) != null) {
        $(cycle).children('textarea').val(localStorage.getItem(cycle));
      }

      currentHour = dayjs().format('HH');

      if (currentHour > i) {
        $(cycle).addClass("past");
      } else if (currentHour == i) {
        $(cycle).addClass("present");
      } else if (currentHour < i) {
        $(cycle).addClass("future");
      }
    };
  }
  

  // TODO: Add code to display the current date in the header of the page.
  function runTimer() {
    var currentTime = dayjs();
    $('#currentDay').text(currentTime.format('MMM D, YYYY HH:mm:ss'))
  }

  setInterval(runTimer, 1000);
  populateDay();
});


