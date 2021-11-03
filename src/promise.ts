/**
 * 非同期処理を実装したサンプル
 */
const f = (n:number, d:number): Promise<number> => {
    console.log("start:" + n)
    return new Promise((f) =>  {
        let total = 0
        for (let i = 0; i <= n; i++) {
            total += i
            setTimeout(() => {
                f(total)
            }, d)
        }
    })
}

// コールバック関数
const cb = (n:number) => {
    console.log("result:" + n)
}

f(10, 300).then(cb)
f(20, 400).then(cb)
f(30, 500).then(cb)
console.log("do something....")