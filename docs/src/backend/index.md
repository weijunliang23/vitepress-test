### 计算机网络
把分布在不同地理区域的计算机与专门的外部设备用通信线路互连成一个规模大、功能强的网络系统，从而使众多的计算机可以方便地互相传递信息、共享硬件、软件、数据信息等资源。


### 网络编程
直接或间接地通过网络协议与其它计算机实现数据交换，进行通讯。

### ip/域名
ip通过DNS解析为域名，InetAddress类可获取某个地址的域名或ip。区分不同的端口的目的是为了标识一台主机的不同进程。ip + port = socket


###  I/O流

IO普遍理解为输入输出流。
分类： 
从流的操作数据单位来分： 字节流（8 bit），字符流（16 bit）;字节流一般用于媒体形式，如图片，视频等；字节流一般读取单纯的文本。

从流的数据流向不同分为： 输入流和输出流，即为程序向外输出，网络连接等向程序输入。

从流的角色来分： 节点流和处理流，节点流即为直接的输入和输出关系，处理流一般作为一个中间处理环节会被当作要给参数传递给下一个加工环节