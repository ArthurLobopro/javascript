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
        return this.root(c1**2+c2**2)
    },
    cat: function(c,h){
        return this.root(h**2-c**2)
    },
    fatorial: function(num){
        return (num<0)? console.error(`O número informado: ${num} não é um número natural!`) : fact(num)
        function fact(){
            let fat= 1
            for(i = num;i>0;i--){
            fat*=i
            }
            return fat
        }   
    }
}
export default myMath 