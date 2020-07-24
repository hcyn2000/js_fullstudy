let array = [1, 2, 1, '1']

function unique(arr) {
    let res = []
    for (let i = 0; i < array.length; i++) {
        let currrent = array[i]
        if (res.indexOf(currrent) === -1) {
            res.push(currrent)
        }
    }
    return res
}
console.log(unique(array));