'use strict'
var gImgs;


function initPage() {
    tempImgs()
    renderImgs()
}

function toggleNav() {
    var elNav = document.querySelector('.nav-wrapper')
    elNav.classList.toggle('hide')
}

function renderImgs() {
    var elImagesContainer = document.querySelector('.images-container')
    var strHtml = ''
    gImgs.forEach(function(img) {
        strHtml +=
        `<div class="image-container">
        <div class="tool-bar-container">tool-bar</div>
        <img class="canvas-image" src="images/${img.idx}.jpg" />
    </div>`
    });
    elImagesContainer.innerHTML = strHtml
}

function tempImgs(){
    var imgs =[]
    var img1 = {
        idx: 1,
        keywords: ['game of Thrones','state','funny']
    }
    var img2 = {
        idx: 2,
        keywords: ['cartoon', 'wonder', 'funny']
    }
    imgs.push(img1)
    imgs.push(img2)
    gImgs = imgs;
}



function createImage(idx, keywords){
    var img = {
        idx: '',
        keywords: ['','']
    }
}