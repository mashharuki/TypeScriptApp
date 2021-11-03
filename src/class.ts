/**
 * クラスの利用をマスターするためのファイル
 */

// Personクラス
class Person {
    name:string = 'no-name'
    mail?:string
    age?:number

    constructor(name:string, mail:string = 'no-mail', age:number = -1) {
        this.name = name
        this.mail = mail
        this.age = age
    }

    print():void {
        const ml:string = this.mail ? this.mail : 'no-mail'
        const ag:number = this.age ? this.age : -1
        console.log(this.name + '(' + ml + ','+ ag + ')')
    }
}

const taro = new Person('taro', 'taro@test.com', 39)
const hanako = new Person('hanako', 'hanako@test.com', 20)
const sachiko = new Person('sachiko', 'sachiko@test.com', 27)

taro.print()
hanako.print()
sachiko.print()

console.log(taro instanceof Person === hanako instanceof Person === true)
console.log(taro.constructor.name)
console.log(hanako.constructor.name)
console.log(Person.name)