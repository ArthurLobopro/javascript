function soma_dec(n1,n2){
    let multi = 1
    let n1_l = String(n1).length - String(n1).indexOf('.') - 1
    let n2_l = String(n2).length - String(n2).indexOf('.') - 1
    multi*= (n1_l>n2_l)? 10**n1_l : 10**n2_l
    return (n1 * multi + n2 * multi)/multi
}
function sub_dec(n1,n2){
    let multi = 1
    let n1_l = String(n1).length - String(n1).indexOf('.') - 1
    let n2_l = String(n2).length - String(n2).indexOf('.') - 1
    multi*= (n1_l>n2_l)? 10**n1_l : 10**n2_l
    return (n1 * multi - n2 * multi)/multi
}
function mult_dec(n1,n2){
    let multi = 1
    let n1_l = String(n1).length - String(n1).indexOf('.') - 1
    let n2_l = String(n2).length - String(n2).indexOf('.') - 1
    multi*= (n1_l>n2_l)? 10**n1_l : 10**n2_l
    return (n1*multi) * (n2*multi) / (multi*multi)
}
function div_dec(n1,n2){
    let multi = 1
    let n1_l = String(n1).length - String(n1).indexOf('.') - 1
    let n2_l = String(n2).length - String(n2).indexOf('.') - 1
    multi*= (n1_l>n2_l)? 10**n1_l : 10**n2_l
    return (n1*multi) / (n2*multi)
}
export {soma_dec, sub_dec, mult_dec, div_dec}