/**
 * @author cici
 * @date 2019-05-29
 * @Description:
 */

function Person() {
    this.hobbis = ['a', 'b'];
}

Person.prototype.oos = ['q', 'w', 'e'];
Person.prototype.sayHello = function (name) {
    console.log(`${name}`);
};
console.log(Person.prototype.constructor === Person);
const p1 = new Person();
p1.sayHello('cici');
p1.hobbis.push('c');
const p2 = new Person();
p2.sayHello('jaj');
console.log(p1, p2);
console.log('oos' in p1);
console.log(Object.keys(p1));
console.log(Object.prototype.hasOwnProperty.call(p1, ['hobbis']));
console.log(p1.constructor);


function SuperType(name) {
    this.name = name;
    this.cici = 'SuperType';
    this.color = ['black', 'red', 'blue'];
}


SuperType.prototype.getSuperValue = function () {
    return this.property;
};

function SubType() {
    SuperType.call(this);
    this.property = 'SubType';
}

SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function () {
    return this.property;
};

function ThreeType() {
    // this.property = 'ThreeType';
    this.a = '1';
    this.c = 'c';
}

ThreeType.prototype = new SubType();
const sub = new SubType();
sub.color.push('purple');
console.log(sub.constructor, sub.color);

const t3 = new ThreeType();
console.log(t3.color);
console.log(t3.constructor);
console.log(t3.a, t3.property, t3.constructor === SuperType);
console.log(t3 instanceof ThreeType);
console.log(t3 instanceof SubType);
console.log(t3 instanceof SuperType);


function log(...args) {
    console.log.apply(this, args);
}

log('jajja');

function fNew(...args) {
    const [P, ...arg] = Array.prototype.slice.call(args);
    // console.log('>>', arguments);
    // const arg = Array.prototype.slice.call(arguments, 1);
    // console.log('>>>>>>', Array.prototype.slice.call(arguments));
    const o = {};
    o.__proto__ = P.prototype;
    P.apply(o, arg);
    return o;
}

const s1 = fNew(SuperType, 'ciic');

log(s1.name);
log(SuperType.name);

const a = ['1'];
console.log(a instanceof Array);
console.log(a instanceof Object);
console.log(Array.isArray(a));
console.log(Array.isArray({}));
console.log(Array.isArray('3213213'));

console.log(a.toString(), Array);


const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
console.log(resolveApp('eslint'));
console.log(__dirname);
console.log(process.cwd());
