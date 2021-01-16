export default function range(i,f,p=1){
    let array = []
    for (i;i<f;i+=p){
        array.push(i)
    }
    return array
}