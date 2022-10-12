const changeText = () => {
    const p = document.querySelector ('p');
    
    p.textContent = "I changed because of an event handler.";
}

const button = document.querySelector('button');
button.onclick = changeText;
