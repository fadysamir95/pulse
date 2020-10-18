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
    $(document).on('keydown', function(event) {
        if (event.key == "Escape") {
            $(".mega-menu").hide();
            $("#menu-toggle img").attr('src', 'images/icons/menu.png');
            $(".sidebar-logo").addClass('invisible');
        }
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
    $(document).click(function() {
        $(".search-input input").hide();
        $(".search-icon img").attr('src', 'images/icons/search.png');
    });
    $(".search-input input, .search-icon img").click(function(e) {
        e.stopPropagation();
        return false;
    });
    $(document).on('keydown', function(event) {
        if (event.key == "Escape") {
            $(".search-input input").hide();
            $(".search-icon img").attr('src', 'images/icons/search.png');
        }
    });
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