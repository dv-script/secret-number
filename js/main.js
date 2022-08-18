const smallerValue = 1;
const biggerValue = 1000;

const secretNumber = getAleatoryNumber();

function getAleatoryNumber() {
    return parseInt(Math.random() * biggerValue+1);
}

const smallerValueElement = document.querySelector("#smaller-value");
smallerValueElement.innerHTML = smallerValue;

const biggerValueElement = document.querySelector("#bigger-value");
biggerValueElement.innerHTML = biggerValue;
