$(document).ready(function(){
    $(".sidenav").sidenav();
    $(".materialboxed").materialbox();
    $(".parallax").parallax();
    $(".tabs").tabs();
    $(".scrollspy").scrollSpy();
    $(".datepicker").datepicker({
      disableWeekends: true,
    });
    $(".tooltipped").tooltip();

    $('.slider').slider({
        // height
        height: 500,
        full_width: true,
    });
    // current link
    $('ul.right li').on('click', function(){
        var clicked = $(this);
        $('ul.right li').each(function(){
            if($(this).hasClass('active')){
                $(this).removeClass('active');
            }
        });
        $(this).addClass('active');
    });
    $('.modal').modal();
});