const pow = (num, expo = 2) => num ** expo
const root = (num, expo = 2) => num ** (1 / expo)
const floor = num => parseInt(num)
const trunc = num => parseInt(num)
const ceil = num => parseInt(num) + 1 
const sign = num => (num>0)? 1 : (num<0)? -1 : 0
const hip = (c1,c2) => root(c1**2+c2**2)
const cat = (c,h) => root(h**2-c**2)
const random = () =>{
    //função em testes
    const date = new Date()
    let mil = date.getMilliseconds()
    let min = date.getMinutes()
    let seg = date.getSeconds()
    return Number(`0.${mil**3*min*seg}`)
}
const isInt = num => (String(num).indexOf('.')==-1)? true : false
const fatorial = num =>{
    const fact = () => {
        let fat= 1
        for(i = num;i>0;i--){ fat*=i }
        return fat
    } 
    return (num<0)? console.error(`O número informado: ${num} não é um número natural!`) : fact(num)
}

export { pow, root, floor, trunc, ceil, sign, hip, cat, random, isInt, fatorial } 