$( function() {
  $('.js-gallery-item').click(function () {
    // get the height of the device
    var top = window.scrollY || window.pageYOffset;
    // Set top of overlay venobox
    $('.vbox-overlay').css('top', top);
  });
});