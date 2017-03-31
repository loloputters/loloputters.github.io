$(function() {
    $('#slider1').slider({
        value:14,
        min: 8,
        max: 42,
        step: 1,
        slide: function( event, ui ) {
            $('#font_size').val(ui.value + ' px');
            $('.box').css('font-size', ui.value);
        }
    });
    $('#font_size').val($('#slider1').slider('value') + ' px');
});
