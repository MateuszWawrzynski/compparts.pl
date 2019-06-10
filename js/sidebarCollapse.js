
/*
    Managing sidebar collapse buttons.
*/


$(".menu-button-open").on('click', () => {
    $('.sidebar')
    .css('margin-left', '0')
    .css('width', '100%'); 
    
    $('.menu-button-close').css('display', 'block');
});

$(".menu-button-close").on('click', () => {
    $('.sidebar').removeAttr('style');

    $('.menu-button-close').css('display', 'none');
});
