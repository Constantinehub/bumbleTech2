document.addEventListener("DOMContentLoaded", function() {

    $('.filter-from').daterangepicker({
        buttonClasses: 'drp-btn',
    });

    $('.filter-range').daterangepicker({
        buttonClasses: 'drp-btn',
    });

    $('.filter-field').daterangepicker({
        singleDatePicker: true,
        buttonClasses: 'drp-btn',
        opens: 'left'
    });

    $('.menu-btn').on('click', function() {
        $('body').toggleClass('menu-open');
    });

    $('.close-btn, .menu-item').on('click', function(event) {
        event.preventDefault();
        $('body').removeClass('menu-open');
    });

});
