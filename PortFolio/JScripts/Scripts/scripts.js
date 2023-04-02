/* let js="amazing";

console.log("Naurangi");
console.log(34);

let firstname="Naurangi Lal"
let first="Naurangi"
let firstNamePerson
console.log(firstname)
console.log(firstname)
console.log(firstname)

let naurangi_lal="nl"

let $function=56;

let person="kshvbu"
let PI=3.1415;
console.log(person," ",PI)

let myFirstWork="Student"
let myCurrentwork="Com.Student"

let job1="student"
let job2="com.student"
console.log(job1,job2)


//Data Types
let javascriptsFun="true"
console.log(javascriptsFun);

//console.log(typeof true);
console.log(typeof javascriptsFun);
//console.log(typeof 34);
//console.log(typeof "naurangi");

javascriptsFun='YES!';
console.log(typeof javascriptsFun);

let year;
console.log(year);
console.log(typeof year);

year=2002;
console.log(typeof year);

console.log(typeof null);

//Let var and const;

let age=21;
age=23;
console.log(age);

const birthDay=15/07/2002;
//birthDay=15/07/2002;
console.log(birthDay)


var job='programmer'
job='pro programmer'

console.log(job )

LastName="lal"
console.log(LastName);


// Basic operators

//Math operator
const now=2037;
const ageTile=now-6769;
const ageTile1=now-6794;
console.log(ageTile,ageTile1);

console.log(ageTile*3,ageTile1/10,5**6);

const firstName='Naurangi';
const lastNmae='lal';
console.log(firstName+'__'+lastNmae);

//Assignment Oprator
let x=10+5;
x+=10;
x*=4;
x++;
x--;
console.log(x);

//comparison oprator

console.log(ageTile>ageTile1);//>,<,>=,<=

console.log(ageTile1 >=18);

const isFullAge=ageTile>=18;
console.log(now-2821 > now-2017)

console.log("JavaScripts");


//Operator precedence

let x,y;
x=y=65-45-10;
console.log(x,y);

ageTile=1234;
ageTile1=3456;
const avarageAge=((ageTile+ageTile1)/2);
console.log(avarageAge)

//Challenge

// const massMark=78;
// const heightMark=1.69;
// const massJohn=92;
// const heightJohn=1.95;

const massMark=95;
const heightMark=1.88;
const massJohn=85;
const heightJohn=1.76;

const BMIMark=massMark/heightMark**2
const BMIJohn=massJohn/(heightJohn*heightJohn);
const markHeightBMI=BMIMark>BMIJohn;
console.log(BMIMark,BMIJohn,markHeightBMI);


const firstname='Naurangi';
const job='student';
const birthyear=2002;
const year=2022;

const Naurangi="I'm "+firstname+' a '+(year- birthyear)+' year old '+job+' ! ';
console.log(Naurangi);

const naurangiNew=`I'm ${firstname}, a ${year-birthyear} year old ${job} !`;
console.log(naurangiNew);

console.log('String with \n\ multiple \n\ lines');
console.log(`String with,
    multiple, 
    lines`); 


    //If Else Statement
const age=15;

if(age>=18){
    console.log("I can start driving license🚖🚖🚖🚖🚖")
}else{
    const yearLeft=18-age;
    console.log(`I am too young,Wait another ${yearLeft}  years:`); 
}

const birthyear=2002;

let century;
if(birthyear<=2000){
    century=20;
}else{
    century=21;
}
console.log(century);


// const massMark=95;
// const heightMark=1.88;
// const massJohn=85;
// const heightJohn=1.76;

const massMark=78;
const heightMark=1.69;
const massJohn=92;
const heightJohn=1.95;


const BMIMark=massMark/heightMark**2
const BMIJohn=massJohn/(heightJohn*heightJohn);
const markHeightBMI=BMIMark>BMIJohn;

if(BMIMark>BMIJohn){
    console.log(`Mark BMI ${BMIMark} higher than John! ${BMIJohn}`)
}else{
    console.log(`John BMI ${BMIJohn} is higher than Mark! ${BMIMark}`)
}
console.log(BMIMark,BMIJohn,markHeightBMI);



const inputYear=2002;
console.log(Number(inputYear),inputYear);
console.log(Number(inputYear)+18);

console.log(Number('Naurangi'));
console.log(typeof NaN);
 
console.log(String(23),(23));

//type coercion

console.log('I am'+21+'years old');
console.log('I am ' +String(21.6)+' years old');
console.log('23'-'45'-5);
console.log('12'/'4');
console.log('12'>'23');

let n='1'+1;
n=n-1;
console.log(n);
*/

//Truly and falsy value
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('naurangi'));
console.log(Boolean({}));
console.log(Boolean('')); 

