var ws;

function init() {

    // Connect to Web Socket
    ws = new WebSocket("ws://localhost:9001/");

    // Set event handlers.
    ws.onopen = function() {
        output("onopen");
    };

    ws.onmessage = function(e) {
        // e.data contains received string.
        output("onmessage: " + e.data);
    };

    ws.onclose = function() {
        output("onclose");
    };

    ws.onerror = function(e) {
        output("onerror");
        console.log(e)
    };

}

function onSubmit() {
    var input = document.getElementById("input");
    // You can send message to the Web Socket using ws.send.
    ws.send(input.value);
    output("send: " + input.value);
    input.value = "";
    input.focus();
}

function onCloseClick() {
    ws.close();
}

function output(str) {
    var log = document.getElementById("log");
    var escaped = str.replace(/&/, "&amp;").replace(/</, "&lt;").
    replace(/>/, "&gt;").replace(/"/, "&quot;"); // "
    log.innerHTML = escaped + "<br>" + log.innerHTML;
}
/*1. 创建⼀个空对象 
var jsonObj = {};
2. 创建⼀个新对象 
var jsonObj = new Object();
3. 创建⼀个⾮空对象 
var jsonObj = {“FirstName”: “xu”,”LastName”,”Xiang”};
4. 创建⼀个空数组 
var Array =
--------------------------------------------------------
作者：安筠少爷和资料大全
链接：https://wenku.baidu.com/view/36688425a5c30c22590102020740be1e650eccc8.html
来源：百度文库
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。*/