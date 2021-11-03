/**
 * オブジェクトを実装するサンプル
 */
// Personオブジェクト
var person = {
    name: "taro",
    age: 39,
    print: function () {
        console.log(this.name + '(' + this.age + ')');
    }
};
person.print();
person.name = "hanako";
person.age = 20;
person.print();
/**
 * Personファクトリ関数
 */
function Person(n, a) {
    return {
        name: n,
        age: a,
        print: function () {
            console.log(this.name + '(' + this.age + ')');
        }
    };
}
// オブジェクト作成
var taro = Person('taro', 39);
var hanako = Person('hanako', 20);
taro.print();
hanako.print();
