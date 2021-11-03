/**
 * クラスの利用をマスターするためのファイル
 */

// Personクラス
class Person {
    name:string = 'no-name'
    mail?:string
    age?:number
    print():void {
        const ml:string = this.mail ? this.mail : 'no-mail'
        const ag:number = this.age ? this.age : -1
        console.log(this.name + '(' + ml + ','+ ag + ')')
    }
}

const taro = new Person()
taro.name = 'taro'
taro.mail = 'taro@test.com'
taro.age = 39

taro.print()