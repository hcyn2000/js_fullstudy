# UDP 和 TCP 的区别?

udp: 面向无连接的，只是数据报文的搬运工 (不会对数据报文进行任何拆分和拼接)
  1. 在发送端，应用层将数据传输给传输层的UDP协议，UDP给数据添加头标识，然后就传递给网络层
  2. 在接收端，网络层接收到数据，传递给传输层，UDP只会去除IP报文头，然后就传递给应用层，不会做任何拼接操作

udp不可靠性:
  1. 不需要建立连接，随时可以发送数据
  2. 接收到什么数据就传递什么数据。不做数据备份，也不关心接收端是否正确接收到数据
  3. 没有拥塞控制，一直以恒定的速度发送数据，即使网络条件不好也不会调整发送速度，所以存在丢包的风险

udp的优点:
  1. 在实时性要求高的场景(比如视频通话)，就使用UDP
  2. 高效: 没有TCP复杂，UDP的头部开销只有八字节，而TCP至少二十字节，所以传输报文时很高效

udp的传输方式:
  UDP支持: 一对一，一对多，多对多，多对一 的传输方式。在游戏这种场景下的数据传输基本上都是UDP