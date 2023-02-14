var Formules = /** @class */ (function () {
    function Formules(a, b) {
        this.a = a;
        this.b = b;
    }
    Formules.prototype.first = function () {
        return this.a + this.b;
    };
    Formules.prototype.second = function () {
        return this.a + this.b;
    };
    return Formules;
}());
var formules = new Formules(1, 2);
var formules1 = new Formules(2, 3);
console.log(formules.second());
console.log(formules1.first());
//
// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }
// const incAge=():Function=>{
//
// }
//
// type MyType = ReturnType<incAge>
//
// console.log(sum(1, 2));
// showSum(2,3)
// incAge(user, 2)
