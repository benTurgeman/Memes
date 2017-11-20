'use strict'

var gCanvas;

var gMeme = {
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

function updateMemeImage(elImg) {
    var img = elImg;
    gMeme.selectedImgId = elImg.id;
    renderCanvas()
}

function updateMemeText(idx, elInput) {
    var inputBox = elInput.value;
    gMeme.txts[idx].line = inputBox;
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

function changeTextHeight(idx ,value) {
    switch (value) {
        case 'plus':
            gMeme.txts[idx].height -= 5
            break;
        case 'minus':
            gMeme.txts[idx].height += 5
            break;
        default:
            break;
    }
    renderCanvas()
}



function renderCanvas() {
    var ctx = gMeme.ctx;
    var img = gMeme.selectedElImg;
    var txtAlign = alignText(0, gCanvas)
    ctx.drawImage(img, 0, 0, 340, 260);
    ctx.restore()
    ctx.font = '400 ' + gMeme.txts[0].size + 'px Impact, sans-serif';
    ctx.fillStyle = gMeme.txts[0].color;
    ctx.textAlign = gMeme.txts[0].align;
    ctx.fillText(gMeme.txts[0].line, txtAlign, gMeme.txts[0].height)
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.strokeText(gMeme.txts[0].line, txtAlign, gMeme.txts[0].height);
    var txtAlign = alignText(1, gCanvas)
    ctx.font = '400 ' + gMeme.txts[1].size + 'px Impact, sans-serif';
    ctx.fillStyle = gMeme.txts[1].color;
    ctx.textAlign = gMeme.txts[1].align;
    ctx.fillText(gMeme.txts[1].line, txtAlign, gMeme.txts[1].height)
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.strokeText(gMeme.txts[1].line, txtAlign, gMeme.txts[1].height);
}


function renderWorkZone(elImg) {
    var img = elImg
    var canvas = document.querySelector('.canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 340;
    canvas.height = 260;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    gMeme.selectedImgId = +elImg.id;
    gMeme.selectedElImg = elImg;
    gMeme.ctx = ctx;
    gCanvas = canvas;

    var elImgs = document.querySelector('.images-container')
    var elCanvas = document.querySelector('.canvas-modal')
    elImgs.style.display = 'none';
    elCanvas.style.display = 'flex';
}

function alignText(idx, img) {
    switch (gMeme.txts[idx].align) {
        case 'left':
            return 0
            break;
        case 'center':
            return (img.width / 2)
            break;
        case 'right':
            return img.width
            break;
    }
}

// function addLine() {
//     gMeme.txts.push({
//         line: '',
//         size: 20,
//         align: 'left',
//         color: 'black',
//         height: 30
//     }, )
//     gMeme.lineIdx++
//     document.querySelector('.canvas-text-input').value = ''
// }

function downloadMeme(elBtn){
    elBtn.href = document.querySelector('.canvas').toDataURL();
    elBtn.download = 'YourMeme.png';
}