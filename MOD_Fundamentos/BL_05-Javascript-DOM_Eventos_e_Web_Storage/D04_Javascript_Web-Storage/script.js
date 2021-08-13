function sizePossibles(){
    let possibleFontSizes = [8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96];
    let sizeList = document.getElementById('fontsize');
    for(let i = 0; i < possibleFontSizes.length; i += 1) {
        let size = document.createElement('option');
        size.innerText = possibleFontSizes[i];
        sizeList.appendChild(size)
    }
}
sizePossibles()