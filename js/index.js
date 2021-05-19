'use strict'

// Can we division?

const userAnswer = +prompt('Enter your value');
canWeDivision(userAnswer);
function canWeDivision(value) {
        if (userAnswer % 5 === 0 || userAnswer % 3 === 0) {
            console.log('yes! We do')
        } else {
            console.log('no, we cant')
        }
};

// Number Factorial

const userFactorialAnswer = +prompt('Enter your number');

let factorialTotal = 1;

for (let i = 0; i < userFactorialAnswer; i++) {
    factorialTotal =  factorialTotal * (userFactorialAnswer-i);
    console.log(factorialTotal)
};

//is Adult Function

const userAge = +prompt('Enter your age');
const youAreAdult = 18;
isAdult(userAge, youAreAdult)

function isAdult (age) {
        if (age  >= youAreAdult) {
            console.log(true)
        } else {
            console.log(false)
        }
};

// check Multiplicity

const enterValue1 = +prompt('enter first value');
const enterValue2 = +prompt('enter second value');
    checkMultiplicity(enterValue1, enterValue2)
    function checkMultiplicity (value1, value2) {
        if (value1 % value2 === 0) {
            console.log(true)
        } else {
            console.log(false)
        }
    };

   const a = +prompt('enter a first num');
   const b = +prompt('enter a second num');
   const c = +prompt('enter a third num');

isTriangleIsReal(a, b, c)

   function isTriangleIsReal (a, b, c) {
       if   (a + b > c && a + c > b && b + c > a) {
           console.log(true)
       } else {
           console.log(false)
       }
   };

// find square's Functions

// rectangle Square
let sOfRectangle;
findRectangleSquare()

function findRectangleSquare ()  {
    const a = +prompt('Enter first number');
    const b = +prompt('Enter second number');
            rectangleResult (a, b)
};

function rectangleResult (value1, value2) {
        sOfRectangle = value1 * value2;
         console.log(sOfRectangle);
};


// triangle  Square

let sOfTriangle;

let triangleS;
const triangkeHeight = 100;
const triangleWidth = 150;

findTriangleSquare(triangkeHeight, triangleWidth)

function findTriangleSquare (height, side) {
    const triangleHalf = side /2;
    const s1= triangleHalf * 2;
    const s2 = triangleHalf * 2;
    const result = s1 + s2;
    console.log(result)
}
    //objects tasks

    // student obj

    const student = {
     name: 'Nikita',
     surname: 'Kachur',
     gender: 'Male',
     phoneNumber: 11223344,
     changeGender() {
     console.log(this.gender = 'male')
     },
     showYourAdress () {
         alert('Paramonova Street')
     }
 };

student.changeGender();
student.showYourAdress();

 // change class For obj

 const studyObj = {
     classRoom: 'mathematical',
     className:  'A',
     studentsValue: 30,
     changeClass () {
         this.classRoom = 'philological',
             this.className = 'B',
          this.studentsValue = 28
     },

 };

studyObj.changeClass()
console.log(studyObj);

// functions Constructors

function Book (author, nameOfBook, year,publishingHouse ) {
    this.author = author,
        this.nameOfBook = nameOfBook,
        this.publishingHouse = publishingHouse
};

const book1 = new Book('Nikola Tesla', 'Electricity', 1900, 'Undefaind-publiching-house');
const book2 = new Book('Joe Dispenza', 'Power ofMind', 2013, 'star=pictures');
console.log(book1);
console.log(book2);

function Electronicbook (author, nameOfBook, year,publishingHouse, format, electronicNumber ) {
    this.author = author,
        this.nameOfBook = nameOfBook,
        this.publishingHouse = publishingHouse;
        this.format = format;
        this.electronicNumber = electronicNumber;
};

const electonicBook = new Electronicbook('Ivan Mazepa', 'Getmanshina', 1601, 'EPUB', 11223344)
const electonicBook2 = new Electronicbook('Ilon Mask', 'How to be a Genios', 2021, 'DOC', 112664223344);
console.log(electonicBook);
console.log(electonicBook2);













