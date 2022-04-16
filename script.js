// ==UserScript==
// @name         Formularze
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       DocentSzachista
// @match        https://docs.google.com/forms/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // example values for 10 fields in google form 
    let users = ["example",
                 "example",
                 "example",
                 "example",
                 "example",
                 "example",
                 "example",
                 "example",
                 "example",
                 "example",
                 "example"];

    const EVENT_OPTIONS = {bubbles: true, cancelable: false, composed: true};
    const EVENTS = {
    BLUR: new Event("blur", EVENT_OPTIONS),
    CHANGE: new Event("change", EVENT_OPTIONS),
    INPUT: new Event("input", EVENT_OPTIONS),
    };

    
    let elem = document.querySelectorAll(".whsOnd");
    let button = document.querySelector("#mG61Hd > div.RH5hzf.RLS9Fe > div > div.ThHDze > div.DE3NNc.CekdCb > div.lRwqcd > div > span > span" );
    let len = elem.length;
    for (let iterator = 0; iterator < len ; iterator ++ )
    {
       //elem[iterator].select();
       elem[iterator].value= "";
       elem[iterator].value = users[iterator];
       elem[iterator].dispatchEvent(EVENTS.INPUT);

    }
    button.click();
    // Your code here...
})();
