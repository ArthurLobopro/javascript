const color = {
    colors: {
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
    },
    styles: {
        'bold':      1,
        'underline': 4,
        'negative':  7
    },
    cret: function(string, c='', bgc='', style=0){
        const init = '\033['
        let end = init+'m'
        if (c !== ''){c= this.colors[c]}
        if (bgc!== ''){bgc= this.colors[bgc]+10}
        if (style !== 0){style = this.styles[style]}
        let str =(bgc=='') ? `${init+style};${c}m${string+end}` : `${init+style};${c};${bgc}m${string+end}`
        return str
    },
    clog: function(string,c='',bgc='',style=0){
        console.log(this.cret(string,c,bgc,style))
    }
}
export default color