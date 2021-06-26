$(document).ready(function() {

    //Not scroll at first
    $(window).on('load', function(event) {
        $("#mainContent").hide();
    });

    $("#mainTypo").click(function(){
        $("#mainContent").show();
    });

    $(".rightHeader").click(function(){
        $("#mainContent").show();
    });

    //Logo changes
    var whitelogo = ".whitelogo"
    var redlogo = ".redlogo"

    $(whitelogo).mouseover(function(){
        $(redlogo).css("visibility", "visible");
        $(this).hide();
    });

    $(redlogo).mouseleave(function(){
        $(this).css("visibility", "hidden");
        $(whitelogo).show();
    });

    //scroll down - header
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("header").style.bottom = "0";
        } else {
            document.getElementById("header").style.bottom = "-60px";
        }
        prevScrollpos = currentScrollPos;
    }

    //main Typo's position changes
    var winwidth = $(window).width();

    $(window).resize (function() {
        if(winwidth < 1400) {
            $("#mainTypo img").css({
                "margin-top": "200px",
                "margin-bottom" : "100px"
            });
        } else {
            $("#mainTypo img").css({
                "margin-top": "130px",
                "margin-bottom" : "120px"
            });
        }
    });
    
    //main Typo's position changes
    var title1 = ".title1"
    var title2 = ".title2"

    $(title1).mouseover(function(){
        $(title2).css("visibility", "visible");
        $(this).hide();
        $(title2).show();
    });

    $(title2).mouseleave(function(){
        $(this).css("visibility", "hidden");
        $(title1).show();
        $(this).hide();
    });

    $(window).on('load', function(event) {
        $(title1).show();
        $(title2).hide();
    });

    //artBox's position changes
    $(window).on('resize', function(event) {
        detailWidth = $(window).width();

        if(detailWidth < 1250) {
            $("#artBox").css("top","1900px");
        } else {
            $("#artBox").css("top","2070px");
        }
    });

    $(window).on('load', function(event) {
        detailWidth = $(window).width();

        if(detailWidth < 1250) {
            $("#artBox").css("top","1900px");
        } else {
            $("#artBox").css("top","2070px");
        }
    });

    function arrowshow(){

        $("#arrowimg1").click(function(){
            $('#randomly1').css("visibility", "visible");
        });
        $("#arrowimg2").click(function(){
            $('#randomly2').css("visibility", "visible");
        });
        $("#arrowimg3").click(function(){
            $('#randomly3').css("visibility", "visible");
        });
        $("#arrowimg4").click(function(){
            $('#randomly4').css("visibility", "visible");
        });
        $("#arrowimg5").click(function(){
            $('#randomly5').css("visibility", "visible");
        });
        $("#arrowimg6").click(function(){
            $('#randomly6').css("visibility", "visible");
        });
        $("#arrowimg7").click(function(){
            $('#randomly7').css("visibility", "visible");
        });
        $("#arrowimg8").click(function(){
            $('#randomly8').css("visibility", "visible");
        });
        $("#arrowimg9").click(function(){
            $('#randomly9').css("visibility", "visible");
        });
        $("#arrowimg10").click(function(){
            $('#randomly10').css("visibility", "visible");
        });
        $("#arrowimg11").click(function(){
            $('#randomly11').css("visibility", "visible");
        });
        $("#arrowimg12").click(function(){
            $('#randomly12').css("visibility", "visible");
        });
        $("#arrowimg13").click(function(){
            $('#randomly13').css("visibility", "visible");
        });
        $("#arrowimg14").click(function(){
            $('#randomly14').css("visibility", "visible");
        });
        $("#arrowimg15").click(function(){
            $('#randomly15').css("visibility", "visible");
        });
        $("#arrowimg16").click(function(){
            $('#randomly16').css("visibility", "visible");
        });
        $("#arrowimg17").click(function(){
            $('#randomly17').css("visibility", "visible");
        });
        $("#arrowimg18").click(function(){
            $('#randomly18').css("visibility", "visible");
        });
        $("#arrowimg19").click(function(){
            $('#randomly19').css("visibility", "visible");
        });
        $("#arrowimg20").click(function(){
            $('#randomly20').css("visibility", "visible");
        });
    }

    arrowshow();
 

    //detailed pages
    var remakebody = "#container";
    var dpage = "#details";
    var un = "#artBox";
    var ximg = ".fixed img";

    function detailed(){

        $(".t1").click(function() {
            $(dpage).css("visibility", "visible");
            $(".d1").css("visibility", "visible");
            $(remakebody).css("opacity", "0.5");
            $(un).css("pointer-events", "none");
        });

        $(".t2").click(function() {
            $(dpage).css("visibility", "visible");
            $(".d2").css("visibility", "visible");
            $(remakebody).css("opacity", "0.5");
            $(un).css("pointer-events", "none");
        });

        $(".t3").click(function() {
            $(dpage).css("visibility", "visible");
            $(".d3").css("visibility", "visible");
            $(remakebody).css("opacity", "0.5");
            $(un).css("pointer-events", "none");
        });

        $(".t4").click(function() {
            $(dpage).css("visibility", "visible");
            $(".d4").css("visibility", "visible");
            $(remakebody).css("opacity", "0.5");
            $(un).css("pointer-events", "none");
        });

        $(".t5").click(function() {
            $(dpage).css("visibility", "visible");
            $(".d5").css("visibility", "visible");
            $(remakebody).css("opacity", "0.5");
            $(un).css("pointer-events", "none");
        });

        $(".t6").click(function() {
            $(dpage).css("visibility", "visible");
            $(".d6").css("visibility", "visible");
            $(remakebody).css("opacity", "0.5");
            $(un).css("pointer-events", "none");
        });

        $(".t7").click(function() {
            $(dpage).css("visibility", "visible");
            $(".d7").css("visibility", "visible");
            $(remakebody).css("opacity", "0.5");
            $(un).css("pointer-events", "none");
        });

        $(".t8").click(function() {
            $(dpage).css("visibility", "visible");
            $(".d8").css("visibility", "visible");
            $(remakebody).css("opacity", "0.5");
            $(un).css("pointer-events", "none");
        });

        $(".t9").click(function() {
            $(dpage).css("visibility", "visible");
            $(".d9").css("visibility", "visible");
            $(remakebody).css("opacity", "0.5");
            $(un).css("pointer-events", "none");
        });

        $(".t10").click(function() {
            $(dpage).css("visibility", "visible");
            $(".d10").css("visibility", "visible");
            $(remakebody).css("opacity", "0.5");
            $(un).css("pointer-events", "none");
        });

        $(".t11").click(function() {
            $(dpage).css("visibility", "visible");
            $(".d11").css("visibility", "visible");
            $(remakebody).css("opacity", "0.5");
            $(un).css("pointer-events", "none");
        });

        $(".t12").click(function() {
            $(dpage).css("visibility", "visible");
            $(".d12").css("visibility", "visible");
            $(remakebody).css("opacity", "0.5");
            $(un).css("pointer-events", "none");
        });

        $(".t13").click(function() {
            $(dpage).css("visibility", "visible");
            $(".d13").css("visibility", "visible");
            $(remakebody).css("opacity", "0.5");
            $(un).css("pointer-events", "none");
        });

        $(".t14").click(function() {
            $(dpage).css("visibility", "visible");
            $(".d14").css("visibility", "visible");
            $(remakebody).css("opacity", "0.5");
            $(un).css("pointer-events", "none");
        });

        $(".t15").click(function() {
            $(dpage).css("visibility", "visible");
            $(".d15").css("visibility", "visible");
            $(remakebody).css("opacity", "0.5");
            $(un).css("pointer-events", "none");
        });

        $(".t16").click(function() {
            $(dpage).css("visibility", "visible");
            $(".d16").css("visibility", "visible");
            $(remakebody).css("opacity", "0.5");
            $(un).css("pointer-events", "none");
        });

        $(".t17").click(function() {
            $(dpage).css("visibility", "visible");
            $(".d17").css("visibility", "visible");
            $(remakebody).css("opacity", "0.5");
            $(un).css("pointer-events", "none");
        });

        $(".t18").click(function() {
            $(dpage).css("visibility", "visible");
            $(".d18").css("visibility", "visible");
            $(remakebody).css("opacity", "0.5");
            $(un).css("pointer-events", "none");
        });

        $(".t19").click(function() {
            $(dpage).css("visibility", "visible");
            $(".d19").css("visibility", "visible");
            $(remakebody).css("opacity", "0.5");
            $(un).css("pointer-events", "none");
        });

        $(".t20").click(function() {
            $(dpage).css("visibility", "visible");
            $(".d20").css("visibility", "visible");
            $(remakebody).css("opacity", "0.5");
            $(un).css("pointer-events", "none");
        });

    }

    detailed();


    //'X' clicking
    $(ximg).click(function(){
        $(dpage).css("visibility", "hidden");
        $(".d1").css("visibility", "hidden");
        $(".d2").css("visibility", "hidden");
        $(".d3").css("visibility", "hidden");
        $(".d4").css("visibility", "hidden");
        $(".d5").css("visibility", "hidden");
        $(".d6").css("visibility", "hidden");
        $(".d7").css("visibility", "hidden");
        $(".d8").css("visibility", "hidden");
        $(".d9").css("visibility", "hidden");
        $(".d10").css("visibility", "hidden");
        $(".d11").css("visibility", "hidden");
        $(".d12").css("visibility", "hidden");
        $(".d13").css("visibility", "hidden");
        $(".d14").css("visibility", "hidden");
        $(".d15").css("visibility", "hidden");
        $(".d16").css("visibility", "hidden");
        $(".d17").css("visibility", "hidden");
        $(".d18").css("visibility", "hidden");
        $(".d19").css("visibility", "hidden");
        $(".d20").css("visibility", "hidden");
        $(remakebody).css("opacity", "1");
        $(un).css("pointer-events", "auto");
    });

    //detailed text-size changes
    $(window).on('resize', function(event) {
        detailWidth = $(window).width();

        if(detailWidth < 980) {
            //d6
            $(".d6 img").css("height", "150px");
            $(".d6 p").css("margin-right", "25%");
            //d7
            $(".d7 img").css("height", "155px");
            $(".d7 p").css({
                "margin-right": "35%",
                "font-size": "13px"
            });
            //d8
            $(".d8 img").css("height", "165px");
            $(".d8 p").css({
                "margin-right": "30%",
                "font-size": "12.8px"
            });
            //d9
            $(".d9 img").css("height", "165px");
            $(".d9 p").css({
                "margin-right": "30%",
                "font-size": "12.8px"
            });
            //d10
            $(".d10 img").css("height", "185px");
            $(".d10 p").css("margin-right", "25%");
            //d13
            $(".d10 img").css("height", "160px");
            //d16
            $(".d16 p").css({
                "margin-right": "30%",
                "font-size": "12.8px"
            });
        } else {
            //d6
            $(".d6 img").css("height", "200px");
            $(".d6 p").css("margin-right", "10%");
            //d7
            $(".d7 img").css("height", "180px");
            $(".d7 p").css({
                "margin-right": "14%",
                "font-size": "15px"
            });
            //d8
            $(".d8 img").css("height", "200px");
            $(".d8 p").css({
                "margin-right": "30px",
                "font-size": "13.7px"
            });
            //d9
            $(".d9 img").css("height", "200px");
            $(".d9 p").css({
                "margin-right": "5%",
                "font-size": "14px"
            });
            //d10
            $(".d10 img").css("height", "200px");
            $(".d10 p").css("margin-right", "10%");
            //d13
            $(".d10 img").css("height", "200px");
            //d16
            $(".d16 p").css({
                "margin-right": "7%",
                "font-size": "13.5px"
            });
        };

        if(detailWidth > 1000) {
            $(".d1 img").css("height", "250px");
            $(".d2 img").css("height", "250px");
            $(".d3 img").css("height", "235px");
            $(".d4 img").css("height", "250px");
            $(".d5 img").css("height", "250px");
            $(".d7 img").css("height", "190px");
            $(".d8 img").css("height", "210px");
            $(".d9 img").css("height", "205px");
            $(".d10 img").css("height", "210px");
            $(".d11 img").css("height", "260px");
            $(".d12 img").css("height", "260px");
            $(".d13 img").css("height", "200px");
            $(".d14 img").css("height", "250px");
            $(".d15 img").css("height", "250px");
            $(".d16 img").css("height", "250px");
            $(".d17 img").css("height", "215px");
            $(".d18 img").css("height", "140px");
            $(".d19 img").css("height", "270px");
            $(".d20 img").css("height", "250px");
        } else {
            $(".d1 img").css("height", "200px");
            $(".d2 img").css("height", "200px");
            $(".d3 img").css("height", "200px");
            $(".d4 img").css("height", "200px");
            $(".d5 img").css("height", "200px");
            $(".d7 img").css("height", "155px");
            $(".d8 img").css("height", "165px");
            $(".d9 img").css("height", "165px");
            $(".d10 img").css("height", "185px");
            $(".d11 img").css("height", "200px");
            $(".d12 img").css("height", "200px");
            $(".d13 img").css("height", "160px");
            $(".d14 img").css("height", "200px");
            $(".d15 img").css("height", "200px");
            $(".d16 img").css("height", "200px");
            $(".d17 img").css("height", "170px");
            $(".d18 img").css("height", "100px");
            $(".d19 img").css("height", "200px");
            $(".d20 img").css("height", "200px");
        }

    });

    //artBox hover and out
    $(window).on('load', function(event) {
        $("#artBox").css("grid-template-columns","1fr");
        
    });

    function showing(){
        $(".t1").mouseover(function(){
            $("#artBox").css("grid-template-columns","1fr 600px");
            $(".side1").css("display","block");
        });
        $(".t2").mouseover(function(){
            $("#artBox").css("grid-template-columns","1fr 600px");
            $(".side2").css("display","block");
        });
        $(".t3").mouseover(function(){
            $("#artBox").css("grid-template-columns","1fr 600px");
            $(".side3").css("display","block");
        });
        $(".t4").mouseover(function(){
            $("#artBox").css("grid-template-columns","1fr 600px");
            $(".side4").css("display","block");
        });
        $(".t5").mouseover(function(){
            $("#artBox").css("grid-template-columns","1fr 600px");
            $(".side5").css("display","block");
        });
        $(".t6").mouseover(function(){
            $("#artBox").css("grid-template-columns","1fr 600px");
            $(".side6").css("display","block");
        });
        $(".t7").mouseover(function(){
            $("#artBox").css("grid-template-columns","1fr 600px");
            $(".side7").css("display","block");
        });
        $(".t8").mouseover(function(){
            $("#artBox").css("grid-template-columns","1fr 600px");
            $(".side8").css("display","block");
        });
        $(".t9").mouseover(function(){
            $("#artBox").css("grid-template-columns","1fr 600px");
            $(".side9").css("display","block");
        });
        $(".t10").mouseover(function(){
            $("#artBox").css("grid-template-columns","1fr 600px");
            $(".side10").css("display","block");
        });
        $(".t11").mouseover(function(){
            $("#artBox").css("grid-template-columns","1fr 600px");
            $(".side11").css("display","block"); 
        });
        $(".t12").mouseover(function(){
            $("#artBox").css("grid-template-columns","1fr 600px");
            $(".side12").css("display","block");
        });
        $(".t13").mouseover(function(){
            $("#artBox").css("grid-template-columns","1fr 600px");
            $(".side13").css("display","block");
        });
        $(".t14").mouseover(function(){
            $("#artBox").css("grid-template-columns","1fr 600px");
            $(".side14").css("display","block");
        });
        $(".t15").mouseover(function(){
            $("#artBox").css("grid-template-columns","1fr 600px");
            $(".side15").css("display","block");
        });
        $(".t16").mouseover(function(){
            $("#artBox").css("grid-template-columns","1fr 600px");
            $(".side16").css("display","block");
        });
        $(".t17").mouseover(function(){
            $("#artBox").css("grid-template-columns","1fr 600px");
            $(".side17").css("display","block");
        });
        $(".t18").mouseover(function(){
            $("#artBox").css("grid-template-columns","1fr 600px");
            $(".side18").css("display","block");
        });
        $(".t19").mouseover(function(){
            $("#artBox").css("grid-template-columns","1fr 600px");
            $(".side19").css("display","block"); 
        });
        $(".t20").mouseover(function(){
            $("#artBox").css("grid-template-columns","1fr 600px");
            $(".side20").css("display","block");
        });
    }
    
    function noshowing(){
        $(".t1").mouseleave(function(){
            $("#artBox").css("grid-template-columns","1fr");
            $(".side1").css("display","none");
        });
        $(".t2").mouseleave(function(){
            $("#artBox").css("grid-template-columns","1fr");
            $(".side2").css("display","none");
        });
        $(".t3").mouseleave(function(){
            $("#artBox").css("grid-template-columns","1fr");
            $(".side3").css("display","none");
        });
        $(".t4").mouseleave(function(){
            $("#artBox").css("grid-template-columns","1fr");
            $(".side4").css("display","none");
        });
        $(".t5").mouseleave(function(){
            $("#artBox").css("grid-template-columns","1fr");
            $(".side5").css("display","none");
        });
        $(".t6").mouseleave(function(){
            $("#artBox").css("grid-template-columns","1fr");
            $(".side6").css("display","none");
        });
        $(".t7").mouseleave(function(){
            $("#artBox").css("grid-template-columns","1fr");
            $(".side7").css("display","none");
        });
        $(".t8").mouseleave(function(){
            $("#artBox").css("grid-template-columns","1fr");
            $(".side8").css("display","none");
        });
        $(".t9").mouseleave(function(){
            $("#artBox").css("grid-template-columns","1fr");
            $(".side9").css("display","none");
        });
        $(".t10").mouseleave(function(){
            $("#artBox").css("grid-template-columns","1fr");
            $(".side10").css("display","none");
        });
        $(".t11").mouseleave(function(){
            $("#artBox").css("grid-template-columns","1fr");
            $(".side11").css("display","none");
        });
        $(".t12").mouseleave(function(){
            $("#artBox").css("grid-template-columns","1fr");
            $(".side12").css("display","none");
        });
        $(".t13").mouseleave(function(){
            $("#artBox").css("grid-template-columns","1fr");
            $(".side13").css("display","none");
        });
        $(".t14").mouseleave(function(){
            $("#artBox").css("grid-template-columns","1fr");
            $(".side14").css("display","none");
        });
        $(".t15").mouseleave(function(){
            $("#artBox").css("grid-template-columns","1fr");
            $(".side15").css("display","none");
        });
        $(".t16").mouseleave(function(){
            $("#artBox").css("grid-template-columns","1fr");
            $(".side16").css("display","none");
        });
        $(".t17").mouseleave(function(){
            $("#artBox").css("grid-template-columns","1fr");
            $(".side17").css("display","none");
        });
        $(".t18").mouseleave(function(){
            $("#artBox").css("grid-template-columns","1fr");
            $(".side18").css("display","none");
        });
        $(".t19").mouseleave(function(){
            $("#artBox").css("grid-template-columns","1fr");
            $(".side19").css("display","none");
        });
        $(".t20").mouseleave(function(){
            $("#artBox").css("grid-template-columns","1fr");
            $(".side20").css("display","none");
        });
    }

    showing();
    noshowing();



});
