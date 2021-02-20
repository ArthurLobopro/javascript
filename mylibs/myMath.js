const myMath = {
    pow: (num, expo = 2) => num ** expo,
    root: (num, expo = 2) => num ** (1 / expo),
    floor: num => parseInt(num),
    trunc: num => parseInt(num),
    ceil: num => parseInt(num) + 1,
    sign: num => (num>0)? 1 : (num<0)?-1 : 0,
    hip: function(c1,c2){
        return this.root(c1**2+c2**2)
    },
    cat: function(c,h){
        return this.root(h**2-c**2)
    },
    random: function teste(){
        const date = new Date()
        let mil = date.getMilliseconds()
        let min = date.getMinutes()
        let seg = date.getSeconds()
        return Number(`0.${mil**3*min*seg}`)
    },
    isInt: (num) => (String(num).indexOf('.')==-1)? true : false ,
    fatorial: function(num){
        return (num<0)? console.error(`O número informado: ${num} não é um número natural!`) : fact(num)
        function fact(){
            let fat= 1
            for(i = num;i>0;i--){ fat*=i }
            return fat
        }   
    }
}
export default myMath 