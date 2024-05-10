// Function to generate a random key for substitution
export function generateKey() {
  let key = {};
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let shuffledAlphabet = alphabet.split("").sort(() => Math.random() - 0.5);

  for (let i = 0; i < alphabet.length; i++) {
    key[alphabet[i]] = shuffledAlphabet[i];
  }

  return key;
}

// Encrypt function using substitution cipher
export function encrypt(text, key) {
  let encryptedText = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i].toUpperCase();
    if (key[char]) {
      encryptedText += key[char];
    } else {
      encryptedText += char;
    }
  }

  return encryptedText;
}

// Decrypt function using substitution cipher
export function decrypt(text, key) {
  let decryptedText = "";

  for (let i = 0; i < text.length; i++) {
    let char = text[i].toUpperCase();
    let reversedKey = Object.entries(key).find(([k, v]) => v === char);
    if (reversedKey) {
      decryptedText += reversedKey[0];
    } else {
      decryptedText += char;
    }
  }

  return decryptedText;
}
