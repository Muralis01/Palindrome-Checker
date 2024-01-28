
document.getElementById('check-btn').addEventListener('click', function() {
    var userInput = document.getElementById('text-input').value;
    var resultElement = document.getElementById('result');
  
    if (!userInput.trim()) {
      alert('Please input a value.');
    } else {
      var isPalindrome = checkPalindrome(userInput);
      resultElement.textContent = isPalindrome ? userInput + ' is a palindrome.' : userInput + ' is not a palindrome.';
    }
  });
  
  function checkPalindrome(str) {
        let onlyLetters = str.toLowerCase().match(/[a-z0-9]/g);
      
    return onlyLetters.join("")==onlyLetters.reverse().join("");
  }
  