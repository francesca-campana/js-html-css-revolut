$(document).ready(function () {
  $('.with-dropdown').mouseenter(
    function (){
      $(this).children('.dropdown').addClass('active');

  });

  $('.with-dropdown').click(
    function (){
      $(this).children('.dropdown').toggleClass('active');
    }
  );

  }
);
