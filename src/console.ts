/**
 * 数字を素因数分解するサンプルプログラム
 */
console.log("Node path = ", process.argv[0])
console.log("script file path = ", process.argv[1])

const data: number[] = []

for (var i = 2;i < process.argv.length;i++) {
    data.push(Number(process.argv[i]))
}
console.log("data:" + data)

for (let item of data) {
    const res = primeFactor(item)
    console.log(item + '=' + res)
}

// 素因数分解する関数
function primeFactor(a: number): number[] {
    const v: number[] = []
    let x = a
    let n = 2
    // 対象の数が2以上の場合
    while(x > n) {
        if (x % n == 0) {
            x = x /n
            v.push(n)
        } else {
            n += n == 2 ? 1 : 2
        }
    }
    v.push(x)
    return v
}