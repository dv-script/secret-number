console.log(secretNumber);

function ifGuessIsValid(guess) {
    
    const number = +guess;

    if (invalidGuess(number)) {
        guessElement.innerHTML += `
            <div>Invalid value: The secret number have to be a number</div>
        `
        return;
   }

    if (numberBiggerThanAllowed(number)) {
        guessElement.innerHTML += `
            <div>Invalid value: The secret number have to be between ${smallerValue} and ${biggerValue}</div>
        `
        return;
    }

    if (number === secretNumber) {
        document.body.innerHTML = `
            <h2>You're right</h2>
            <h3>The secret number was ${secretNumber}</h3>
            <button id="again-button">Play Again</button>
        `
    } else if (number < secretNumber) {
        guessElement.innerHTML += `
            <div>The secret number is bigger <i class="fa-solid fa-up-long"></i></div>
        `
    } else {
        guessElement.innerHTML += `
            <div>The secret number is smaller <i class="fa-solid fa-down-long"></i></div>
        `
    }

}

function numberBiggerThanAllowed(number) {
    return number > biggerValue || number < smallerValue;
}

function invalidGuess(number) {
    return Number.isNaN(number);
}

document.body.addEventListener("click", e => {
    if (e.target.id == "again-button"){
        window.location.reload();
    }
});