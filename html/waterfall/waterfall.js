// onload 加载
window.onload = function () {
    imgLocation("container", "box")
}

// 获取当前有多少张图片要摆放
function imgLocation(parent, content) {
    //将parent下的所有内容全部取出
    var cparent = document.getElementById(parent)
    var ccontent = getChildElement(cparent, content)
    // console.log(ccontent);
    var imgWidth = ccontent[0].offsetWidth
    var num = Math.floor(document.documentElement.clientWidth / imgWidth)
    cparent.style.cssText = "width:" + imgWidth * num + "px"

    var BoxHeightArr = []
    for (var i = 0; i < ccontent.length; i++) {
        if (i < num) {
            BoxHeightArr[i] = ccontent[i].offsetHeight
            // console.log(BoxHeightArr[i]);
        } else {
            // 将Math方法借给数组用
            var minHeight = Math.min.apply(num, BoxHeightArr)
            var minIndex = getminheightLocation(BoxHeightArr, minHeight)
            ccontent[i].style.position = 'absolute'
            ccontent[i].style.top = minHeight + 'px'
            ccontent[i].style.left = ccontent[minIndex].offsetLeft + 'px'
            BoxHeightArr[minIndex] = BoxHeightArr[minIndex]+ccontent[i].offsetHeight
        }
    }
}

function getChildElement(parent, content) {
    var contentArr = []
    var allConent = parent.getElementsByTagName('*')
    for (var i = 0; i < allConent.length; i++) {
        // className 属性设置或返回元素的 class 属性
        if (allConent[i].className == content) {
            // push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
            contentArr.push(allConent[i])
        }
    }
    // return 语句会终止函数的执行并返回函数的值
    return contentArr
}

function getminheightLocation(BoxHeightArr, minHeight) {
    for (var i in BoxHeightArr) {
        if (BoxHeightArr[i] == minHeight) {
            return i
        }
    }
}