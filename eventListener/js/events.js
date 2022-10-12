const changeText = () => {
    p.textContent = "I changed because of an event listener."
}

const alertText = () => {
    alert('Will I alert?');
}

const button = document.querySelector('button');
const p = document.querySelector('p');

button.addEventListener('click', changeText);
button.addEventListener('click', alertText);

button.addEventListener('click', () => {
    p.textContent = "Will I change?";
});
