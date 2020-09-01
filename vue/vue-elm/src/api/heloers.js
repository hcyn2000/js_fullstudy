import axios from 'axios';

const baseUrl = 'http://ustbhuangyi.com/sell/';

export function get(url) {
    return function (params = {}) {
        return axios.get(baseUrl + url, {
            params,
        }).then((res) => {  //then是异步执行，就是当.then()前的方法执行完后再执行then()内部的程序，这样就避免了，数据没获取到等的问题
            const { errno, data } = res.data;  //对象的解构
            // const errno = res.data.errno
            // const data = res.data.data
            if (errno === 0) {
                return data;
            }
        }).catch((err) => {
            console.log(err);
        });
    };
}
