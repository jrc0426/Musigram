/*let showButton = document.querySelector('.instrument_button');*/


let ins = document.querySelector('#insContainer');
let uname = document.querySelector('#userContainer');
let showInstrument = document.querySelector('#instruments');
console.log(getCookie('instrument'));

function checkLogin() {
    if (ins.innerHTML == "") {
        showInstrument.style.display = "block";
    } else
    {
        showInstrument.style.display = "none";
    }
    
}

checkLogin();

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
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

console.log(getCookie("username"));
console.log(getCookie("instrument"));
console.log(document.cookie);

uname.append(getCookie('username'));
ins.append(getCookie('instrument'));

let signOutButton = document.querySelector('.sign_out');
signOutButton.addEventListener('click', onSignOut);

function onSignOut() {
    alert('You have been signed out successfully');
    uname.innerHTML = "";
    ins.innerHTML = "";
    document.cookie = `email=;`;
    document.cookie = `name=;`;
    document.cookie = `instrument=;`;
    document.cookie = `username=;`;
    document.cookie = `password=`;
    checkLogin();
}