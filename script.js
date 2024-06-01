function caesarCipher(message, shift) {
  // add your code here
	shift = shift % 26;

    // Helper function to shift a character
    function shiftChar(char, shift, startCharCode) {
        return String.fromCharCode(((char.charCodeAt(0) - startCharCode + shift + 26) % 26) + startCharCode);
    }

    // Transform the message
    let result = '';
    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        if (char >= 'A' && char <= 'Z') {
            result += shiftChar(char, shift, 'A'.charCodeAt(0));
        } else if (char >= 'a' && char <= 'z') {
            result += shiftChar(char, shift, 'a'.charCodeAt(0));
        } else {
            result += char;
        }
    }

    return result;
}

// Do not change this line
window.caesarCipher = caesarCipher;
