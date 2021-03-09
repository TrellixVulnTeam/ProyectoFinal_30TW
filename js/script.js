$(window).scroll(function() {
    if ($("#menu").offset().top > 100) {
        $("#menu").addClass("bg-dark");
    } else {
        $("#menu").removeClass("bg-dark");
    }
});

$(window).scroll(function() {
    if ($("#menu").offset().top > 100) {
        $("#submenu1").addClass("bg-dark");
    } else {
        $("#submenu1").removeClass("bg-dark");
    }
});

$(window).scroll(function() {
    if ($("#menu").offset().top > 100) {
        $("#submenu2").addClass("bg-dark");
    } else {
        $("#submenu2").removeClass("bg-dark");
    }
});

$(window).scroll(function() {
    if ($("#menu").offset().top > 100) {
        $(".activo").addClass("activo2");
    } else {
        $(".activo").removeClass("activo2");
    }
});

$(document).ready(function() {
    $('#nav-icon').click(function() {
        $(this).toggleClass('open');
    });
});