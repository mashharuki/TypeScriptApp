/**
 * オブジェクトを実装するサンプル
 */

// Personオブジェクト
const person = {
    name: "taro",
    age: 39,
    print: function():void {
        console.log(this.name + '(' + this.age + ')')
    }
}

person.print()
person.name = "hanako"
person.age = 20
person.print()

/**
 * Personファクトリ関数
 */
function Person(n:string, a:number): {name: string, age: number, print: () => void} {
    return {
        name: n,
        age: a,
        print: function() {
            console.log(this.name + '(' + this.age + ')')
        }
    }
}

// オブジェクト作成
const taro = Person('taro', 39)
const hanako = Person('hanako', 20)
taro.print()
hanako.print()