let winningNumber = 0;

function nrButtons() {
    let input = Number(document.getElementById("userInput").value);
    for (let i = 1; i <= input; ++i) {
        document.getElementById('inputButtons').innerHTML += `
        <button id="${i}" style="height:50px;width:100px" type="button" class="btn btn-primary" onclick="guessButton(this.id)"></button>
        `;
        if(i % 6 == 0) {
            document.getElementById('inputButtons').innerHTML += `
            <br></br>`;  
        }
    }  
    winningNumber = Math.floor(Math.random() * winningNumber) + 1;
    return input;  
}


function guessButton(clicked_id) {
    console.log(winningNumber);
    if (document.getElementById(clicked_id).id == winningNumber) {
        document.getElementById(clicked_id).innerHTML = "CORRECT";
    } else {
        document.getElementById(clicked_id).innerHTML = "WRONG";
    }
}
