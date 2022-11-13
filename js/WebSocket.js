// ip_number = prompt("请输入ip地址", "192.168.1.1");

ip = getCookie("saved_ip");
if (ip != "") {
    document.getElementById("ip_input").value = ip;
    submitip();
}

function submitip() {
    ip_number = document.getElementById("ip_input").value;
    setCookie("saved_ip", ip_number, 30 * 365);

    try {
        ws = new WebSocket("ws://" + ip_number + ":8080/");

    } catch (err) {
        window.alert(err);
        document.getElementById("game").classList.add("no");
        document.getElementById("status").innerHTML = '<span style="color:red">未连接</span>';

    }
    know_id = false;

    // ws = new WebSocket("ws://localhost:9001/");
}

ws;
ws.onopen = function() {
    output("onopen");
    document.getElementById("game").classList.add("yes");
    document.getElementById("status").innerHTML = '<span style="color:green">已连接</span>';

};
submitip();

ws.onmessage = function(e) {
        // e.data contains received string.
        if (!know_id) {
            id = Number(e.data);
            know_id = true;
        } else {
            obj = JSON.parse(e.data);
            if (typeof(obj.map) != "undefined") {
                if (obj.id != id) {
                    else_x = obj.x;
                    else_y = obj.y;

                    else_boom_x = obj.boom_x;
                    else_boom_y = obj.boom_y;

                    // output(obj.map);
                    // if (id != 1) {
                    map = obj.map;
                    // for (z = 0; z < map.length(); z++) {
                    //     for (x = 0; x < map.length(); x++) {
                    //         if (map[z][x] != '炸') {
                    //             map[z][x] = obj.map[z][x]
                    //         }
                    //     }
                    // }
                    drawmap();
                }
            }
        }
    }
    //         }
    //         if (id == 1) {
    //             if (!else_boom_exists && obj.boom_x != -1) {
    //                 else_boom_x = obj.boom_x;
    //                 else_boom_y = obj.boom_y;
    //                 else_boom_exists = true;
    //             } else if (else_boom_exists) {
    //                 for (q = -1 - boom_power; q < 2 + boom_power; q++) {
    //                     for (w = -1 - boom_power; w < 2 + boom_power; w++) {
    //                         if (else_boom_x + q > -1 && else_boom_y + w > -1 && else_boom_x + q < map.length && else_boom_y + w < map[else_boom_x].length) {
    //                             if (else_boom_x + q == x && else_boom_y + w == y) {
    //                                 var over = true;
    //                             } else if (else_boom_x + q == mob_x && else_boom_y + w == mob_y && !peace.checked) {
    //                                 booming = true;
    //                                 score += 1;
    //                                 document.getElementById("score").innerHTML = "Score:" + score;
    //                                 setTimeout("mobrestart()", 3000);
    //                             }
    //                             map[else_boom_x + q][else_boom_y + w] = "炸";
    //                         }
    //                     }
    //                 }
    //                 else_boom_x = -1; //清除炸弹
    //                 else_boom_y = -1;
    //                 if (over) {
    //                     gameover(1);
    //                 }
    //                 drawmap();
    //                 setTimeout("replace(else_boom_x, else_boom_y)", 1000); //过一秒后清除特效，替换为“土”

//                 else_boom_exists = false;
//             }
//         } else {
//             else_boom_x = -1;
//             else_boom_y = -1;
//         }
//         drawmap_base();
//     }
// } catch (err) {}
// obj = new Function('return ' + e.data)();
// output(JSON.parse(e.data).x);
//     }
//     // output("onmessage: " + e.data);
// };

ws.onclose = function() {
    output("onclose");
};

ws.onerror = function(e) {
    output("onerror");
    console.log(e);
};

function WSsend(str) {
    ws.send(str);
}


// function init() {

//     // Connect to Web Socket
//     ws = new WebSocket("ws://localhost:9001/");

//     // Set event handlers.
//     ws.onopen = function() {
//         output("onopen");
//     };

//     ws.onmessage = function(e) {
//         // e.data contains received string.
//         output("onmessage: " + e.data);
//     };

//     ws.onclose = function() {
//         output("onclose");
//     };

//     ws.onerror = function(e) {
//         output("onerror");
//         console.log(e)
//     };

// }

function onSubmit(str) {
    // var input = document.getElementById("input");
    // You can send message to the Web Socket using ws.send.
    ws.send(str);
    output("send: " + str);
    // input.value = "";
    // input.focus();
}

function onCloseClick() {
    ws.close();
}

function output(str) {
    console.log(str)
        //     var log = document.getElementById("log");
        //     var escaped = str.replace(/&/, "&amp;").replace(/</, "&lt;").
        // replace(/>/, "&gt;").replace(/"/, "&quot;"); // "
        //     log.innerHTML = escaped + "<br>" + log.innerHTML;
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