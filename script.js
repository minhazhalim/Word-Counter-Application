function atLeastTwoCharacters(text){
  const letters = text.match(/[a-z]/gi) || [];
  return letters.length >= 2;
}
function abscenceOfThreeConsecutiveCharacters(text){
  for(const character of text){
    const occurrences = Array.from(text).filter((v) => v == character).length;
    if(occurrences >= 3) return false;
  }
  return true;
}
const checks = [atLeastTwoCharacters,abscenceOfThreeConsecutiveCharacters];
const textInput = document.querySelector('.text-input');
const wordCount = document.querySelector('.word-count');
const letterCount = document.querySelector('.letter-count');
const spaceCount = document.querySelector('.space-count');
textInput.addEventListener('input',() => {
  const splitted = textInput.value.trim().split(/[\s-]/);
  const letterCounting = (textInput.value.match(/[a-z]/gi) || []).length;
  const spaceCounting = (textInput.value.match(/\s+/g) || []).length;
  let wordCounting = 0;
  outer: for(const text of splitted){
    for(const check of checks){
      if(!check(text)){
        continue outer;
      }
    }
    wordCounting++;
  }
  wordCount.textContent = wordCounting;
  letterCount.textContent = letterCounting;
  spaceCount.textContent = spaceCounting;
});