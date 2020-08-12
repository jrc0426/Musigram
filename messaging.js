const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here
const database = firebase.database().ref();

/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    console.log(username + " : " + message);

    //Update database here
let value = {
    name: username,
    message: message
}
database.push(value);
}

// Set database "child_added" event listener here
database.on('child_added', addMessage);

let allMessages = document.querySelector('.allMessages')

function addMessage(data){
    let value = data.val();
    let name = value.name;
    let message = value.message;

    let p = document.createElement('p');
    p.innerText = name + ": " + message;
    allMessages.appendChild(p);
}