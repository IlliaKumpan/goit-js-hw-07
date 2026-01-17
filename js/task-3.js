const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

console.log(nameInput.textContent);

nameInput.addEventListener('input', (event) => {
    nameOutput.textContent = event.currentTarget.value.trim() === '' ? 'Anonymous' : event.currentTarget.value;
});
