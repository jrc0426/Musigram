
database.on('child_added', onClick);

let button = document.querySelector('.submit_button');
button.addEventListener('click', onClick);

let instrument_container = document.querySelector('.instrument_container');

function onClick(data)
{
    let value = data.val();
    let chosenInstrument= value.userInstrument;
}

instrument_container.append(value.userInstrument); 

let submitButton = document.querySelector('.submit_button');
submitButton.addEventListener("click",updateDb);

let instrument = document.querySelector('.selected_instrument');

function updateDb()
{
    const insData = instrument.value;
            let value = 
        {
            userInstrument: insData
        }
            database.push(value);
}
