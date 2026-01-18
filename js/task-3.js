const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');



nameInput.addEventListener('input', (event) => {
    const trimmedValue = event.currentTarget.value.trim();
    nameOutput.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});
console.log(nameInput.textContent);