import { toASCII } from "punycode";

console.log("Hello World!");
// 配列
const data = [10, 20, 30];
const total = data[0] + data[1] + data[2];
console.log("合計" + total)

// for ofを使う場合
let total2 = 0
for (let item of data) {
    total2 += item
}

const av = total2 / data.length
console.log("合計：" + total2)
console.log("平均：" + av)

// タプルの例
let me:[string, number]
let you:[string, number]

me = ['taro', 39]
you = ['kanako', 45]

// タプルをさらにわかりやすくする。
// 型エイリアスを使用する。
type name = string
type age = number
type mail = string

let me2:[name, age]
let you2:[name, age]

me2 = ['taro', 39]
you2 = ['kanako', 45]

console.log(me2)
console.log(you2)

// personという型エイリアスを作成する。
type person = [name, mail, age]

const taro:person = ['taro', 'taro@test.com', 39]
const hanako:person = ['hanako', 'hanako@test.com', 20]
const sachiko:person = ['sachiko', 'sachiko@test.com', 18]
// 配列を作成する。
const data2:person[] = [taro, hanako, sachiko]

for (let i of data2) {
    console.log(i);
}

// 条件型の例
type msg = "hello" | "bye"

const msg1:msg = "hello"
console.log(msg1 + ',' + taro)
const msg2:msg = "bye"
console.log(msg2 + '' + hanako)

// 型をチェックする。
type id = number | string

const idA:id = "taro"
const idB:id = 123
const tp = idA

switch(typeof(tp)) {
    case "number":
        console.log(tp + " は、number型です。")
        break
    case "string" :
        console.log(tp + "は、String型です。")
        break
    default:
        console.log("型不明")
}