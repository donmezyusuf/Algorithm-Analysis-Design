const sieve = (n) => {
    let array = [];

    for (let p = 2; p <= n; p++) {
        array[p] = p;
    }

    for (let s = 2; s <= Math.sqrt(n); s++){
        if(array[s] !== 0){
            let j = s * s;
                while(j <= n){
                    array[j] = 0;
                    j = j + s;
                } 
        }
    }
    let lastArray = [];
    let index = 0;
    
    for(let i = 2; i <= n; i++) {
        if(array[i] !== 0){
            lastArray[index] = array[i];
            index = index + 1;
        }
    }
    return lastArray;
}

console.log(sieve(41));