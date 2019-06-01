
$(".menu-button-open").on('click', () => {
    $('.sidebar')
    .css('margin-left', '0')
    .css('width', '100%'); 
    
    $('.menu-button-close').css('display', 'block');
});

$(".menu-button-close").on('click', () => {
    $('.sidebar')
    .css('margin-left', '-250px')
    .css('width', '250px');

    $('.menu-button-close').css('display', 'none');
});

//  zamienic to na dodanie/usuwanie klasy
//  zamiast recznego dodawania css
