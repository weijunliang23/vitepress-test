# 小程序

## ios小程序子级和父级定位，父级overflow：hidden失效问题
<Image srcType="profileOverflow"/>
有这样一个场景，比如一个头像框为圆型。其父元素为定位元素都某处，子元素为上传头像这个元素，最简单的实现图片的方式肯定就是父元素overflow:hidden,但神奇的是安卓端正常，ios端会出现overflow:hidden失败的问题。

<font color="#006600">解决方式： 父元素设置： transform: scale(1) </font>