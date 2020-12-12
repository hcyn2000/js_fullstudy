## Promise 的含义
  Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象。

### Promise对象有以下两个特点:
  1. 对象的状态不受外界影响。
  2. 一旦状态改变，就不会再变，任何时候都可以得到这个结果。

### Promise也有一些缺点:
  首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

### ES6 规定: 
  Promise对象是一个构造函数，用来生成Promise实例。

### Promise.prototype.then()
  Promise 实例具有then方法，也就是说，then方法是定义在原型对象Promise.prototype上的。它的作用是为 Promise 实例添加状态改变时的回调函数。
  then方法的第一个参数是resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数。

### Promise.prototype.catch()
  Promise.prototype.catch()方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。

### Promise.prototype.finally()
  finally()方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。

  promise
  .then(result => {···})
  .catch(error => {···})
  .finally(() => {···});

  上面代码中，不管promise最后的状态，在执行完then或catch指定的回调函数以后，都会执行finally方法指定的回调函数。
  finally方法的回调函数不接受任何参数，这意味着没有办法知道，前面的 Promise 状态到底是fulfilled还是rejected。这表明，finally方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。
  finally方法总是会返回原来的值。

### Promise.all()
  Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。

  const p = Promise.all([p1, p2, p3]);

  上面代码中，Promise.all()方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。另外，Promise.all()方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。

  p的状态由p1、p2、p3决定，分成两种情况:
  1. 只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
  2. 只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

### Promise.race()
  Promise.race()方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。

  const p = Promise.race([p1, p2, p3]);

  上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。

  Promise.race()方法的参数与Promise.all()方法一样，如果不是 Promise 实例，就会先调用下面讲到的Promise.resolve()方法，将参数转为 Promise 实例，再进一步处理。

### Promise.allSettled()
  Promise.allSettled()方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束。该方法由 ES2020 引入。

  该方法返回的新的 Promise 实例，一旦结束，状态总是fulfilled，不会变成rejected。状态变成fulfilled后，Promise 的监听函数接收到的参数是一个数组，每个成员对应一个传入Promise.allSettled()的 Promise 实例。

  有时候，我们不关心异步操作的结果，只关心这些操作有没有结束。这时，Promise.allSettled()方法就很有用。如果没有这个方法，想要确保所有操作都结束，就很麻烦。Promise.all()方法无法做到这一点。

### Promise.any()
  ES2021 引入了Promise.any()方法。该方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例返回。只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态。

  Promise.any()跟Promise.race()方法很像，只有一点不同，就是不会因为某个 Promise 变成rejected状态而结束。

### Promise.resolve()
  有时需要将现有对象转为 Promise 对象，Promise.resolve()方法就起到这个作用。

  #### Promise.resolve()方法的参数分成四种情况:
  1. 参数是一个 Promise 实例
    如果参数是 Promise 实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例。

  2. 参数是一个thenable对象
    thenable对象指的是具有then方法的对象，比如下面这个对象:
    let thenable = {
      then: function(resolve, reject) {
        resolve(42);
      }
    };

  3. 参数不是具有then()方法的对象，或根本就不是对象
    如果参数是一个原始值，或者是一个不具有then()方法的对象，则Promise.resolve()方法返回一个新的 Promise 对象，状态为resolved。

    const p = Promise.resolve('Hello');
    p.then(function (s) {
      console.log(s)
    });
    // Hello
  
  4. 不带有任何参数
    Promise.resolve()方法允许调用时不带参数，直接返回一个resolved状态的 Promise 对象。

    所以，如果希望得到一个 Promise 对象，比较方便的方法就是直接调用Promise.resolve()方法。

    const p = Promise.resolve();
    p.then(function () {
      // ...
    });
    上面代码的变量p就是一个 Promise 对象。

### Promise.reject()
  Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected

  const p = Promise.reject('出错了');
  // 等同于
  const p = new Promise((resolve, reject) => reject('出错了'))

  p.then(null, function (s) {
    console.log(s)  // 出错了
  });
  
  上面代码生成一个 Promise 对象的实例p，状态为rejected，回调函数会立即执行

### Promise.try()
  实际开发中，经常遇到一种情况：不知道或者不想区分，函数f是同步函数还是异步操作，但是想用 Promise 来处理它。因为这样就可以不管f是否包含异步操作，都用then方法指定下一步流程，用catch方法处理f抛出的错误。

  const f = () => console.log('now');
  Promise.try(f);
  console.log('next');
  // now
  // next