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

const dec_to_bin = dec => dec_to(dec,2)
const dec_to_oct = dec => dec_to(dec,8)

const bin_to_dec = bin => {
    bin = String(bin).split('').reverse()
    let mult = 1, dec = 0
    for(let i of bin){
        dec+=mult*Number(i)
        mult*=2
    }
    return dec
}
export {dec_to_bin, dec_to_oct, bin_to_dec}