"use strict";

// $(document).ready(function()
// {
//     $(".wrapper .inner").hover(
//     function()
//     {
//         $(this)
//         .css({
//             "color": "red",
//             "backgroundColor": "black"
//         });
//     },
//     function()
//     {
//         $(this)
//         .css({
//             "color": "black",
//             "backgroundColor": "white"
//         });
//     })
// })




// jQuery version

// $("document").ready(function(){
//     $("#test").click(function()
//     {
//         $(this).hide();
//     })
// })



// JavaScript version

// window.onload = function()
// {
//     document.getElementById("test").onclick = function()
//     {
//         this.classList.add("d-none");
//     }
// }



// jQuery version

// $("document").ready(function(){
//     $("#test").hover(function()
//     {
//         alert("entered");
//     },
//     function()
//     {
//         alert("left");
//     });
// })


// JavaScript version

// window.onload = function()
// {
//     document.getElementById("test").onmouseover = function()
//     {
//         alert("entered");
//     }
//     document.getElementById("test").onmouseout = function()
//     {
//         alert("left");
//     }
// }




// $("document").ready(function(){
//     $("#test").click(function()
//     {
//         $(this).css({
//             "backgroundColor": "black",
//             "color": "yellow"
//         })
//     })
// })


$("document").ready(function()
{
    // $("#box1").css(
    // {
    //     "width": "200px",
    //     "height": "200px",
    //     "backgroundColor": "red"
    // }
    // ),
    // $("#test").click(function()
    // {
    //     // $("#box1").fadeToggle(2000);
    //     $("#box1").fadeTo("slow",0.3);
    // }),


    $("#box1").css(
    {
        width: "200px",
        height: "200px",
        backgroundColor: "red"
    }
    ),

    // $("#box2").css(
    // {
    //     width: "200px",
    //     height: "200px",
    //     backgroundColor: "blue",
    //     display: "none"
    // }
    // ),

    $("#box1").click(function()
    {
        // $("#box2").slideToggle(1500);
        // $("#box3").animate(
        // {
        //     // left: "400px",
        //     // width: "+=150px",
        //     // height: "+=150px"
        //     // height: "toggle"
        // });

        let box3 = $("#box3");
        box3.animate(
        {
            left: "500px"
        }
        ),
        box3.animate(
        {
            fontSize: "2rem"
        }
        )


    })
})




// !!! ERROR: jquery-3.4.0.min.js:5 Access to XMLHttpRequest at 'file://az.api4load.com/post' from origin 'null' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https. ---
