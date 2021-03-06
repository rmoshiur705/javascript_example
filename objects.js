// Function Constructor

var Person = function (name, year, job) {
    this.name = name;
    this.year = year;
    this.job = job;
}

Person.prototype.calculate = function () {
    console.log(2018-this.year);
    
}

Person.prototype.sex = 'male';

var john = new Person('john', 1995, 'Teacher');
var moshiur = new Person('Moshiur', 1997, 'Programmer');
var jane = new Person('jane', 1970, 'Developer');

john.calculate();
moshiur.calculate();
jane.calculate();

console.log(john.sex);
console.log(moshiur.sex);
console.log(jane.sex);


// Object.create

var personProto = {
        calculateAge: function () {
            console.log(2018-this.year);
        }
};

var doe = Object.create(personProto);
doe.name = 'Doe';
doe.year = 1980;
doe.job = 'Designer';

var max = Object.create(personProto, {
    name : { value : 'Max' },
    year : { value : 1971 },
    job: { value : 'Minister'}
});


// primitives vs Objects

// primitives

var a = 20;
var b = a;
a = 23;

console.log(a);
console.log(b);


// Object

var ob1 = {
    age: 20
};

var ob2 = ob1;

ob1.age = 30;
console.log(ob1.age);
console.log(ob2.age);


// Functions

var age = 25;

var me = {
    name: 'Moshiur',
    city: 'Dhaka'
};

function change(a, b) {
    a = 35;
    b.city = 'Mymensingh';
}

change(age, me);

console.log(age);
console.log(me.city);


// Passsing function as argument

var years = [1990, 2005, 1950, 1985, 1997];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i = 0; i<arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAges(year) {
    return 2018-year;
}

function isFullAges(year) {
    return year >= 25;
}

function maxHeartRate(year) {
    if (year >= 18 && year <= 81) {
        return Math.round(206.9 - (0.67 * year));
    }else{
        return -1;
    }
}

var ages = arrayCalc(years, calculateAges);
var fullAges = arrayCalc(ages, isFullAges);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);


// Function returning Function

function interviewQuestion(job) {
    if(job === 'designer'){
        return function (name) {
            console.log(name + ', Do you know what is UX?');
        }
    }else if(job === 'teacher'){
        return function (name) {
            console.log('What subject do you teach ' + name + ' ?');
        }
    }else{
        return function (name) {
            console.log('name,' + ' What do you do?');
        }
    }
}

var teacherQues = interviewQuestion('teacher');
var designerQues = interviewQuestion('designer');

teacherQues('Moshiur');
designerQues('John');
teacherQues('Neil');

interviewQuestion('designer')('Moshiur');


// // // // // // // // 
//      CLOSURE      // 
// // // // // // // // 

function retirement(retirementAge){
    var a = ' years untill retirement';
    return function (year){
        var age = 2018- year;
        console.log((retirementAge-age) + a);
        
    }
}

var retirementUS = retirement(70);
retirementUS(1990);
retirement(66)(1990);

// interview function with closure

function interviewQues(job) {
    
        return function (name) {
            if(job === 'designer'){
            console.log(name + ', Do you know what is UX?');
        }else if(job === 'teacher'){
        
            console.log('What subject do you teach ' + name + ' ?');
        }else{
        
            console.log(name+ ', What do you do?');
        }
    }
}

interviewQues('teacher')('moshiur');
interviewQues('designer')('moshiur');
interviewQues('Other')('moshiur');


// // // // // // // // // // // 
// //    Call Bind Apply   // //
// // // // // // // // // // //

var john = {
    name: 'John',
    age: '28',
    job: 'teacher',
    presenatation: function(style, timeOfDay){
        if (style === 'formal') {
            console.log('Good ' +timeOfDay + ', Ladies and Gants.I\'m '+
             this.name + ', I\'m a ' + this.job + ' and I\'m '+ this.age + ' Years Old .');  
        } else if (style === 'friendly') {
            console.log('Hey! What\'s Up? I\'m '+this.name + ', I\'m a ' + this.job +
             ' and I\'m '+ this.age + ' Years Old . Have a nice '+ timeOfDay);
        }
    }
};

var megan = {
    name: 'Megan',
    age: '20',
    job: 'designer'
};

john.presenatation('formal', 'morning');
john.presenatation.call(megan, 'friendly', 'evening');

john.presenatation.apply(megan, ['friendly', 'evening']);

var johnFriendly = john.presenatation.bind(john, 'friendly');

johnFriendly('morning');