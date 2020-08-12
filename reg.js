let usernameEl = document.querySelector("#username");
let instrumentEl = document.querySelector("#instrument");
let nameEl = document.querySelector('#name');
let passwordEl = document.querySelector('#password');
let emailEl = document.querySelector('#email');
let registerButton = document.querySelector(".register_button");
registerButton.addEventListener("click", sendData);


//make js files for each html
const database = firebase.database().ref();

function sendData(event) {
    event.preventDefault();
    const dataUsername = usernameEl.value;
    const dataInstrument = instrumentEl.value;
    const dataPassword = passwordEl.value;
    const dataName = nameEl.value;
    const dataEmail = emailEl.value;

    //Update database here
    let value = {
        username: dataUsername,
        userinstrument: dataInstrument,
        name: dataName,
        userpassword: dataPassword,
        useremail: dataEmail
    }

    database.push(value);
    console.log(usernameEl.value, instrumentEl.value, emailEl.value, nameEl.value);
    document.cookie = `email=${emailEl.value}`;
    document.cookie = `name=${nameEl.value}`;
    document.cookie = `instrument=${instrumentEl.value}`;
    document.cookie = `username=${usernameEl.value}`;
    document.cookie = `password=${passwordEl.value}`;

    usernameEl.value = "";
    instrumentEl.value = "";
    passwordEl.value = "";
    nameEl.value = "";
    emailEl.value = "";
}
