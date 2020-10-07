const tar = (m,n) => {
    let r = 0;
    
    while(n !== 0){
        r = m % n;
        m = n;
        n = r;
    }
    return m;
}

console.log(tar(60,24));
