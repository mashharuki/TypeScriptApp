/**
 * 非同期処理を実装したサンプル
 */
var f = function (n, d) {
    console.log("start:" + n);
    return new Promise(function (f) {
        var total = 0;
        for (var i = 0; i <= n; i++) {
            total += i;
            setTimeout(function () {
                f(total);
            }, d);
        }
    });
};
var cb = function (n) {
    console.log("result:" + n);
};
f(10, 300).then(cb);
f(20, 400).then(cb);
f(30, 500).then(cb);
console.log("do something....");
