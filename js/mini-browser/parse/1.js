// ab
function find1(str) {
    let founda = false
    for (let c of str) {
        if (c === 'a') {
            founda = true
        } else if (founda && c === 'b') {
            return true
        } else {
            founda = false
        }
    }
    return false
}
console.log(find1('qweacb'));
console.log(find1('qweab'));


// abc
function find2(str) {
    let founda = false, foundb = false
    for (let c of str) {
        if (c === 'a') {
            founda = true
        } else if (founda && c === 'b') {
            foundb = true
        } else if (foundb && c === 'c') {
            return true
        } else {
            founda = false;
            foundb = false
        }
    }
    return false
}