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
export {dec_to_bin}