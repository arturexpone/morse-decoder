const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const DOT = '.';
    const DASH = '-';
    let result = '';

    const arrExpr = [...expr];
    let resultArr = [];
    while(arrExpr.length > 0) {
        let arr = arrExpr.splice(0, 10);
        resultArr.push(arr);
    }
    resultArr = resultArr.map((item, index) => {
        for(let i = 0; i < item.length; i++) {
            if(item[i] === '*') {
                return item.join('');
            }else if(item[i] === '1') {
                item = item.slice(i);
                return item;
            }
        }
    }).map((item) => {
        for (let i = 0; i < item.length; i++) {
            if(Array.isArray(item)) {
                item[i] = item.splice(i, 2, (item[i] + item[i + 1])).join('');
            }
        }
        return item;
    }).map(item => {
        if(Array.isArray(item)) {
            item.map((symbol, index) => {
                if(symbol === '10') {
                    return item[index] = DOT;
                }else if(symbol === '11') {
                    return item[index] = DASH;
                }
            })
            return item.join('');
        }
    }).forEach(item => {
        if(item === undefined) {
            result += ' ';
        }else {
            result += MORSE_TABLE[item];
        }
    })
    return result;
}

module.exports = {
    decode
}