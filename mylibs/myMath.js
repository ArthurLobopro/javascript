const myMath = {
    pow: function(num,expo=2){
        return num**expo
    },
    root: function(num,expo=2){
        return num**(1/expo)
    },
    floor: function(num){
        return parseInt(num)
    },
    ceil: function(num){
        return parseInt(num)+1
    },
    hip: function(c1,c2){
        return this.sqrt(c1**2+c2**2)
    }
}
export default myMath 