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


const buttons = document.querySelectorAll('.imagen');
const lightbox = document.querySelector('.lightbox');
const overlayimg = document.querySelector('.lightbox-inner img');


function open(e){
    lightbox.classList.add('open');
    const src = e.currentTarget.querySelector('img').src;
    overlayimg.src = src;
}

function close(){
    lightbox.classList.remove('open');
}

    buttons.forEach(button => button.addEventListener('click', open));
    lightbox.addEventListener('click',close);