function encryptText(text) {
    text = text.toLowerCase();
    text = text.replace(/e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");

    var showNoResult = document.getElementById("showNoResult");
    var resultText = document.getElementById("resultText");

    if (text.trim() === "") {
        showNoResult.style.display = "block";
        resultText.style.display = "none";
    } else {
        showNoResult.style.display = "none";
        resultText.style.display = "block";
    }

    return text;
}

function decryptText(text) {
    text = text.replace(/enter/g, "e");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ai/g, "a");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");
    return text;
}

function copyText() {
    var resultText = document.getElementById("resultText").textContent; // Cambiar resultText.value a resultText.textContent
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = resultText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
    alert("Text copied to clipboard!");
}

var encryptBtn = document.querySelector(".encryptBtn");
var decryptBtn = document.querySelector(".decryptBtn");
var copyBtn = document.querySelector("#forCopyText");
var forEncryptText = document.querySelector(".forEncryptText");
var resultText = document.querySelector("#resultText");

encryptBtn.addEventListener("click", function () {
    var inputText = forEncryptText.value;
    var encryptedText = encryptText(inputText);
    resultText.textContent = encryptedText; // Cambiar resultText.value a resultText.textContent
});

decryptBtn.addEventListener("click", function () {
    var inputText = forEncryptText.value;
    var decryptedText = decryptText(inputText);
    resultText.textContent = decryptedText; // Cambiar resultText.value a resultText.textContent
});

copyBtn.addEventListener("click", function () {
    copyText();
});

window.addEventListener("DOMContentLoaded", function () {
    var inputText = forEncryptText.value;
    showNoResult.style.display = inputText.trim() === "" ? "block" : "none";
});