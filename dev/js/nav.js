$( function() {
  $('.js-nav-hamburger').click(function () {
    $('.js-nav-items').slideToggle(150);
  });
  $('.js-nav-dropdown').click(function () {
    $('.js-nav-sub-items').slideToggle(150);
  });
});
