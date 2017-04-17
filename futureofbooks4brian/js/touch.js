jQuery(function($) {
    $('#img').mouseover(function() {
        var dWidth = $(document).width() - 50, // 100 = image width
            dHeight = $(document).height() - 50, // 100 = image height
            nextX = Math.floor(Math.random() * dWidth),
            nextY = Math.floor(Math.random() * dHeight);
        $(this).animate({ left: nextX + 'px', top: nextY + 'px'});
    });
});
