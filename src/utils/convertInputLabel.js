function convertInputLabel(label) {
    const wordsArr = label.split(' ');
    const uppercaseArr = [];

    for (let i = 0; i < wordsArr.length; i++) {
        if (i === 0) {
            uppercaseArr.push(wordsArr[i]);
            continue;
        }
        const newWord = wordsArr[i][0].toUpperCase() + wordsArr[i].slice(1);
        uppercaseArr.push(newWord);
    }

    const newLabel = uppercaseArr.join('');

    return newLabel;
}

export default convertInputLabel;
