const dec_to =  (dec,base) => {
    let found = false
    let num = []
    do{
        num.push(dec%base)
        dec = Math.floor(dec/base)
        found = dec==0 ? true : false
    }while (!found)
    return base == 16 ? num : String(num.reverse().join(''))
}
const to_dec = (num,base) => {
    num = String(num).split('').reverse()
    let mult = 1, dec = 0
    for(let i of num){
        dec+=mult*Number(i)
        mult*=base
    }
    return dec
}

const dec_to_bin = dec => dec_to(dec,2)
const dec_to_oct = dec => dec_to(dec,8)
const bin_to_dec = bin => to_dec(bin,2)
const oct_to_dec = oct => to_dec(oct,8)

const dec_to_hex = dec => {
    const hexn = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    let hex = dec_to(dec,16)
    for(let i in hex){ hex[i] = hexn[ hex[i] ] }
    return String(hex.reverse().join(''))
}

export {dec_to, dec_to_bin, dec_to_oct, dec_to_hex, to_dec, bin_to_dec, oct_to_dec}