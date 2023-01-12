function randomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

function guessButton() {
    let winningNumber = randomNumber();
    console.log(winningNumber);
    if (document.getElementById('1').id == winningNumber) {
        document.getElementById('1').innerHTML = "CORECT";
        document.getElementById("1").setAttribute("class", "btn btn-success");
    } else if (document.getElementById('2').id == winningNumber) {
        document.getElementById('2').innerHTML = "CORECT";
        document.getElementById("2").setAttribute("class", "btn btn-success");
    } else if (document.getElementById('3').id == winningNumber) {
        document.getElementById('3').innerHTML = "CORECT";
        document.getElementById("3").setAttribute("class", "btn btn-success");
    }
    
}