'use strict'

var gMeme = {
    selectedImgId: 5,
    selectedElImg: '',
    txts: [
        {
            line: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red'
        }
    ]
}

function updateMemeImage(elImg) {
    var img = elImg
    gMeme.selectedImgId = elImg.id;
    renderCanvas()
}

function updateMemeText(idx) {
    var inputBox = document.querySelector(`#text${idx}`)
    gMeme.txts[idx].line = inputBox.value
    renderCanvas()
}

function updateMemeTextSize(idx, value) {
    switch (value) {
        case 'plus':
            gMeme.txts[idx].size++
            break;
        case 'minus':
            gMeme.txts[idx].size--
            break;
    }
    renderCanvas()
}

function updateMemeTextAligh(idx, value) {
    switch (value) {
        case 'center':
            console.log('center text')
            break;
        case 'right':
            console.log('move text right')
            break;
        case 'left':
            console.log('move text left')
            break;
    }
    renderCanvas()
}

function updateMemeTextColor(idx , color) {
    gMeme.txt[idx].color = color
    renderCanvas()
}

function renderWorkZone(elImg) {
    var img = elImg
    var canvas = document.querySelector('.canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = img.width
    canvas.height = img.height
    ctx.drawImage(img, 0, 0, img.width, img.height, )
    gMeme.selectedImgId = +elImg.id;
    gMeme.selectedElImg = elImg
}


function renderCanvas() {
    var canvas = document.querySelector('.canvas');
    var ctx = canvas.getContext('2d');
    var img = gMeme.selectedElImg
    canvas.width = img.width
    canvas.height = img.height
    ctx.drawImage(img, 0, 0, img.width, img.height, )
    ctx.font = '400 ' + gMeme.txts[0].size +'px Arial, sans-serif';
    ctx.fillStyle = `${gMeme.txts[0].color}`;
    ctx.fillText(gMeme.txts[0].line , 0 , 50)
}
