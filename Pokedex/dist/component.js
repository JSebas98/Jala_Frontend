/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/pokemon-card.js":
/*!********************************!*\
  !*** ./src/js/pokemon-card.js ***!
  \********************************/
/***/ (() => {

eval("/**\r\n * Pokemon Card Web Component\r\n */\r\nconst template = document.createElement('template');\r\n\r\ntemplate.innerHTML = `\r\n<style>\r\n    .pokemon-card {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        flex-direction: column;\r\n\r\n        background-color: #fff;\r\n        margin: 10px;\r\n        border-radius: 20px;\r\n    }\r\n\r\n    .pokemon-name {\r\n        color: #fff;\r\n        font-family: Arial, Helvetica, sans-serif;\r\n        font-size: 20px;\r\n        text-transform: capitalize;\r\n    }\r\n</style>\r\n\r\n<div class=\"pokemon-card\">\r\n    <div class=\"pokemon-image\">\r\n        <img src=\"\" class=\"p-image\" />\r\n    </div>\r\n    <div class=\"pokemon-name\">\r\n        <p class=\"p-name\"></p>\r\n    </div>\r\n</div>\r\n`\r\n\r\nclass PokemonCard extends HTMLElement{\r\n\r\n    constructor(){\r\n        super();\r\n        let shadow = this.attachShadow({ mode: \"open\" });\r\n        let content = template.content.cloneNode(true);\r\n\r\n        content.querySelector(\"div.pokemon-card>.pokemon-image>img\").setAttribute(\"src\", this.getAttribute(\"p-image\"));\r\n        content.querySelector(\"div.pokemon-card>.pokemon-name>p\").innerText = this.getAttribute(\"p-name\");\r\n        content.querySelector(\".pokemon-card\").style.backgroundColor = this.getAttribute(\"color\");\r\n\r\n        // Change color to black if background color is white or yellow\r\n        if (this.getAttribute(\"color\") == \"#fbf6f6\" ||\r\n            this.getAttribute(\"color\") == \"#f0f060e6\") {\r\n                content.querySelector(\"div.pokemon-card>.pokemon-name\").style.color = \"#000000\";\r\n            }\r\n\r\n        shadow.appendChild(content);\r\n    }\r\n}\n\n//# sourceURL=webpack://pokedex/./src/js/pokemon-card.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/pokemon-card.js"]();
/******/ 	
/******/ })()
;