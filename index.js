$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('nav a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Animate sections on load
    $(window).on('load', function() {
        $('.section').each(function(i) {
            $(this).delay(i * 200).animate({
                opacity: 1,
               
