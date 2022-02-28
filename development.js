const textarea = document.getElementById('textarea');
let totalCounter = document.getElementById('total-counter');
let remainingCounter = document.getElementById('remaining-counter');
let userCharacter = 0;
const updateCounter = () => {
     userCharacter = textarea.value.length;
     totalCounter.innerText = userCharacter;
     remainingCounter.innerText = 150 - userCharacter;
};
textarea.addEventListener('keyup',updateCounter);
const copyText = () => {
     textarea.select();
     textarea.setSelectionRange(0,99999);
     navigator.clipboard.writeText(textarea.value);
};