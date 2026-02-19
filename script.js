/* =========================
   ALGORITHMEN & SCHLÜSSEL
   ========================= */
const algorithms = {
  "a": [1, 5, -2, -5, 5, -6, 6, 9, -9], // Algorithmus 1
  "b": [3, -1, 4, -3, 2, -4, 1, 0, 5],  // Algorithmus 2
  "c": [2, -3, 7, -2, 3, -5, 4, -1, 6], // Algorithmus 3
  "d": [5, -2, 3, -4, 6, -1, 2, -3, 7]  // Algorithmus 4
};

const algoKeys = Object.keys(algorithms);

/* =========================
   DOM ELEMENTE
   ========================= */
const input = document.getElementById("input");
const output = document.getElementById("output");

const encodeBtn = document.getElementById("encodeBtn");
const decodeBtn = document.getElementById("decodeBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const languageBtn = document.getElementById("languageBtn");
const languagePopup = document.getElementById("languagePopup");

const title = document.getElementById("title");
const resultLabel = document.getElementById("resultLabel");

/* =========================
   SPRACHEN
   ========================= */
const translations = {
  de: {
    title: "Nachricht Encoder und Decoder",
    placeholder: "Nachricht eingeben",
    encode: "Encode",
    decode: "Decode",
    reset: "Neue Eingabe",
    result: "Ergebnis:",
    copy: "In Zwischenablage kopieren",
    copied: "Kopiert!",
    noText: "Kein Text zum Kopieren vorhanden!",
    copyError: "Fehler beim Kopieren"
  },
  en: {
    title: "Message Encoder and Decoder",
    placeholder: "Enter message",
    encode: "Encode",
    decode: "Decode",
    reset: "New Message",
    result: "Result:",
    copy: "Copy to clipboard",
    copied: "Copied!",
    noText: "No text to copy!",
    copyError: "Copy error"
  }
};

/* =========================
   SPRACHEN SETZEN
   ========================= */
function getBrowserLanguage() {
  const saved = localStorage.getItem("lang");
  if (saved) return saved;

  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("de")) return "de";

  return "en";
}

let currentLang = getBrowserLanguage();

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  const t = translations[lang];

  title.innerText = t.title;
  input.placeholder = t.placeholder;
  encodeBtn.innerText = t.encode;
  decodeBtn.innerText = t.decode;
  resetBtn.innerText = t.reset;
  resultLabel.innerText = t.result;
  copyBtn.innerText = t.copy;

  languageBtn.innerText =
    lang === "de" ? "🇩🇪 Deutsch" : "🇬🇧 English";
}

setLanguage(currentLang);

/* =========================
   SPRACHEN POPUP
   ========================= */
languageBtn.onclick = () => {
  languagePopup.classList.toggle("hidden");
};

languagePopup.querySelectorAll("div").forEach(item => {
  item.onclick = () => {
    setLanguage(item.dataset.lang);
    languagePopup.classList.add("hidden");
  };
});

/* =========================
   BUTTONS
   ========================= */
encodeBtn.onclick = () => {
  output.innerText = encodeMessage(input.value);
};

decodeBtn.onclick = () => {
  output.innerText = decodeMessage(input.value);
};

resetBtn.onclick = () => {
  input.value = "";
  output.innerText = "";
};

copyBtn.onclick = () => {
  const t = translations[currentLang];
  if (output.innerText) {
    navigator.clipboard.writeText(output.innerText)
      .then(() => {
        copyBtn.innerText = t.copied;
        setTimeout(() => {
          copyBtn.innerText = t.copy;
        }, 1000);
      })
      .catch(() => alert(t.copyError));
  } else {
    alert(t.noText);
  }
};

/* =========================
   VERSCHLÜSSELUNG
   ========================= */

// Algorithmus zufällig wählen
function chooseAlgorithm() {
  return algoKeys[Math.floor(Math.random() * algoKeys.length)];
}

// ENCODE
function encodeMessage(text) {
  if (!text) return "";

  const algoStart = chooseAlgorithm();
  const shifts = algorithms[algoStart];
  let result = "";

  for (let i = 0; i < text.length; i++) {
    const code = text[i].charCodeAt(0);
    const shift = shifts[i % shifts.length];
    result += String.fromCharCode(code + shift);
  }

  // Endbuchstabe leicht verschlüsseln, basiert auf algoStart
  const randomShift = Math.floor(Math.random() * 5) + 1; // 1-5
  const algoEnd = String.fromCharCode(algoStart.charCodeAt(0) + randomShift);

  result = algoStart + result + algoEnd;
  return result;
}

// DECODE
function decodeMessage(text) {
  if (!text || text.length < 2) return "";

  const algoStart = text[0];
  const shifts = algorithms[algoStart];
  let result = "";

  for (let i = 1; i < text.length - 1; i++) {
    const code = text[i].charCodeAt(0);
    const shift = shifts[(i - 1) % shifts.length];
    result += String.fromCharCode(code - shift);
  }

  return result;
}
