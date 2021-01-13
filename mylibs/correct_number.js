function soma_dec(n1,n2){
    let multi = 1
    n1_l = String(n1).length - String(n1).indexOf('.') - 1
    n2_l = String(n2).length - String(n2).indexOf('.') - 1
    multi*= (n1_l>n2_l)? 10**n1_l : 10**n2_l
    return (n1 * multi + n2 * multi)/multi
}