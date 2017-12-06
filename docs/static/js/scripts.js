    $(document).ready(function(){

        $('.container').stalactite({
            duration: 30,
            easing: 'swing',
            loader: '<img />',
            fluid: true
        });

        $('.genres, .authors').stalactite({
            duration: 0,
            easing: 'swing',
            loader: '<img />',
            fluid: false
        });
    });

    $('input, textarea').css({
            'color': 'inherit'
        });

    // $('input, textarea').blur(function() {
    //     if (this.value !== '') {
    //         $(this).css({
    //             'color': 'inherit'
    //         });
    //     } else {
    //          $(this).css({
    //             'color': 'none'
    //         });
    //     }
    // });

   
    // $('.menu').mouseenter(function() {
    //     $(this).css({"display": "inherit"});
    //     // $(this).fadeIn();
    // });
    // $('.menu').mouseleave(function() {
    //     // $(this).css({"display": "none"});
    //     $(this).fadeOut();
    // });

    // $('#books').mouseenter(function() {
    //     $('.menu').css({"display": "none"});
    //     $('#books-menu').css({"display": "inherit"});
    //     // $('#books-menu').fadeIn();
    // });

    // $('#authors').mouseenter(function() {
    //     $('.menu').css({"display": "none"});
    //     $('#authors-menu').css({"display": "inherit"});
    //     // $('#authors-menu').fadeIn();
    // });

    // $('#genres').mouseenter(function() {
    //     $('.menu').css({"display": "none"});
    //     $('#genres-menu').css({"display": "inherit"});
    //     // $('#genres-menu').fadeIn();
    // });
    // $('.navbar').mouseleave(function() {
    //     $('.menu').fadeOut();
    // });