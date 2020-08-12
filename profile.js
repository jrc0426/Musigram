let user_container = document.querySelector('.username_container');
let name_container = document.querySelector('.name_container');
let ins_container = document.querySelector('.instrument_container');
let email_container = document.querySelector('.email_container');
let url_container = document.querySelector('.url_container');
let url = document.querySelector('#url');
let url_button = document.querySelector('.url_button');
url_button.addEventListener('click', uploadFile);


const database = firebase.database().ref();

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

console.log(getCookie("email"));
console.log(getCookie("name"));
console.log(getCookie("username"));
console.log(getCookie("instrument"));


function uploadFile() {
    let username = getCookie("username");
    // Get the file
    if (username) {
        database
            .orderByChild("username")
            .equalTo(username)
            .on("child_added", function (snapshot) {
                console.log(snapshot.key)
                database.child(snapshot.key).update({
                    soundtrack: url.value
                })
            })
        // a.setAttribute('href', url.value);
        // url_container.append(a);
    }
}

if (getCookie("username")) {
    name_container.append(getCookie('name'));
    user_container.append(getCookie('username'));
    ins_container.append(getCookie('instrument'));
    email_container.append(getCookie('email'));

    database
        .orderByChild("username")
        .equalTo(getCookie("username"))
        .on("child_added", function (snapshot) {
            firebase.database().ref(snapshot.key).once('value').then(function(snapshot) {
                console.log(snapshot.val().soundtrack)
                if (snapshot.val().soundtrack){
                    let a = document.createElement('a');
                a.setAttribute('href', snapshot.val().soundtrack);
                a.setAttribute('target', '_blank');
                a.innerHTML = "Soundtrack Link";
                url_container.appendChild(a);
                }
            });
        })
}