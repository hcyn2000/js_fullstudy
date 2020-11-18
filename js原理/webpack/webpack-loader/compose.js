var greet = function (name) {
  return "hi: " + name;
};
var exclaim = function (statement) {
  return statement.toUpperCase() + "!";
};

function compose(...args) {
  // return function (str) {
  //   // arge[len - 2](arge[len - 1](str))
  //   while (args.length) {
  //     let fn = args.pop()
  //     str = fn(str)
  //   }
  //   return str
  // }
  return function (str) {
    return args.reduce((f, g) => {
      return g(f)
    }, str)
  }

}

var welcome = compose(greet, exclaim);
console.log(welcome('moe'));  // => 'hi: MOE!'
