const myMath = {
    pow: function(num,expo=2){
        return num**expo
    },
    sqrt: function(num,expo=2){
        return num**(1/expo)
    },
    floor: function(num){
        return parseInt(num)
    },
    ceil: function(num){
        return parseInt(num)+1
    },
}