$(document).ready(function() {
    $('.collapse').on('hide.bs.collapse', function(e) {
        e.stopPropagation();
        $(this).prev().removeClass('open');
    }).on('show.bs.collapse', function(e) {
        e.stopPropagation();
        $(this).prev().addClass('open');
    });

    var $generated = $('.generated-on');

    $generated.text('Generated ' + moment($generated.text()).fromNow());
});
