function f1(x){
    let i=10
    x(i);
    x(i+1);
    x(i+2);

}

function f2(i){
    console.log(i);
}

f1(f2);









const f1=(x)=>{
    let i=10
    x(i);
    x(i+1);
    x(i+2);

}

const f2=(i)=>{
    console.log(i);
}

f1(f2);





(function(i){sum(callback,i);})(1);
function sum(x,y){
    let T=[];
    for (let i=1;i,4;i++){
        T[i]=x(i+j);

    }
}

function callback(i){return i*i;}







