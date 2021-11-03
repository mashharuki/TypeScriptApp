/**
 * クラスの利用をマスターするためのファイル
 */
// Personクラス
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'no-name';
    }
    Person.prototype.print = function () {
        var ml = this.mail ? this.mail : 'no-mail';
        var ag = this.age ? this.age : -1;
        console.log(this.name + '(' + ml + ',' + ag + ')');
    };
    return Person;
}());
var taro = new Person();
taro.name = 'taro';
taro.mail = 'taro@test.com';
taro.age = 39;
taro.print();
