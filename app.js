/*
 * Project:  banana-translation-app
 * File:      app.js
 * Author:   Amit Mishra (amit.mishra+CODA@gmail.com)
 *
 * Description:
 *
 * Revision History:
 *   2021-July-14:
 *
 * Copyright (c) 2021 Self
 *
 * License:
 *
 */

const translateBtn = document.querySelector(".translate-btn");
const textInput = document.querySelector(".textInput");
const outputTxt = document.querySelector(".outputTxt");

translateBtn.addEventListener("click", () => {
  console.log(textInput.value);
  outputTxt.innerText = "";
  fetch(
    `https://api.funtranslations.com/translate/yoda.json?text=${textInput.value}`
  )
    .then((res) => res.json())
    .then((output) => (outputTxt.innerText = output.contents.translated))
    .catch((error) => alert("error occured", error));
});

textInput.addEventListener(onchange, () => console.log("hi"));

//https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json
