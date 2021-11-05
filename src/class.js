/**
 * クラスの利用をマスターするためのファイル
 */
// Personクラス
var Person = /** @class */ (function () {
    function Person(name, mail, age) {
        if (mail === void 0) { mail = 'no-mail'; }
        if (age === void 0) { age = -1; }
        this.name = 'no-name';
        this.name = name;
        this.mail = mail;
        this.age = age;
    }
    Person.prototype.print = function () {
        console.log(this.name + '(' + this.mail + ',' + this.age + ')');
    };
    return Person;
}());
var taro = new Person('taro', 'taro@test.com', 39);
var hanako = new Person('hanako', 'hanako@test.com', 20);
var sachiko = new Person('sachiko', 'sachiko@test.com', 27);
taro.print();
hanako.print();
sachiko.print();
console.log(taro instanceof Person === hanako instanceof Person === true);
console.log(taro.constructor.name);
console.log(hanako.constructor.name);
console.log(Person.name);
// School列挙型変数
var School;
(function (School) {
    School["junior"] = "junior";
    School["juniorHigh"] = "juniorHigh";
    School["high"] = "high";
    School["other"] = "other";
})(School || (School = {}));
// Personクラスを継承したStudentクラスを作成する。
var Student = /** @class */ (function () {
    function Student(name, school, grade) {
        this.name = 'no-name';
        this.garde_num = -1;
        this.gr_str = '';
        // スーパークラスであるPersonのコンストラクターを呼び出している。
        this.name = name;
        this.school = school;
        this.gradeN = grade;
    }
    // print()関数をオーバーライドする。
    Student.prototype.print = function () {
        var gd = this.grade ? String(this.grade) : '-';
        console.log(this.name + '(' + this.school + 'school: ' + gd + 'grade)');
    };
    Object.defineProperty(Student.prototype, "gradeN", {
        // grade_numのgetter
        get: function () {
            return this.garde_num;
        },
        // grade_numのsetter
        set: function (n) {
            this.garde_num = n;
            this.grade = String(n);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "grade", {
        // gradeのgetter
        get: function () {
            return this.gr_str;
        },
        // gradeのsetter
        set: function (pr) {
            var gd = pr;
            switch (this.gradeN) {
                case 1:
                    gd += 'st';
                    break;
                case 2:
                    gd += 'nd';
                    break;
                case 3:
                    gd += 'rd';
                    break;
                default: gd += 'th';
            }
            this.gr_str = gd;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
var hanako2 = new Student('hanako2', School.high, 2);
hanako2.print();
var jiro = new Student('jiro');
// Human型の配列を生成する。
var data = [taro, hanako, sachiko, jiro];
for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
    var item = data_1[_i];
    item.print();
}
// Employeeクラス
var Employee = /** @class */ (function () {
    // コンストラクター
    function Employee(nm, cm, bth) {
        this.name = 'no-name';
        this.company = '';
        this.birth = new Date();
        this.name = nm;
        this.company = cm;
        this.birth = bth;
    }
    Employee.prototype.print = function () {
        console.log(this.name + '[' + this.company + ']');
    };
    return Employee;
}());
var ichiro = new Employee('ichiro', 'Baseball Inc.', new Date('1982/10/10'));
ichiro.print();
