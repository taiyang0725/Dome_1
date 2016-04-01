/**
 * Created by An on 2016/3/31.
 */


function getElementById(id) {
    return document.getElementById(id);
}


function showDialog(obj, id, content) {
    if (getElementById(id) == null) {
        var diaLog;
        diaLog = document.createElement("div");
        diaLog.className = "dia-log";
        diaLog.id = id;
        diaLog.innerHTML = content;
        obj.appendChild(diaLog);

        var lefts = obj.offsetLeft;
        var tops = obj.offsetTop + 20;

        diaLog.style.left = lefts + "px";
        diaLog.style.top = tops + "px";


        obj.addEventListener("mouseout", function () {
            setTimeout(function () {
                getElementById(id).style.display = "none";
            }, 100);
        });


    } else {
        getElementById(id).style.display = "block";
    }


}

getElementById("ui-content").addEventListener("mousemove", function (e) {
    var target = e.target;
    var _id;
    var _content;

    if (target.className == "android") {
        switch (target.id) {
            case "android":
                _id = "an";
                _content = "android开发技术";
                break;
            case "":
                break;
            case "":
                break;
            case "":
                break;

            default :
                break;
        }

        //showDialog(this, _id, _content);
    }

});


var android = getElementById("android");
android.onmousemove = function () {
    showDialog(this, "b", "android是一门手机开发语言！")
}



