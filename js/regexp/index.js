//正则的定义
// let patt1 = new RegExp("hello")
// let patt2 = /world/

//正则的使用    test()
// let pat = /my/
// let str = "this is my code..."

//使用js查找一个字符串是否存在str中
// let arr = str.split(' ')
// console.log(arr.indexOf('my'));

//使用正则表达式查找是否存在str中
// console.log(pat.test(str));     //true


// let pat = /hello/
// let msg = 'oh hello world'
// console.log(pat.exec(msg));     //[ 'hello', index: 3, input: 'oh hello world', groups: undefined ]


// let pat = /hello/
// let msg = 'oh my world'
// console.log(pat.exec(msg));     // 没找到返回null


//正则表达式的类型
// /pattern/attributes     g  i  全局匹配，区分大小写匹配


//不区分大小写
// let str = 'Visit NanChang oh hello world'
// let pat = /nanchang/i   // 加上i不区分大小写
// let pat2 = /NanChang/g   // 加上i不区分大小写
// let pat2 = /NanChang/ig   

// // console.log(pat.test(str));
// console.log(pat2.test(str));


//字符串的正则
// let str = 'Visit W3School'
// console.log(str.search(/W3school/i));

// let str = '1 plus 2 equl 33'
// console.log(str.match(/\d+/g));// [ '1', '2', '33' ]  \d+ 代表数字，只要匹配到就返回。可以加g全局返回


// let str = "Hello hc! oh I am wn"
// console.log(str.replace(/wn/, "snail"));

// console.log(str.split(/\s+/));


//正则写法
//[abc] 查找方括号之间的任何字符
// let str = "Is this all there is?"
// let pat = /[a-h]/g  //匹配a-h之间的字母
// console.log(str.match(pat));

//[^abc] 查找任何不在方括号之间的字符
// let str = "hello pp like jinlong"
// let pat = /[^like]/g
// console.log(str.match(pat));


// let str = 'hello ziChen! How are you?'
// let pat = /hello|you/g
// console.log(str.match(pat));    //[ 'hello', 'you' ]


// let str = "That's hot! 100%"
// // let pat = /h.t/g
// let pat = /\W/g
// // console.log(str.match(pat));    //[ 'hat', 'hot' ]
// console.log(str.match(pat));    //["'", ' ', '!', ' ', '%']

// let str = 'moon'
// let pat = /\bm/g
// console.log(str.match(pat));


// let str = 'hello yangyang! hello world'
// let pat = /lo*/g
// console.log(str.match(pat));    //[ 'l', 'lo', 'l', 'lo', 'l' ]


// 手机号正则
let tle = '17826864511'
let pat = /^1([3-9])\d{9}$/
console.log(pat.test(tle));