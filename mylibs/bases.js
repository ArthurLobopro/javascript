const dec_to =  (dec,base) => {
    let found = false
    let num = []
    do{
        num.push(dec%base)
        dec = Math.floor(dec/base)
        found = dec==0 ? true : false
    }while (!found)
    return String(num.reverse().join(''))
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

export {dec_to, dec_to_bin, dec_to_oct, to_dec, bin_to_dec, oct_to_dec}