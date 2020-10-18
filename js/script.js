$(document).ready(function () {
    
    //closing menu on click outside menu links
    $(window).click(closeMenu);
    $('.mega-menu--nav,#menu-toggle img').click(function(event){
        event.stopPropagation();
    });
    $("#menu-toggle img").click(function () {
        $(".mega-menu").toggle('show');
        $("html").toggleClass('scroll');
        $(".sidebar-logo").toggleClass('invisible');
        if ($("#menu-toggle img").attr('src') == 'images/icons/menu.png')
            $("#menu-toggle img").attr('src', 'images/icons/close-button.png');
        else
            $("#menu-toggle img").attr('src', 'images/icons/menu.png');

        if ($('html').hasClass('scroll'))
            menuInitialState();
    });
    $(".mega-menu--nav li").mouseover(function () {
        $(".mega-menu--list").hide();
        var menuID = $(this).attr('id');
        $(".mega-menu .mega-menu--nav li#" + menuID + " .mega-menu--list").show();
    });

    //map city selection
    $('.offices li').click(function () {
        $('.offices li').removeClass('selected');
        $(this).addClass('selected');
        var cityID = $(this).attr('for');
        var region = $(this).attr('data-region');

        $('.map-pointer').removeClass('selected');
        $('.map-pointer .glowing').removeClass('glow-pointer');
        $(".map-pointer[data-region='" + region + "']#" + cityID + "").addClass('selected');
        $(".map-pointer[data-region='" + region + "']#" + cityID + " .glowing").addClass('glow-pointer');
    })

    // Search
    $('.search-icon img').click(function () {
        $(".search-input input").toggle('show');
        if ($(".search-icon img").attr('src') == 'images/icons/search.png')
            $(".search-icon img").attr('src', 'images/icons/close-search.png');
        else
            $(".search-icon img").attr('src', 'images/icons/search.png');
    })
    // $(document).click(function() {
    //     $(".search-input input").hide();
    //     if ($(".search-icon img").attr('src') == 'images/icons/search.png')
    //         $(".search-icon img").attr('src', 'images/icons/close-search.png');
    //     else
    //         $(".search-icon img").attr('src', 'images/icons/search.png');
    // });
    // $(".search-input input").click(function(e) {
    //     e.stopPropagation();
    //     return false;
    // });
});

function menuInitialState() {
    $('.mega-menu .mega-menu--nav .item.item:first-child').removeClass('hovered')
    $(".mega-menu .mega-menu--nav li .mega-menu--list").hide();
}
function closeMenu() {
    $(".mega-menu").hide('slow');
    $("html").removeClass('scroll');
    $(".sidebar-logo").removeClass('invisible');
    $("#menu-toggle img").attr('src', 'images/icons/menu.png');
    menuInitialState();
}