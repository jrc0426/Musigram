const database = firebase.database().ref();

let username = document.querySelector('#name');
let password = document.querySelector('#password');
let loginButton = document.querySelector('.login_button');
loginButton.addEventListener('click', checkLogin)

function checkLogin(event) {
    event.preventDefault();

    if (username.value.length > 0 && password.value.length > 0) {
        database.orderByChild("username").on("child_added", function(snapshot) {
            console.log(snapshot.val().username, username);
            console.log(snapshot.val().userpassword, password);
           if(snapshot.val().username == username.value && snapshot.val().userpassword == password.value) {
               window.open("index.html");
               document.cookie = `username=${username.value}`;
               document.cookie = `email=${snapshot.val().useremail}`;
               document.cookie = `name=${snapshot.val().name}`;
               document.cookie = `instrument=${snapshot.val().userinstrument}`;
           } else {
               alert("That username/password is incorrect.")
           }
        });
    } else {
        alert("Fill in both the username and password.");
    }
}

function uploadFile() {
    /*let username = getCookie("username");
    let password = getCookie('password');
    let email = getCookie('email');*/
}