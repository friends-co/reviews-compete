// reviews competitive spectrum

'use strict';

$( document ).ready(function() {

    if ($("body").hasClass('intro') == false) {

        var imgWidth = $('.framebody .images img:nth-child(2)').width();
        var imgNum = $('.framebody .images img').length + 1;

        var total = ((imgNum * imgWidth) + (imgNum * 50)) + 50;

        console.log(imgNum);
        console.log(imgWidth);
        console.log(total);

        $(".framebody .images").css('width', total);

    }

    $('.sitenav a').on('click', function(e) {
        e.preventDefault();

        var me = $(this);
        var dest = me.attr('href');

        $('#contentFrame').attr('src', dest);

    });
});

