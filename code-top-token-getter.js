// ==UserScript==
// @name         CodeTop Token获取
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  获得CodeTop 登录后的token
// @author       Leochens
// @match        https://codetop.cc/home
// @icon         https://www.google.com/s2/favicons?sz=64&domain=codetop.cc
// @grant        none
// @license MIT
// ==/UserScript==

window.onload = function () {
    'use strict';
    var main = document.getElementsByTagName("main")
    console.log(main, localStorage.token)
    if (localStorage.token && main[0]) {
        main[0].firstChild.prepend(function () {
            let d = document.createElement("div");
            d.innerHTML = `您的token: ${localStorage.token}`
            return d
        }())
    }
}