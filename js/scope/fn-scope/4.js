// 块作用域

for (var i = 0; i < 10; i++) {      //i会污染到整个函数作用域
    console.log(i);
}
console.log(i);