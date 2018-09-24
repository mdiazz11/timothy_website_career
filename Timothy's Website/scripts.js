// Sticky Header
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".top-nav").addClass("bg-light");
    } else {
        $(".top-nav").removeClass("bg-light");
    }
});

// Year for copy content
$(function(){
    var theYear = new Date().getFullYear();
    $('#year').html(theYear);
});
