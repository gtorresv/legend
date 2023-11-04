$(function () {
  // Adds a listener for click events on the save button. 
  var saveButton = $('.saveBtn');

  saveButton.on('click', function () {
    var textArea = $(this).siblings('textarea').val()
    console.log(textArea);
    var parent = $(this).parent().attr('id')
    console.log(parent);
    localStorage.setItem(parent, textArea);
  });
  
  // Applies the past, present, or future class to each time block
  var timeBlock = $('.time-block');
  var currentHour = dayjs().hour();
  timeBlock.each(function () {
    var timeBlockId = $(this).attr('id').split('-')[1]
    console.log(timeBlockId);
    if (currentHour > timeBlockId) {
      $(this).addClass('past');
    } 
    if (currentHour < timeBlockId) {
      $(this).addClass('future');
    }
    if (currentHour == timeBlockId) {
      $(this).addClass('present');
    }
  });

  // Gets user input that was saved in localStorage and sets the values of the corresponding textarea elements.
  $('#hour-9').children('textarea').val(localStorage.getItem('hour-9'));
  $('#hour-10').children('textarea').val(localStorage.getItem('hour-10'));
  $('#hour-11').children('textarea').val(localStorage.getItem('hour-11'));
  $('#hour-12').children('textarea').val(localStorage.getItem('hour-12'));
  $('#hour-13').children('textarea').val(localStorage.getItem('hour-13'));
  $('#hour-14').children('textarea').val(localStorage.getItem('hour-14'));
  $('#hour-15').children('textarea').val(localStorage.getItem('hour-15'));
  $('#hour-16').children('textarea').val(localStorage.getItem('hour-16'));
  $('#hour-17').children('textarea').val(localStorage.getItem('hour-17'));

  // Displays the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D'))
});
