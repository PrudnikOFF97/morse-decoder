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
    let coded_char = expr.split('');
    let result = '';
    let decoded_char = [];
    for (let i = 0; i < coded_char.length; i+=10) {
        decoded_char = [];
        for (let j = 0; j < 10; j+=2) {
            if (coded_char[i+j]==="1" && coded_char[i+j+1]=="0") {
                decoded_char.push(".");
            }
            if (coded_char[i+j]==="1" && coded_char[i+j+1]=="1") {
                decoded_char.push("-");
            }
            if (coded_char[i+j]==="*") {
                result+=" ";
                i+=10;
                j=-2;
            }

        }
        result+=MORSE_TABLE[decoded_char.join('')];
    }
    return result;
}

module.exports = {
    decode
}