function Block() {
    this.upDivWrap = null
    this.downDivWrap = null
    this.downHeight = baseObj.randomNum(0, 200)     //0-200之间随机生成下方管道的高度
    this.gapHeight = baseObj.randomNum(100, 110)    //100到110之间随机生成缝隙的高度
    //上方管道的高度等于312-下方管道的高度-缝隙的高度
    this.upHeight = 312 - this.downHeight - this.gapHeight  

    //用生成div方法放管道
    this.createDiv = function (url, height, positionType, left, top) {
        var newdiv = document.createElement('div')
        newdiv.style.width = '62px'
        newdiv.style.height = height
        newdiv.style.position = positionType
        newdiv.style.left = left
        newdiv.style.top = top
        newdiv.style.backgroundImage = url
        return newdiv
    }

    this.createBlock = function () {
        var upDiv1 = this.createDiv('url(img/up_mod.png)', this.upHeight + 'px')
        var upDiv2 = this.createDiv('url(img/up_pipe.png)', '60px')
        this.upDivWrap = this.createDiv(null, null, 'absolute', '450px')
        this.upDivWrap.appendChild(upDiv1)      //生成上方管道
        this.upDivWrap.appendChild(upDiv2)      //生成上方管道

        var downDiv1 = this.createDiv('url(img/down_pipe.png)', '60px')
        var downDiv2 = this.createDiv('url(img/down_mod.png)', this.downHeight + 'px')
        this.downDivWrap = this.createDiv(null, null, 'absolute', '450px', 363 - this.downHeight + 'px')
        this.downDivWrap.appendChild(downDiv1)  // 生成下方管道
        this.downDivWrap.appendChild(downDiv2)  // 生成下方管道

        jsWrapBg.appendChild(this.upDivWrap)
        jsWrapBg.appendChild(this.downDivWrap)
    }

    this.moveBlock = function () {      // 控制管道移动的方法
        this.upDivWrap.style.left = this.upDivWrap.offsetLeft - 3 + 'px'
        this.downDivWrap.style.left = this.downDivWrap.offsetLeft - 3 + 'px'
    }
}