'use strict'


var gImgs;

function initPage() {
    getImgs()
    renderImgs(gImgs)
}

function uploadNewImage(elInput) {
    var tempCanvas = document.querySelector('.temp-canvas')
    var canvas = document.querySelector('.canvas')
    var ctx = canvas.getContext('2d');
    var reader = new FileReader();
    var file = elInput.files[0];
    // load to image to get it's width/height
    var newImg = new Image();
    newImg.onload = function () {
        // scale canvas to image
        // draw image
        ctx.drawImage(newImg, 0, 0
            , canvas.width, canvas.height
        );
    }
    // this is to setup loading the image
    reader.onloadend = function () {
        newImg.src = reader.result;
    }
    // this is to read the file
    reader.readAsDataURL(file);
    renderWorkZone(tempCanvas)
}

function goBackToImgs() {
    var elImgs = document.querySelector('.images-container')
    var elCanvas = document.querySelector('.canvas-modal')
    elImgs.style.display = 'flex';
    elCanvas.style.display = 'none';

    gMeme = {
        selectedImgId: '',
        selectedElImg: '',
        ctx: '',
        txts: [
            {
                line: '',
                size: 45,
                align: 'center',
                color: 'white',
                height: 40
            },
            {
                line: '',
                size: 45,
                align: 'center',
                color: 'white',
                height: 240
            },
        ]
    }
    var elInput = document.querySelectorAll('#text')
    elInput.forEach(function (elText) {
        elText.value = ''
    })
}


function renderImgs(imgs) {
    var elImagesContainer = document.querySelector('.images-container')
    var strHtml = ''
    imgs.forEach(function (img) {
        strHtml +=
            `<div class="image-container">
        <img class="canvas-image" id="pic-${img.idx}" src="images/${img.idx}.jpg" onclick="renderWorkZone(this)"/>
    </div>`
    });
    elImagesContainer.innerHTML = strHtml
}


function getImgs() {
    var imgs = [{
        idx: 0,
        keywords: ['game of Thrones', 'state', 'funny', 'guy', 'man'],
    },
    {
        idx: 1,
        keywords: ['cartoon', 'wonder', 'funny', 'man']
    },
    {
        idx: 2,
        keywords: ['man', 'shouting', 'ars',]
    },
    {
        idx: 3,
        keywords: ['girl', 'ask', 'wtf']
    },
    {
        idx: 4,
        keywords: ['ars', 'shout', 'man']
    },
    ]

    gImgs = imgs;
}



function createImage(idx, keywords) {
    var img = {
        idx: '',
        keywords: ['', '']
    }
}

function imgSearchBar() {
    var searchWord = document.querySelector('#searchBar');
    var searchTxt = searchWord.value;
    var tempImgs = [];
    if (searchTxt === 'What are you looking for?') {
        renderImgs(gImgs)
        return;
    }

    gImgs.forEach(function (img, idx) {
        // console.log('img',img.keywords);
        //console.log('idx',idx);
        var keywords = img.keywords;

        keywords.forEach(function (keyword) {
            if (keyword === searchTxt) {
                tempImgs.push(img);
                console.log(tempImgs)
            }
        });

    });
    renderImgs(tempImgs);
}

function toggleNavButtons() {
    var navBtns = document.querySelector('.nav-buttons')
    if (navBtns.style.display == '' || navBtns.style.display == "none") {
        navBtns.style.display = 'flex';
    } else {
        navBtns.style.display = 'none';
    }

}

