const keylogger = document.querySelector('#keylogger');

keylogger.addEventListener('keydown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    keylogger.innerHTML += e.key + e.key;
});


document.addEventListener('keydown', (e) => {
    document.getElementById("keylogger").textContent += e.key;
});
