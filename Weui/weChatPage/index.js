let send = document.getElementById('send')
let parent = document.getElementById('content-items')


send.addEventListener('click', function () {
    //创建一个li标签
    let li = document.createElement('li')
    //给li加 setAttribute() 方法添加指定的属性，并为其赋指定的值。
    li.setAttribute('class', 'content-item')

    let divPic = document.createElement('div')
    divPic.setAttribute('class', 'pic')
    //给li加 appendChild()方法向节点添加最后一个子节点。
    li.appendChild(divPic)

    let img = document.createElement('img')
    img.setAttribute('src', './images/user.jpg')
    divPic.appendChild(img)

    let divMessage = document.createElement('div')
    divMessage.setAttribute('class', 'message')
    li.appendChild(divMessage)

    let pAnme = document.createElement('p')
    pAnme.setAttribute('class', 'name')
    let p1 = document.createTextNode('项羽')
    pAnme.appendChild(p1)
    divMessage.appendChild(pAnme)

    let pDetail = document.createElement('p')
    pDetail.setAttribute('class', 'detail')
    let p2 = document.createTextNode('明天一起去爬山')
    pDetail.appendChild(p2)
    divMessage.appendChild(pDetail)

    parent.appendChild(li)
    console.log(li);
})