$(document).ready(function(){
      $(".main").onepage_scroll({
        sectionContainer: "section",
        responsiveFallback: false,
        loop: true
      });
});

$("#down").click(function(){
    $(".main").moveDown();
});  

$(document).ready(function(){
    $('.certif__item').slick({
      dots: true,
      arrows: false,
    });
});