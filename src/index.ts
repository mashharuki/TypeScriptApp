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

/**
 * 以下、関数の演習
 */

function hello (name:string) {
    console.log("Hello, " +  name + "1")
}

hello("Taro")
hello("Hanako")

function totalFunc(max:number):number {
    let num = 0
    for (let i = 1;i <= max; i++) {
        num += 1
    }
    return num
}

function printTotal(n:number):void {
    let res = totalFunc(n)
    console.log(n + "までの合計:" + res)
}

printTotal(123)
printTotal(456)
printTotal(789)

/**
 * 複数の戻り値を返す場合
 * (タプルを使用する。)
 */
function calcTax(price:number): [price:number, tax:number] {
    const p = price / 1.1
    const t = price - p
    return [p, t]
}

function printTax(price:number):void {
    const [pr, tx] = calcTax(price)
    console.log(price + "の本体価格：" + pr + "、税額：" + tx)
}

printTax(345)

function printPerson(name?:string, age?:number):void {
    const nameval = name ? name : "no-name"
    const ageval = age ? String(age) : '-'
    console.log('Name:' + nameval + ',ageval:' + ageval)
}

printPerson("taro", 30)
printPerson()

/**
 * 可変長変数について
 */
const f = (...data:number[]):number => {
    let total = 0
    for (let i of data) {
        total += i
    }
    return total
}

console.log(f(1))
console.log(f(1,20,30,40))

/**
 * 内部関数を使った際の例
 */
const h = (n:number) => {
    const inF = (n:number):void => {
        console.log("value:" + n)
    }
    let total = 0
    for (let i = 0; i < n; n++) {
        total += n
        inF(total)
    }
}

h(20)

const k = (n:number):() => number => {
    let count:number = 0
    return ():number => {
        count += n
        return count
    }
}

const k1 = k(10)
const k2 = k(10)
const k3 = k(10)

for (let i = 0; i < 10; i++) {
    console.log(k1() + '¥t' + k2() + '¥t' + k3())
}

/**
 * 例外をtryで処理するサンプル
 */
const l = (arr?:any[]):void => {
    let res = 'Array: '
    for (let i of arr) {
        res += String(i) + '¥t'
    }
    console.log(res)
}

try{
    l(['ok', 'ng'])
    l([10, 20, 30])
} catch(e) {
    console.log(e.message)
}

const v = (n:number) => {
    if (n < 0) {
        throw Error("負の値です。")
    }
    let total = 0
    for (let i = 1; i <= n; i++) {
        total +=  i
    }
    return total
}

try {
    let res1 = v(1000)
    console.log(res1)
    let res2 = v(100)
    console.log(res2)
} catch(e) {
    console.log(e.message)
}

/**
 * 総称型を使った関数のサンプル
 */
function getRnd<T> (values: T[]): T {
    const r = Math.floor(Math.random() * values.length)
    return values[r]
}

const data1 =  [0, 2, 4, 6, 8, 10]
const data3 = ['グー', 'チョキ', 'パー']
const data4 = [true, false]

for (let i = 0; i < 10;i++) {
    const re1 = getRnd(data1)
    const re2 = getRnd(data3)
    const re3 = getRnd(data4)

    const res = re1 + '(' + typeof(re1) + ')' + '¥t' + re2 + '(' + typeof(re2) + ')' + '¥t' + re3 + '(' + typeof(re3) + ')' + '¥t' 
    console.log(res)
}

