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
    
type stringArray = {
    [key in string]: string
}

const data3:stringArray = {
    'start': '最初の値',
    'middle': '中央の値',
    'end': '最後の値'
}

data3['finish'] == '**おしまい**'
data3[100] = 'ok'
console.log(data3)

type People2 = Student | Employee

const taro2:People2 = new Student('taro', School.juniorHigh, 3)
const hana:People2 = new Employee('hanako', School.high, new Date())
const data4:People2[] = [taro2, hana]

const data5 = [10, 20, 30]
const msg = `data is [ ${data5} ]`
console.log(msg)

type val_name = "sample" | "private" | "public"
type data_type = `${val_name}_data`
type prop_type = `${val_name}_property`
const s:data_type = "sample_data"
const v:prop_type = "sample_property"

// イテレータークラス
class MtData<T> {
    data:T[] = []

    constructor (...data: T[]){
        this.data = data
    }

    add(val:T) {
        this.data.push(val)
    }

    [Symbol.iterator]() {
        let pos = 0;
        let items = this.data;

        return {
            next():IteratorResult<T> {
                if (pos < items.length) {
                    return {
                        done: false,
                        value: items[pos++]
                    }
                } else {
                    return {
                        done: true,
                        value: null
                    }
                }
            }
        }
    }
}

// const data6 = new MtData<string>('one', 'two', 'three')

// for (let item of data6) {
//   console.log(item)
// }

// GET通信でデータを取得する関数
async function getData(url: string) {
    const response = await fetch(url)
    const result = await response.json()
    for (let item of result) {
        console.log(JSON.stringify(item))
    }
} 

// POST通信でデータを送信する関数
async function postData(url:string, obj:object) {
    await fetch(url, {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    const response = await fetch(url)
    const result = await response.json()
    console.log(result)
}

const obj = {
    title : "Hello!",
    message : "This is sample message!"
}

const url = "https://tuyano-dummy-data.firebaseio.com/sample_data.json"
getData(url)
postData(url, obj)
