const shift = 3;

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

/* SPRACHEN */
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

/* POPUP */
languageBtn.onclick = () => {
  languagePopup.classList.toggle("hidden");
};

languagePopup.querySelectorAll("div").forEach(item => {
  item.onclick = () => {
    setLanguage(item.dataset.lang);
    languagePopup.classList.add("hidden");
  };
});

/* ENCODE */
encodeBtn.onclick = () => {
  output.innerText = encodeMessage(input.value);
};

/* DECODE */
decodeBtn.onclick = () => {
  output.innerText = decodeMessage(input.value);
};

/* RESET */
resetBtn.onclick = () => {
  input.value = "";
  output.innerText = "";
};

/* COPY */
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

/* ENCODE FUNCTION - unterstützt alle Zeichen */
function encodeMessage(text) {
  let result = "";
  for (let letter of text) {
    let code = letter.charCodeAt(0);
    result += String.fromCharCode(code + shift);
  }
  return result;
}

/* DECODE FUNCTION - unterstützt alle Zeichen */
function decodeMessage(text) {
  let result = "";
  for (let letter of text) {
    let code = letter.charCodeAt(0);
    result += String.fromCharCode(code - shift);
  }
  return result;
}

