var main = function() {
  $('.article').click(function() {
    $('.article').removeClass('current');
    $('.description').hide();
    $(this).addClass('current');
    $(this).children('.description').show();
  });

  $(document).keypress(function(event) {
    var currentArticle = $('.current');
    var nextArticle = currentArticle.next();
    var previousArticle = currentArticle.prev();
    var firstArticle = $('.article').first();
    var lastArticle = $('.article').last();

    if (event.which === 111) { // Unicode for key O
      currentArticle.children('.description').toggle();
    } else if (event.which === 110) { // Unicode for key N
      if (currentArticle.is(firstArticle)) {
        currentArticle.children('.description').hide();
      } else if (currentArticle.is(lastArticle)) {
        return;
      } else {
        currentArticle.children('.description').toggle();
      }
      currentArticle.removeClass('current');
      nextArticle.addClass('current');
      nextArticle.children('.description').toggle();
    } else if (event.which === 112) { // Unicode for key P
      if (currentArticle.is(firstArticle)) {
        return;
      } else if (currentArticle.is(lastArticle)) {
        currentArticle.children('.description').hide();
      } else {
        currentArticle.children('.description').toggle();
      }
      currentArticle.removeClass('current');
      previousArticle.addClass('current');
      previousArticle.children('.description').toggle();
    }
  });
};

$(document).ready(main);
// http://www.w3schools.com/jsref/event_key_keycode.asp
