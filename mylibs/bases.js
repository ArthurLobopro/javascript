const dec_to_bin = dec => {
    let found = false
    let bin = []
    do{
        bin.push(dec%2)
        dec = Math.floor(dec/2)
        found = dec==0 ? true : false
    }while (!found)
    return String(bin.reverse().join(''))
}
let bin_to_dec = bin => {
    bin = String(bin).split('').reverse()
    let mult = 1, dec = 0
    for(let i of bin){
        dec+=mult*Number(i)
        mult*=2
    }
    return dec
}
export {dec_to_bin, bin_to_dec}