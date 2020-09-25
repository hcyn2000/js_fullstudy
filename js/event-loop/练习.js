console.log("start");   // 1
process.nextTick(() => {
    console.log("a");    // 3
    setImmediate(() => {
        console.log("d");   // 11
    });
    new Promise(res => res()).then(() => {
        console.log("e");   // 4
        process.nextTick(() => {
            console.log("f");   // 6
        });
        new Promise(r => {
            r()
        })
            .then(() => {
                console.log("g");   //  5
            });
        setTimeout(() => {
            console.log("h");   // 7
        });
    });
});

setImmediate(() => {
    console.log("b");   // 8
    process.nextTick(() => {
        console.log("c");   // 9
    });
    new Promise(res => res()).then(() => {
        console.log("i");   // 10
    });
});
console.log("end");     // 2

// start, end, a, e, g, f, h, b, c, i, d