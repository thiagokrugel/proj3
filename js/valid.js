
var users = [["usuario","senha"]];

var d = document,
    er = d.querySelector("#error");

function jsTransitionScale(elm, width, height, paddingH, speed) {
    er.style.display = "block";

    var FPS = 60;

    var original_width = elm.offsetWidth,
        original_height = elm.offsetHeight;
    original_paddingH = elm.offsetHeight;


    var width_range = width - original_width,
        height_range = height - original_height;
    paddingH_range = paddingH - original_paddingH;

    var timeout = speed / FPS,
        width_change = width_range / FPS,
        height_change = height_range / FPS;
    paddingH_change = paddingH_range / FPS;

    var finish = new Date().getTime() + speed;

    var begin = setInterval(function () {
        original_width += width_change;
        original_height += height_change;
        original_paddingH += paddingH_change;

        elm.style.width = original_width + "px";
        elm.style.height = original_height + "px";
        elm.style.padding = original_paddingH + "px";

        if (new Date().getTime() >= finish) {
            elm.style.width = width;
            elm.style.height = height;
            elm.style.padding = paddingH;
            clearInterval(begin);
        }
    }, timeout);


}

function validate() {

    var user = document.getElementById("userInp");
    var password = document.getElementById("passInp");

    var st = JSON.parse(localStorage.getItem("users"));

    if (user.value.length < 5 || password.value.length < 5) {
        jsTransitionScale(er, 200, 40, 8, 30);
        return false;
    }
    else if (user.value.length >= 5 && password.value.length >= 5) {
        for(var i = 0; i < st.length; i++){
            if(user.value == st[i][0] && password.value == st[i][1]){
                window.location.replace("index.html");
                return true; 
            }
        }
        jsTransitionScale(er, 200, 40, 8, 30);
        return false; 


    }
}

function register() {

    var user = document.getElementById("userInp");
    var password = document.getElementById("passInp");
    const stUsers = localStorage.getItem('users');

    if (user.value.length < 5 || password.value.length < 5) {
        jsTransitionScale(er, 200, 78, 8, 30);
        return false;
    }

    if(stUsers){
        saveToStorage([user.value,password.value]);
    }
    else{
        users.push([user.value,password.value]);
        window.localStorage.setItem("users", JSON.stringify(users));
    }

    window.location.replace("login.html");
}


function saveToStorage(data)
{
    var a = [];
    a = JSON.parse(localStorage.getItem('users')) || [];
    a.push(data);

    //alert(a);  
    localStorage.setItem('users', JSON.stringify(a));
}