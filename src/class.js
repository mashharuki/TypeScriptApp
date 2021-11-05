/**
 * クラスの利用をマスターするためのファイル
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
// 総称型のクラス
var Data = /** @class */ (function () {
    // コンストラクター
    function Data() {
        var item = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            item[_i] = arguments[_i];
        }
        this.data = item;
    }
    Data.prototype.print = function () {
        if (this.data) {
            for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
                var item = _a[_i];
                console.log(item);
            }
        }
        else {
            console.log('no data...');
        }
    };
    return Data;
}());
var data1 = new Data('one', 'two', 'three');
var data2 = new Data(123, 456, 789);
data1.print();
data2.print();
var data3 = {
    'start': '最初の値',
    'middle': '中央の値',
    'end': '最後の値'
};
data3['finish'] == '**おしまい**';
data3[100] = 'ok';
console.log(data3);
var taro2 = new Student('taro', School.juniorHigh, 3);
var hana = new Employee('hanako', School.high, new Date());
var data4 = [taro2, hana];
var data5 = [10, 20, 30];
var msg = "data is [ " + data5 + " ]";
console.log(msg);
var s = "sample_data";
var v = "sample_property";
// イテレータークラス
var MtData = /** @class */ (function () {
    function MtData() {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        this.data = [];
        this.data = data;
    }
    MtData.prototype.add = function (val) {
        this.data.push(val);
    };
    MtData.prototype[Symbol.iterator] = function () {
        var pos = 0;
        var items = this.data;
        return {
            next: function () {
                if (pos < items.length) {
                    return {
                        done: false,
                        value: items[pos++]
                    };
                }
                else {
                    return {
                        done: true,
                        value: null
                    };
                }
            }
        };
    };
    return MtData;
}());
// const data6 = new MtData<string>('one', 'two', 'three')
// for (let item of data6) {
//   console.log(item)
// }
function getData(url) {
    return __awaiter(this, void 0, void 0, function () {
        var response, result, _i, result_1, item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(url)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    result = _a.sent();
                    for (_i = 0, result_1 = result; _i < result_1.length; _i++) {
                        item = result_1[_i];
                        console.log(JSON.stringify(item));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
var url = "https://tuyano-dummy-data.firebaseio.com/sample_data.json";
getData(url);
