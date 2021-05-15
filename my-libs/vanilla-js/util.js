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
const randint = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
export { range, reverse, randint}