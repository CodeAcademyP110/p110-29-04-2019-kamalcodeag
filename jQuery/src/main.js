$(document).ready(function()
{
    $(".wrapper .inner").hover(
    function()
    {
        $(this)
        .css({
            "color": "red",
            "backgroundColor": "green"
        });
    },
    function()
    {
        $(this)
        .css({
            "color": "green",
            "backgroundColor": "red"
        });
    })
})