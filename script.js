const alphabet = "abcdefghijklmnopqrstuvwxyzäöü1234567890+"§€%&/()='#—ˋ´…@n:,.!?- ";
const shift = 3;

const input = document.getElementById("input");
const output = document.getElementById("output");
const encodeBtn = document.getElementById("encodeBtn");
const decodeBtn = document.getElementById("decodeBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

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

copyBtn.addEventListener("click", () => {
    if (output.innerText) {
        navigator.clipboard.writeText(output.innerText)
            .then(() => {
                copyBtn.classList.add('copied');
                setTimeout(() => {
                    copyBtn.classList.remove('copied');
                }, 300);
            })
            .catch(err => alert("Fehler beim Kopieren: " + err));
    } else {
        alert("Kein Text zum Kopieren vorhanden!");
    }
});

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

