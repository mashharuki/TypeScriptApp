/**
 * クラスの利用をマスターするためのファイル
 */

// Humanインターフェース
interface Human {
    name: string;
    print(): void
}

// Personクラス
class Person implements Human {
    public name:string = 'no-name'
    public mail?:string
    public age?:number

    constructor(name:string, mail:string = 'no-mail', age:number = -1) {
        this.name = name
        this.mail = mail
        this.age = age
    }

    print():void {
        console.log(this.name + '(' + this.mail + ','+ this.age + ')')
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
class Student implements Human {
    school ? : School
    public name :string = 'no-name'
    private garde_num:number = -1
    private gr_str:string = ''

    constructor(name: string, school?: School, grade?: number) {
        // スーパークラスであるPersonのコンストラクターを呼び出している。
        this.name = name
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
const jiro = new Student('jiro')

// Human型の配列を生成する。
const data: Human[] = [ taro, hanako, sachiko, jiro ]

for (let item of data) {
    item.print()
}

// Peopleインターフェース
interface People extends Human {
    birth: Date
}

// Employeeクラス
class Employee implements People {
    public name: string = 'no-name'
    public company: string = ''
    birth: Date = new Date()

    // コンストラクター
    constructor(nm: string, cm: string, bth: Date) {
        this.name = nm
        this.company = cm
        this.birth = bth
    }

    print(): void {
        console.log(this.name + '[' + this.company + ']')
    }
}

const ichiro = new Employee('ichiro', 'Baseball Inc.', new Date('1982/10/10'))
ichiro.print()

// 総称型のクラス
class Data<T> {
    // 総称型の変数の配列
    data?:T[]

    // コンストラクター
    constructor(...item:T[]) {
        this.data = item
    }

    print(): void  {
        if(this.data) {
            for (let item of this.data) {
                console.log(item)
            }
        } else {
            console.log('no data...')
        }
    }
}

const data1 = new Data<string> ('one', 'two', 'three')
const data2 = new Data<number> (123, 456, 789)
data1.print()
data2.print()
    
}