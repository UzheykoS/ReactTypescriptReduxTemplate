import Helper from "./helper";

export function setCookie(cname, cvalue, cexpires) {
    document.cookie = cname + "=" + cvalue + ";expires=" + cexpires + ";path=/";
}

export function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export function checkCookie() {
    var token = getCookie(Helper.TokenCookieName);
    return token != "";
}