const money=100;
if(money){
    console.log("Don't spend it all");
}else{
    console.log("You should get a job!");
}

//Equility operator
//(===) this is strict equlity operator because it have one equal(=) to double equal(==) 

const age=' 21';

if(age===21) console.log ("you just become a adult:D(strict)");


if (age==21) console.log('You just become an adult :D(loose)');

const favourite=Number(prompt('What is your favaraite number'));
console.log(favourite);
console.log(typeof favourite);

if (favourite===123){
    console.log('cool! 123 is an amazing number!');
}else if(favourite===7){
    console.log('7 is also cool number');
}else if(favourite===9){
    console.log('9 is also cool number');
}else{
    console.log('Number is not 123 or 7 or 9');
}

if(favourite!==123) console.log('Why not 123');

//Boolean operator

const hasDriverLicense=true;
const hasGoodVision=true;

console.log(hasDriverLicense && hasGoodVision );
console.log(hasDriverLicense || hasGoodVision );
console.log(!hasDriverLicense);

const shouldDrive=hasDriverLicense&&hasGoodVision;

// if(hasDriverLicense&&hasGoodVision){
//     console.log('I am able to drive!');

// }else{
//     console.log('Someone else should drive...');
// }

const isTired=false;
console.log(hasDriverLicense&&hasGoodVision||isTired);

if(hasDriverLicense&&hasGoodVision&&!isTired){
    console.log('I am able to drive!');

}else{
    console.log('Someone else should drive...');
}


//Coding Challange

// const dolphinsScore=(96+108+89)/3;
// const koalasScore=(88+91+110)/3;
// console.log(dolphinsScore,koalasScore);

// if (dolphinsScore>koalasScore){
//     console.log('Dolphins are wins the trophy🎆🎆🎆🎆🎉🎉✨✨🎊🎊🎀🎀..');
// }else if (koalasScore>dolphinsScore){
//     console.log('Koalas win the trophy🎊✨✨✨✨🎉🎉🎉🚖🎀🎀🎀..');
// }else if(dolphinsScore===koalasScore){
//     console.log('Both win the trophy🎊✨✨✨✨🎉🎉🎉🚖🎀🎀🎀..');
// }else{
//     console.log('no one are winner 😂😂😂😂😂😂😂..');
// }

//Bonus 1

const dolphinsScore=(97+112+80)/3;
const koalasScore=(109+95+50)/3;
console.log(dolphinsScore,koalasScore);

if (dolphinsScore>koalasScore&&dolphinsScore>=100){
    console.log('Dolphins are wins the trophy🎆🎆🎆🎆🎉🎉✨✨🎊🎊🎀🎀..');
}else if (koalasScore>dolphinsScore&&koalasScore>=100){
    console.log('Koalas win the trophy🎊✨✨✨✨🎉🎉🎉🚖🎀🎀🎀..');
}else if(dolphinsScore===koalasScore&&dolphinsScore>=100 && koalasScore>=100){
    console.log('Both win the trophy🎊✨✨✨✨🎉🎉🎉🚖🎀🎀🎀..');
}else{
    console.log('no one are winner 😂😂😂😂😂😂😂..');
}


const day='Sunday';

switch(day){
    case 'Monday':
        console.log('Plan for Monday');
        console.log('Go to India gate');
        break;
    case 'Tuesday':
        console.log('Prepare to cpding chanllenge')
    case 'Wednesday':
    case 'Thursday':
        console.log('Going outside with Ex-GirlFriend');
        break;
    case 'Friday':
        console.log('play some outdoor games');
        break;
    case 'Saturday':
        console.log('Go to Weekend enjoy..');
        break;
    case 'Sunday':
        console.log('Sleep whole Day..');
        break;
    default:
        console.log('I have Non plan for doing anything')
}
//Do same by If-Else Statement


// Statements and expressions

if(34>23){
    const Str='34 is greater than 23';
}
const you='naurangi';
console.log(`I'm ${2023-2002} year old ${you}`);

//Conditional operator 

const umr=21;
umr>=18 ? console.log('I like to smoke Ghanjha'):console.log('I like to drink Cold drink🍺🍺🍾');

const drink=umr>=18?'wine🍾🍾':'Water🍺🍺';
console.log(drink);

let drink2;
if(umr>=18){
    drink2='wine🍾🍾';
}else {
    drink2='Water🍺🍺';
}
console.log(drink2);

console.log(`I like to drink ${umr>=18 ?'wine🍾🍾':'Water🍺🍺'}`);
*/

//Coding Challenge 

const bill=275;

const tip=bill<=300&&bill>=50?bill*0.15:bill*0.2;

console.log(`The bill was ${bill} the tip was ${tip},and the total value ${bill+tip}`);