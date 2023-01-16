function randomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

function guessButton(clicked_id) {
    let winningNumber = randomNumber();
    console.log(winningNumber);
    if (document.getElementById(clicked_id).id == winningNumber) {
        document.getElementById(clicked_id).innerHTML = "CORRECT";
    } else {
        document.getElementById(clicked_id).innerHTML = "WRONG";
    }
}
