var o1 = {
    a: 1,
    b: 5,
    c: 1
};

var o2 = {a: 2, b:2, c:2};
var o3 = {c:3};
var obj= Object.assign({},o1,o2,o3);
console.log(obj);
