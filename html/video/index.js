// console.log(document.getElementById("test"))
// console.log(document.querySelector('.speed-bar'))
var bar = document.querySelector('.speed-bar')
var speed = document.querySelector('.speed')
var video = document.querySelector('.flex')


function handleMove(e) {
    var y = e.pageY - this.offsetTop
    var percent = y / this.offsetHeight //名称.offsetHeight 获取容器高度;
    var min = 0.4
    var max = 4
    var height = Math.round(percent * 100) + '%'
    var playbackRate = percent * (max - min) + min

    bar.style.height = height
    bar.textContent = playbackRate.toFixed(2) + 'x'
    video.playbackRate = playbackRate //video.playbackRate 控制播放速度
}


speed.addEventListener('mousemove',handleMove) 
