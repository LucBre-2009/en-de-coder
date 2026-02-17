# EN-DE Coder

**Description:**
EN-DE Coder is a simple encoder/decoder for messages with a fixed character shift of 3 (Caesar cipher). The web version runs entirely client-side in HTML, CSS, and JavaScript and can be hosted directly on GitHub Pages. It supports German umlauts (ä, ö, ü) and spaces.


---

## Functions

* Encode message (Encode)
* Decode message (Decode)

* **New Input**: Clears the text box and the result field

* **Copy to Clipboard**: Copys the result directly

**Futuristic, neutral background** with a light center for better readability

---

## File Structure

```
en-de-coder/
├─ index.html # Main page
├─ style.css # Page styling
├─ script.js # JavaScript for encoder/decoder
└─ background.png # Background image
```

---

## Installation / Usage

1. Upload all files to a GitHub repository.

2. Activate GitHub Pages (branch `main` or `gh-pages`) → the page is available online.

3. Open in a browser, e.g. B.:

`https://lucbre-2009.github.io/en-de-coder/`

4. Enter message in the text field → Click Encode/Decode → Result appears.

5. Optional: Click the "New Input" button to delete the text and result.

6. Optional: Click the "Copy to Clipboard" button to copy the result text.

---

## Technologies

* HTML5
* CSS3
* JavaScript (ES6+)

---

## Background

* The background image is subtle, modern, and futuristic, with a light center for optimal readability of the input and output boxes.

* No server components required → runs entirely in the browser.

---

## Customizations

* Alphabet and shift can be changed in `script.js` (`alphabet` and `shift`).

* Styling and colors can be customized in `style.css`.

* The background image can be replaced with a custom image (`background.png`).


---

## GitHub Pages

1. Create a repository on GitHub or use an existing one.

2. Upload the files `index.html`, `style.css`, `script.js`, and `background.png`.

3. Under Repository → Settings → Pages → Select Branch (`main` or `gh-pages`) → Save.

4. The page will automatically go live at `https://USERNAME.github.io/REPOSITORYNAME/`.
