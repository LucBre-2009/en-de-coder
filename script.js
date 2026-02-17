const alphabet = "abcdefghijklmnopqrstuvwxyzäöü ";
const shift = 3;

const input = document.getElementById("input");
const output = document.getElementById("output");
const encodeBtn = document.getElementById("encodeBtn");
const decodeBtn = document.getElementById("decodeBtn");
const resetBtn = document.getElementById("resetBtn");

encodeBtn.addEventListener("click", () => {
    output.innerText = encodeMessage(input.value);
});

decodeBtn.addEventListener("click", () => {
    output.innerText = decodeMessage(input.value);
});

resetBtn.addEventListener("click", () => {
    input.value = "";
    output.innerText = "";
});

// Encode-Funktion
function encodeMessage(text) {
    text = text.toLowerCase();
    let result = "";
    for (let letter of text) {
        if (alphabet.includes(letter)) {
            const pos = alphabet.indexOf(letter);
            result += alphabet[(pos + shift) % alphabet.length];
        } else {
            result += letter;
        }
    }
    return result;
}

// Decode-Funktion
function decodeMessage(text) {
    text = text.toLowerCase();
    let result = "";
    for (let letter of text) {
        if (alphabet.includes(letter)) {
            const pos = alphabet.indexOf(letter);
            result += alphabet[(pos - shift + alphabet.length) % alphabet.length];
        } else {
            result += letter;
        }
    }
    return result;
}
