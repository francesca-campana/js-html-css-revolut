$(document).ready(function () {
    $('.with-dropdown').mouseenter(
      function (){

        $(this).children('.dropdown').addClass('active');


    });
    $('.with-dropdown').mouseleave(
      function (){
        $('.dropdown').removeClass('active');
        $(this).children('with-dropdown').addClass('active');

    });

    $('.with-dropdown').click(
      function (){
        $(this).children('.dropdown').toggleClass('active');
      }
    );

    $('.btn').click(
      function (){
        $('.btn > .down').toggleClass('off');
        $('.btn > .up').toggleClass('off')



      }
    );



  }
);
