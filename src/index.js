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
    expr = expr.match(/.{1,10}/g).toString();
      let message = expr.replace(/11/g, '-').replace(/10/g, '.').replace(/[*]+/g, '*').replace(/0+/g, '');
      let arr = message.split(',');
      let result = '';
          for (let i = 0; i < arr.length; i++) {
              if (arr[i] === "") {
                  result += "";
              }
                else if (arr[i] === "*") {
                  result += " ";
              } 
                else {
                  result += MORSE_TABLE[arr[i]];
              }
          }
          return result
          }
    
module.exports = {
    decode
}