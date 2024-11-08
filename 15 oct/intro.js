let a = 10;

for(let i=1; i<=10; i++){
    console.log(a + "x" + i + "=" + a*i)
}

for(let i=1; i<5; i++){
    for(let j=1; j<4;j++){
        if(j>=1 && j<5-i){
            document.write(`&nbsp`);
        }
        else{
            document.write(`*`);
        }
    }
}
