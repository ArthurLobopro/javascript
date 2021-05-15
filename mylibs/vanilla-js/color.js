// Este módulo só funciona no Node.js
const colors = {
        'black':         30,
        'red':           31,
        'green':         32,
        'yellow':        33,
        'blue':          34,
        'magenta':       35,
        'cyan':          36,
        'gray':          37,
        'dark gray':     90,
        'ligth red':     91,
        'ligth green':   92,
        'ligth yellow':  93,
        'ligth blue':    94,
        'ligth magenta': 95,
        'ligth cyan':    96,
        'white':         97
}
const styles = {
    'bold':      1,
    'underline': 4,
    'negative':  7
}
const cret = (str, c='', bgc='', sty=0) =>{
    const init = '\033['
    let end = init+'m'
    if (c !== ''){c= colors[c]}
    if (bgc!== ''){bgc= colors[bgc]+10}
    if (sty !== 0){sty = styles[sty]}
    str = (bgc=='') ? `${init+sty};${c}m${str+end}` : `${init+sty};${c};${bgc}m${str+end}`
    return str
}
const clog = (str,c='',bgc='',sty=0) => {
    console.log(cret(str,c,bgc,sty))
}
export {cret,clog}