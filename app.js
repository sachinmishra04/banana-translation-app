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

const translateBtn=document.querySelector(".translate-btn");
const textInput=document.querySelector(".textInput");
console.log(translateBtn)

translateBtn.addEventListener("click", function show(){
    alert("hi ji")
});

textInput.addEventListener(onchange,()=>console.log("hi"))