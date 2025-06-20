const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

function checkPalindrome(text) {
  if (!text) {
    alert('Please input a value');
    return;
  }

  if (text.length === 1) {
    displayResult(`${text} is a palindrome.`);
  } else if (normalizeText(text) === reverseText(normalizeText(text))) {
    displayResult(`${text} is a palindrome.`);
  } else {
    displayResult(`${text} is not a palindrome.`);
  }

  textInput.value = '';
}

const reverseText = text => text.split('').reverse().join('');

const normalizeText = text => text.toLowerCase().replace(/[^a-z0-9]/g, '');

const displayResult = message => result.innerText = message;

checkBtn.onclick = () => checkPalindrome(textInput.value);

textInput.onkeydown = function(event) {
  if (event.key === 'Enter') {
    checkPalindrome(textInput.value);
  }
};
