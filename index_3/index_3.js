/**
 * Created by lianghao on 2016/3/29.
 */

function $(id) {
    return typeof id == "string" ? document.getElementById(id) : id;
}

window.onload = function () {
    var titName = $("tab_tit").getElementsByTagName("li");
    //alert(titName.length)
    for (var i = 0; i < titName.length; i++) {
        titName[i].onmousemove = function () {
            for (var j = 0; j < 5; j++) {
                titName[j].className = "";
            }
            this.className = "select";
        }
    }
}