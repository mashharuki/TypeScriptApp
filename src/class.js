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
