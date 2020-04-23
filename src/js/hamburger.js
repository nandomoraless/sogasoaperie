// Hamburger Menu
$(document).ready(function () {
    $(".menu").click(function () {
        $(".menu").toggleClass("active");
        $(".navbar-menu").toggleClass("active");

    });
    $('.menu a').on("click", function () {
        $('.menu').removeClass('active');
    });
});

// Shopping Cart

$(document).ready(function () {
    $(".cart").click(function () {
        $(".cart").toggleClass("active");
        $(".cart-menu").toggleClass("active");

    });
    $('.cart a').on("click", function () {
        $('.cart').removeClass('active');
    });
});

// Remove item 

$(document).ready(function () {
    $(".close-button").click(function () {
        $(".checkout-drawer__product").toggleClass("hidden");


    });
});