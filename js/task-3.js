function getElementWidth(content, padding, border) {
    const contentParsed = parseFloat(content.replace('px', ''))
    const paddingParsed = parseFloat(padding.replace('px', ''))
    const borderParsed = parseFloat(border.replace('px', ''))

    return contentParsed + 2 * paddingParsed + 2 * borderParsed
}

console.log(getElementWidth('50px', '8px', '4px')) // 74
console.log(getElementWidth('60px', '12px', '8.5px')) // 101
console.log(getElementWidth('200px', '0px', '0px')) // 200
