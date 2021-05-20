'use strict'

// Can we division?

function canWeDivision(value) {
        if (value % 5 === 0 || value % 3 === 0) {
           return true
        }
           return  false
};

// Number Factorial

function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

//is Adult Function

function isAdult (age) {
        if (age  >= 18) {
            return true
        }
            return  false
};

// check Multiplicity

    function checkMultiplicity (d, g) {
        if (d % g === 0) {
           return true
        }
           return  false
    };

   function isTriangleIsReal (a, b, c) {
       if   (a + b > c && a + c > b && b + c > a) {
          return true
       }
          return  false
   };

// find square's Functions

// rectangle Square

function rectangleResult (a, b) {
     return a * b
};

// triangle  Square

function findTriangleSquare (height, side) {
    const triangleHalf = side / 2;
    const s1= triangleHalf * 2;
    const s2 = triangleHalf * 2;
    const result = s1 + s2;
    return result
}
    //objects tasks

    // student obj

    const student = {
     name: 'Nikita',
     surname: 'Kachur',
     gender: 'Male',
     phoneNumber: 11223344,
        adress: '',
     changeGender() {
         this.gender = 'Female'
     },
        showAdress() {
         this.adress = 'Paramonova'
        }
 };

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

// functions Constructors

function Book (author, nameOfBook, year,publishingHouse ) {
    this.author = author,
        this.nameOfBook = nameOfBook,
        this.publishingHouse = publishingHouse
};

const book1 = new Book('Nikola Tesla', 'Electricity', 1900, 'Undefaind-publiching-house');
const book2 = new Book('Joe Dispenza', 'Power ofMind', 2013, 'star=pictures');

function Electronicbook (author, nameOfBook, year,publishingHouse, format, electronicNumber ) {
    this.author = author,
        this.nameOfBook = nameOfBook,
        this.publishingHouse = publishingHouse;
        this.format = format;
        this.electronicNumber = electronicNumber;
};

const electonicBook = new Electronicbook('Ivan Mazepa', 'Getmanshina', 1601, 'EPUB', 11223344)
const electonicBook2 = new Electronicbook('Ilon Mask', 'How to be a Genios', 2021, 'DOC', 112664223344);













