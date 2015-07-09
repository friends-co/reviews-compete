// reviews competitive spectrum


$( document ).ready(function() {

    $('.sitenav a').on('click', function(e) {
        e.preventDefault();

        var me = $(this);
        var dest = me.attr('href');

        $('#contentFrame').attr('src', dest);

    })
  
});