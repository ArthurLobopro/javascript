const range = (min,max,pass=1) => {
    let array = []
    for(i = min;i<max;i+=pass){ array.push(i) }
    return array
}
const reverse = str =>{
    let array = String(str).split('')
    array.reverse()
    array = String(array).replaceAll(',','')
    return array
}
export { range, reverse}