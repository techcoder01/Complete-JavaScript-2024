function double(x, callback){return callback(x*2)};

setTimeout(() => {
    double(8, function(data) {
        console.log(data)
    })
}, 3000);


function myfunc(x) {
    return x * 2;
}

setTimeout((callback) => {
    callback(myfunc(10));
}, 3000, function (data) {
    console.log(data);
});


function mydouble(x) {
    return x * 2;
}

setTimeout(callback => {
    callback(mydouble(30));
}, 3000, print
);

function print(number){
    console.log(number)
}
