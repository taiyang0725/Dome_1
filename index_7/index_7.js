/**
 * Created by An on 2016/4/1.
 */

function setCss(_id1, _id2, _id3) {
    $(_id1).children().removeClass(_id2).addClass(_id3);
}

$(document).ready(function () {
    $("#lst-1").on("click", function () {

        $("#lst-1").css({"backgroundPosition": "0px -24px"});
        $("#lst-2").css({"backgroundPosition": "30px -24px"});
        setCss(".uls", "lis-v", "lis");
        setCss(".lis", "divs-v", "divs");


    });
    $("#lst-2").on("click", function () {
        $("#lst-1").css({"backgroundPosition": "0px 0px"});
        $("#lst-2").css({"backgroundPosition": "30px 0px"});
        setCss(".uls", "lis", "lis-v");
        setCss(".lis-v", "divs", "divs-v");
        $("a").removeClass("a").addClass("div-img-v");
        $("b").removeClass("a").addClass("div-c-v");


    });


});