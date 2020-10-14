$(document).ready(function(){
    $(".mega-menu--nav li:first-child").mouseover(function() { 
        $(".mega-menu--list").hide();
        $(".mega-menu .mega-menu--nav li:first-child .mega-menu--list").show();
    });
    $(".mega-menu--nav li:nth-child(2)").mouseover(function() {
        $(".mega-menu--list").hide();
        $(".mega-menu .mega-menu--nav li:nth-child(2) .mega-menu--list").show();
    });
    $(".mega-menu--nav li:nth-child(3)").mouseover(function() {
        $(".mega-menu--list").hide();
        $(".mega-menu .mega-menu--nav li:nth-child(3) .mega-menu--list").show();
    });
    $(".mega-menu--nav li:nth-child(4)").mouseover(function() {
        $(".mega-menu--list").hide();
        $(".mega-menu .mega-menu--nav li:nth-child(4) .mega-menu--list").show();
    });
    $(".mega-menu--nav li:nth-child(5)").mouseover(function() {
        $(".mega-menu--list").hide();
        $(".mega-menu .mega-menu--nav li:nth-child(5) .mega-menu--list").show();
    });
    $(".mega-menu--nav li:nth-child(6)").mouseover(function() {
        $(".mega-menu--list").hide();
        $(".mega-menu .mega-menu--nav li:nth-child(6) .mega-menu--list").show();
    });
    $(".mega-menu--nav li").mouseout(function() {
        $(".mega-menu--list").hide();
    });
});