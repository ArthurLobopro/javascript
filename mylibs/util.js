const util = {
    range: (min,max,pass=1) => {
        let array = []
        for(i = min;i<max;i+=pass){ array.push(i) }
        return array
    },

}
export const range = util.range
export default util