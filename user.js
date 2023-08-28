// ==UserScript==
// @name         刷功德
// @namespace    https://xn--4pv000j.online
// @version      0.1
// @description  自动敲木鱼，保你功德满满
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    console.log("程序已初始化");
    function clickImage() {
        const imageElement = document.querySelector('.woodfish img');
        if (imageElement) {
            console.log("功德满满");
            imageElement.click();
        }
    }
    //点击速为100cps
    setInterval(clickImage, 1);
})();
