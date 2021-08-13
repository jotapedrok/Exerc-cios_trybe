function sizePossibles(){
    let possibleFontSizes = [8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96];
    let sizeList = document.getElementById('fontsize');
    for(let i = 0; i < possibleFontSizes.length; i += 1) {
        let size = document.createElement('option');
        size.innerText = possibleFontSizes[i];
        sizeList.appendChild(size)
    }
}
sizePossibles();

function fontFamilyPossibles() {
    let possibleFontFamilys = ['Arial', 'Cambria', 'Georgia', 'Impact', 'Gill Sans', 'Times New Roman', 'Courier New', 'Lucida Sans'];
    let familyList = document.querySelector('#fontFamilyOpt');
    for(let i = 0; i < possibleFontFamilys.length; i += 1) {
        let family = document.createElement('option');
        family.innerText = possibleFontFamilys[i];
        familyList.appendChild(family)
    }
}

 fontFamilyPossibles();

// DESISTI DE USAR:
// function lineHeightPossibles() {
//     let possibleLineHeight = [0.75, 1, 1.5, 2, 2.5, 3, 4];
//     let heightList = document.querySelector('#lineHeight');
//     for(let i = 0; i < possibleLineHeight.length; i += 1) {
//         let height = document.createElement('option');
//         height.innerText = possibleLineHeight[i];
//         heightList.appendChild(height)
//     }
// }
// lineHeightPossibles();

function pasteText () {
    function pasting () {
        let inPasteBox = document.querySelector('.pasteTextBox').value;
        let spaceToPaste = document.querySelector('.textPasted');
        spaceToPaste.innerText = inPasteBox;
    }
    let botaoLer = document.querySelector('#lerButton')

    botaoLer.addEventListener('click', pasting)
}
pasteText()

let text = document.querySelector('.textPasted');

function changeFontSize () {
    let sizeSelected = document.querySelector('#tamanhoFonte').value;
    if (sizeSelected === "") {
        text.style.fontSize = "14px"
    } else {
   text.style.fontSize = sizeSelected + "px"
    }
}

let mudaFonte = document.querySelector('#tamanhoFonte');

mudaFonte.addEventListener('change', changeFontSize);

function changeFontFamily () {
    let fontSelected = document.querySelector('#fontFamilyOpt').value;

    text.style.fontFamily = fontSelected;
}

let mudaFamilia = document.querySelector('#fontFamilyOpt');

mudaFamilia.addEventListener('change', changeFontFamily);

function changeLineHeight () {
    let heightSelected = document.querySelector('#lineHeightSelect').value;
    if (heightSelected === "") {
        text.style.lineHeight = "1.25";
    } else {
   text.style.lineHeight = heightSelected;
    }
}

let mudaLineHeight = document.querySelector('#lineHeightSelect');

mudaLineHeight.addEventListener('change', changeLineHeight);

function changeColors () {
    function changeColorTxt () {
        let txtColorSelected = document.querySelector('#textoCor').value;
        text.style.color = txtColorSelected;
    }

    changeColorTxt();

    function changeColorBg () {
        let bgColorSelected = document.querySelector('#fundoCor').value;
        let bodyColor = document.querySelector('body').style.backgroundColor;
    bodyColor = bgColorSelected;

    }

    changeColorBg();
}

let botaoMudar = document.querySelector('.change');

botaoMudar.addEventListener('click', changeColors);
