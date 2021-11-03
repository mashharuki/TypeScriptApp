/**
 * クラスの利用をマスターするためのファイル
 */

// Personクラス
class Person {
    public name:string = 'no-name'
    public mail?:string
    public age?:number

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

// School列挙型変数
enum School {
    junior = 'junior',
    juniorHigh = 'juniorHigh',
    high = 'high',
    other = 'other'
}

// Personクラスを継承したStudentクラスを作成する。
class Student extends Person {
    school ? : School
    private garde_num:number = -1
    private gr_str:string = ''

    constructor(name: string, school: School, grade: number) {
        // スーパークラスであるPersonのコンストラクターを呼び出している。
        super(name)
        this.school = school
        this.gradeN = grade
    }

    // print()関数をオーバーライドする。
    print(): void {
        let gd:string = this.grade ? String(this.grade) : '-'
        console.log(this.name + '(' + this.school + 'school: ' + gd + 'grade)')
    }

    // grade_numのgetter
    get gradeN():number {
        return this.garde_num
    }
    // grade_numのsetter
    set gradeN(n:number) {
        this.garde_num = n
        this.grade = String(n)
    }
    // gradeのgetter
    get grade():string {
        return this.gr_str
    }
    // gradeのsetter
    private set grade(pr:string) {
        let gd = pr
        switch(this.gradeN) {
            case 1: gd += 'st'; break
            case 2: gd += 'nd'; break
            case 3: gd += 'rd'; break
            default: gd += 'th' 
        }
        this.gr_str = gd
    }
}

const hanako2 = new Student('hanako2', School.high, 2)
hanako2.print()

