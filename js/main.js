'use strict'

var gMeme = {
    selectedImgId: '',
    selectedElImg: '',
    ctx: '',
    txts: [
        {
            line: '',
            size: 20,
            align: 'left',
            color: 'black'
        },
        {
            line: '',
            size: 20,
            align: 'left',
            color: 'black'
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

function updateMemeTextAligh(idx, elButton) {
    gMeme.txts[idx].align = elButton.value;
    renderCanvas()
}

function updateMemeTextColor(idx, elInput) {
    gMeme.txts[idx].color = elInput.value
    renderCanvas()
}




function renderCanvas() {
    var ctx = gMeme.ctx;
    var img = gMeme.selectedElImg;
    var txtAlign = alignText(0 , img)
    ctx.drawImage(img, 0, 0, img.width, img.height, );
    ctx.font = '400 ' + gMeme.txts[0].size + 'px Arial, sans-serif';
    ctx.fillStyle = gMeme.txts[0].color;
    ctx.textAlign = gMeme.txts[0].align;
    ctx.fillText(gMeme.txts[0].line, txtAlign , 30)
    ctx.font = '400 ' + gMeme.txts[1].size + 'px Arial, sans-serif';
    ctx.fillStyle = gMeme.txts[1].color;
    ctx.textAlign = gMeme.txts[1].align;
    ctx.fillText(gMeme.txts[1].line, txtAlign , 120)
}

function alignText(idx, img) {
    switch (gMeme.txts[idx].align) {
        case 'left':
            return 0
            break;
        case 'center':
            return (img.width/2)
            break;
        case 'right':
            return img.width
            break;
    }
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
    gMeme.ctx = ctx

    var elMain = document.querySelector('.images-container')
    elMain.classList.toggle('show')
}



