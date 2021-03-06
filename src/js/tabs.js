// Tabs

$(document).ready(function () {

    $('#tabs__pick li a:not(:first)').addClass('inactive');
    $('.tabs__container').hide();
    $('.tabs__container:first').show();

    $('#tabs__pick li a').on('click mouseover', function () {
        var t = $(this).attr('id');
        if ($(this).hasClass('inactive')) { //this is the start of our condition 
            $('#tabs__pick li a').addClass('inactive');
            $('#tabs__pick li a').attr('aria-expanded', 'false');

            $(this).removeClass('inactive');
            $(this).attr('aria-expanded', 'true');




            $('.tabs__container').hide();
            $('#' + t + 'C').fadeIn('slow');

        }
    });

});
// Description 
$(document).ready(function () {

    $('#tabs__desc li a:not(:first)').addClass('inactive');
    $('.tabs__container-desc').hide();
    $('.tabs__container-desc:first').show();

    $('#tabs__desc li a').on('click mouseover', function () {
        var t = $(this).attr('id');
        if ($(this).hasClass('inactive')) { //this is the start of our condition 
            $('#tabs__desc li a').addClass('inactive');
            $('#tabs__desc li a').attr('aria-expanded', 'false');

            $(this).removeClass('inactive');
            $(this).attr('aria-expanded', 'true');




            $('.tabs__container-desc').hide();
            $('#' + t + 'D').fadeIn('slow');

        }
    });

});