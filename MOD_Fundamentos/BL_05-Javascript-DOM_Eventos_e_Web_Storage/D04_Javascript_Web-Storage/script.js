    window.onload = function () {

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

    function pasteText () {
        function pasting () {
            let inPasteBox = document.querySelector('.pasteTextBox').value;
            let spaceToPaste = document.querySelector('.textPasted');
            spaceToPaste.innerText = inPasteBox;
            localStorage.setItem('textoEscito', spaceToPaste.innerText);
        }
        let botaoLer = document.querySelector('#lerButton');

        botaoLer.addEventListener('click', pasting);
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
    localStorage.setItem('fontSize', sizeSelected + "px")
    }

    let mudaFonte = document.querySelector('#tamanhoFonte');

    mudaFonte.addEventListener('change', changeFontSize);

    function changeFontFamily () {
        let fontSelected = document.querySelector('#fontFamilyOpt').value;

        text.style.fontFamily = fontSelected;
        localStorage.setItem('fontFamily', fontSelected);
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
        localStorage.setItem('lineHeight', heightSelected);
    }

    let mudaLineHeight = document.querySelector('#lineHeightSelect');

    mudaLineHeight.addEventListener('change', changeLineHeight);

    function changeColors () {
        function changeColorTxt () {
            let body = document.querySelector('body');
            let txtColorSelected = document.querySelector('#textoCor').value;
            let textPastedBox = document.querySelector('.pasteTextBox');
            text.style.color = txtColorSelected;
            body.style.color = txtColorSelected;
            textPastedBox.style.color = txtColorSelected;
            localStorage.setItem('colorTxt', txtColorSelected);
        }

        changeColorTxt();

        function changeColorBg () {
            let bgColorSelected = document.querySelector('#fundoCor').value;
            let bodyColor = document.querySelector('body');
        bodyColor.style.backgroundColor = bgColorSelected;
        localStorage.setItem('colorBg', bgColorSelected);

        }

        changeColorBg();
    }

    let botaoMudar = document.querySelector('.change');

    botaoMudar.addEventListener('click', changeColors);
}