document.addEventListener("DOMContentLoaded", function() {
    // 这里面的channel就是PyQt5传递过来的channel对象，其中包含了可供调用的obj对象（一个Factorial类对象）
    new QWebChannel(qt.webChannelTransport, function(send) {
        // 从channel中获取到我们注册到channel中的Factorial类对象
        window.obj = send.objects.obj;
    });
});

function send() {
    // 如果获取到了Factorial对象
    if (window.obj) {
        var n = String(x) + ',' + String(y) + ',' + String(boom_x) + ',' + String(boom_y);
        // 调用Factorial类对象中的槽函数factorial(n),并且指定一个异步调用的callback函数，当factorial返回时
        // 自动调用callback
        window.obj.send(n);
    }
}