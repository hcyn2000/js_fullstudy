import add from './add.js'
import min from './min.js'
import debounce from 'lodash/debounce'

// 1.ex-Module  在代码静态分析的时候，就能知道你引入了哪些mokuai
// 2. webapck production 会开启tree-shaking
// 3. 每个模块假如存在(副作用) ，想剔除它 "sideEffect": false
// 4. 第三方模块(lodash / element-ui), 小心, 他们不是ex-module

function f() { }
console.log(debounce(f));
console.log(add(4, 5));