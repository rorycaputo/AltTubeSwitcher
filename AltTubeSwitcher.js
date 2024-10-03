// ==UserScript==
// @name     AltTube Switcher
// @description Easily jump between different youtube alternates.
// @version  0.0.1
// @include *inv.*
// @include *invidious.*
// @include *invidio.*
// @include *yewtu.be/*
// @include *piped*
// @include *viewtube.io*
// @include *youtube.com*
// @include *youtu.be*
// @grant none
// @namespace https://github.com/rorycaputo
// @licence GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @homepageURL https://github.com/rorycaputo
// @icon https://youtube.com/favicon.ico
// ==/UserScript==

// @updateURL todo
// @downloadURL todo

function getUrlPath() {
    return (window.location.pathname+window.location.search).substr(1);
}

function getInvidiousUrl() {
    return "https://yewtu.be/" + getUrlPath()
}

function getPipedUrl() {
    return "https://piped.kavin.rocks/" + getUrlPath()
}

function getViewTubeUrl() {
    return "https://viewtube.io/" + getUrlPath()
}

let buttonContainer = document.createElement("div");
buttonContainer.id = "buttonContainer"
buttonContainer.style.display = "flex"
// buttonContainer.style.width = "auto"
// buttonContainer.style.height = "auto"
buttonContainer.style.zIndex = 99999
buttonContainer.style.position = "absolute"
buttonContainer.style.left = "0px"
buttonContainer.style.top = "0px"
buttonContainer.style.padding = "3px"
buttonContainer.style.gap = "3px"

let invButton = document.createElement("a")
invButton.href = getInvidiousUrl();
invButton.textContent = "Invidious";
invButton.style.border = "1px outset buttonborder"
invButton.style.borderRadius = "3px"
invButton.style.padding = "1px 6px"
invButton.style.textDecoration = "none"
// invButton.style.color = "buttontext"
invButton.style.backgroundColor = "blue"
invButton.style.zIndex = 99999
buttonContainer.appendChild(invButton)

let pipedButton = document.createElement("a")
pipedButton.href = getPipedUrl();
pipedButton.textContent = "Piped";
pipedButton.style.border = "1px outset buttonborder"
pipedButton.style.borderRadius = "3px"
pipedButton.style.padding = "1px 6px"
pipedButton.style.textDecoration = "none"
// pipedButton.style.color = "buttontext"
pipedButton.style.backgroundColor = "red"
pipedButton.style.zIndex = 99999
buttonContainer.appendChild(pipedButton)

let viewTubeButton = document.createElement("a")
viewTubeButton.href = getPipedUrl();
viewTubeButton.textContent = "ViewTube";
viewTubeButton.style.border = "1px outset buttonborder"
viewTubeButton.style.borderRadius = "3px"
viewTubeButton.style.padding = "1px 6px"
viewTubeButton.style.textDecoration = "none"
// viewTubeButton.style.color = "buttontext"
viewTubeButton.style.background = "orange"
viewTubeButton.style.zIndex = 99999
buttonContainer.appendChild(viewTubeButton)

document.body.appendChild(buttonContainer);
  
document.onfullscreenchange = function (event) {
    if (document.fullscreenElement) {
        document.body.removeChild(buttonContainer)
        // document.body.removeChild(invButton)
        // document.body.removeChild(pipedButton)
        // document.body.removeChild(viewTubeButton)
    }
    else {
        document.body.appendChild(buttonContainer)
        // document.body.appendChild(invButton)
        // document.body.appendChild(pipedButton)
        // document.body.appendChild(viewTubeButton)
    }
}
  
  // {{{ changelog :
  
  // [2024-10-01 Wed] Hello
  
  // }}}
  
  // {{{ contact :
  
  // }}}
  