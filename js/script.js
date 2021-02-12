$(window).scroll(function(){
    if ($("#menu").offset().top > 500){
        $("#menu").addClass("bg-dark");
    }else{
        $("#menu").removeClass("bg-dark");
    }
    });

    $(window).scroll(function(){
    if ($("#menu").offset().top > 500){
        $("#submenu1").addClass("bg-dark");
    }else{
        $("#submenu1").removeClass("bg-dark");
    }
    });

    $(window).scroll(function(){
    if ($("#menu").offset().top > 500){
        $("#submenu2").addClass("bg-dark");
    }else{
        $("#submenu2").removeClass("bg-dark");
    }
    });

    $(window).scroll(function(){
        if ($("#menu").offset().top > 500){
            $(".activo").addClass("activo2");
        }else{
            $(".activo").removeClass("activo2");
        }
        });

    