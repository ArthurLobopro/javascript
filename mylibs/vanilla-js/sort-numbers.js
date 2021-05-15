function sort(arr){
    while(true) {
        let err = false

        for(let i in arr){
            i = Number(i) // Isso é necessario devido ao método in retornar uma string
            if(arr[i] > arr[i+1]){
                err = true
                let temp = arr[i+1]
                arr[i+1]=arr[i]
                arr[i] = temp
            }
        }
    
        if(err === false){
            return arr    
        }

    }
}
export default sort