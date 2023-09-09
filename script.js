
$(function () {

  $('.saveBtn').click(function(){
    localStorage.setItem(("#" + this.parentElement.id), this.parentElement.children[1].value)
  });

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
  
  function runTimer() {
    var currentTime = dayjs();
    $('#currentDay').text(currentTime.format('MMM D, YYYY HH:mm:ss'))
  }

  runTimer();
  setInterval(runTimer, 1000);
  
  populateDay();
});


