/**
 * クラスの利用をマスターするためのファイル
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        var ml = this.mail ? this.mail : 'no-mail';
        var ag = this.age ? this.age : -1;
        console.log(this.name + '(' + ml + ',' + ag + ')');
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
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, school, grade) {
        var _this = _super.call(this, name) || this;
        _this.school = school;
        _this.grade = grade;
        switch (school) {
            case School.junior:
                _this.age = 6 + _this.grade;
                break;
            case School.juniorHigh:
                _this.age = 12 + _this.grade;
                break;
            case School.high:
                _this.age = 15 + _this.grade;
                break;
            default:
                _this.age = -1;
        }
        return _this;
    }
    return Student;
}(Person));
var hanako2 = new Student('hanako2', School.high, 2);
hanako2.print();
