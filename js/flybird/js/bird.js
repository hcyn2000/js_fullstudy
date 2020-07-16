var bird = {
    flyTimer: null,     //控制小鸟飞翔的定时器
    wingTimer: null,      //小鸟翅膀摆动的定时器

    div: document.createElement('div'),
    showBird: function (parentObj) {
        this.div.style.width = '40px'
        this.div.style.height = '28px'
        this.div.style.backgroundImage = 'url(img/bird0.png)'
        this.div.style.backgroundRepeat = 'no -repeat'
        this.div.style.position = 'absolute'
        this.div.style.left = '50px'
        this.div.style.top = '200px'
        this.div.style.zIndex = '1'

        //将小鸟的div插入到游戏界面当中
        // appendChild() 方法向节点添加最后一个子节点。
        parentObj.appendChild(this.div)
    },

    fallSpeed: 0,   //小鸟下落的速度
    flyBird: function () {  //控制小鸟飞翔下落的函数
        bird.flyTimer = setInterval(fly, 60)
        function fly() {
            bird.div.style.top = bird.div.offsetTop + bird.fallSpeed++ + 'px'
            if (bird.div.offsetTop >= 395) {     //掉到地面，清除定时器
                bird.fallSpeed = 0  //小鸟下落速度清零
                clearInterval(bird.flyTimer)    //clearInterval() 方法可取消由 setInterval() 函数设定的定时执行操作
                clearInterval(bird.wingTimer)
            }
            if (bird.fallSpeed > 12) {     //设置小鸟最大下降速度为12
                bird.fallSpeed = 12
            }
            if (bird.div.offsetTop <= 0) {     //控制小鸟不飞出界面
                bird.div.style.top = '0px'
                bird.fallSpeed = 2
            }
        }
    },


    wingWave: function () {     //控制小鸟煽动翅膀的函数
        var up = ['url(img/up_bird0.png)', 'url(img/up_bird1.png)']
        var down = ['url(img/down_bird0.png)', 'url(img/down_bird1.png)']
        var i = 0, j = 0;
        bird.wingTimer = setInterval(wing, 120)
        function wing() {
            if (bird.fallSpeed > 0) {
                bird.div.style.backgroundImage = down[i++]
                if (i == 2) {
                    i = 0
                }
            }
            if (bird.fallSpeed < 0) {
                bird.div.style.backgroundImage = up[j++]
                if (j == 2) {
                    j = 0
                }
            }
        }
    }
}