//Stricts mode function
/*
'use strict';

let hasDriversLicense=false;
const passTest=true;

if(passTest) hasDriversLicense=true;
if(hasDriversLicense) console.log('I can start drive:D');


// const interface='Audio';

//const private=432;
*/
/*
function logger(fname,lname){
    const name=`My name is ${fname} ${lname} `;
    return name

}
console.log(logger('Naurangi', 'Lal'));
logger();

function fruitProcessor(appples,oranges){
    console.log(appples,oranges);
    const juice=`juice with ${appples} apples and ${oranges} oranges`;
    return juice;
}
//Method to print function..
const appleJuice=fruitProcessor(5,7);

console.log(appleJuice);
console.log(fruitProcessor(4,6));

 const appleOrangeJuice=fruitProcessor(4,10);
 console.log(appleOrangeJuice);

 const best=Number('223456789');
 */
//  const age1=calAge1(2002);

//  //Function declearation

//  function calAge1(birthyear){
//     //const age=2022-birthyear;
//     return 2022-birthyear;
//  }

// // console.log(calAge1(2002));
// // console.log(age1);

// //Function expression

// const calAge2=function(birthyear){
//     return 2022-birthyear;
// }
// const age2=calAge2(2002);
// console.log(age1,age2);

//function declearation
// const calAge2=function(birthyear){
//     return 2035-bi rthyear;

// }

//Arrow Function
// const calAge3=birthyear=>2035-birthyear;
// const age3=calAge3(2002);
// console.log(age3)

// const isRetirement=(birthyear,firstName)=>{
//     const age = 2037-birthyear;
//     const retirment=65-age;
//     return `${firstName} retires in ${retirment} years`;
// }
// console.log(isRetirement(2002 ,'Naurangi'))
// console.log(isRetirement(2003,'Rahul'))

// function cutPieces(fruit){
//     return fruit*3;
// }

// function fruitProcessor(apples,oranges){
//     const applePieces=cutPieces(apples);
//     const orangesPieces=cutPieces(oranges);

//     const juice=`'juice with ${applePieces} pieces of  apple and ${orangesPieces} pieces of orange.`;
//     return juice;
// }
// console.log(fruitProcessor(3,5));
// const calAge=function(birthyear){
//     return 2035-birthyear;
// }
// const isRetirement=function(birthyear,firstName){
//     const age = calAge(birthyear);
//     const retirment=65-age;

//     if(retirment>0){
//         console.log(`${firstName} retires in ${retirment} years`);
//         return retirment;
//     }else{
//         console.log(`${firstName} has already retired🎉🎉🎉🎉🎉`);
//         return-1;

//     }
// }
// console.log(isRetirement(2002,'Naurangi'));
// console.log(isRetirement(2033,'Rahul'));

//Coding Challenge

// const calcAvarage=(a,b,c)=>(a+b+c)/3;
// console.log(calcAvarage(3,4,5));

// const scoreDolphinnes=calcAvarage(44,23,71);
// const scoreKoalas=calcAvarage(65,54,49);

// console.log(scoreDolphinnes,scoreKoalas)

// const checkWinner=function(avgDolphines,avgKoalas){
//     if(avgDolphines>=2*avgKoalas){
//         console.log(`Dolphines Win🎉🎉🎉🍺🍺🍺(${avgDolphines} vs. ${avgKoalas})`);
//     }else{
//         console.log('no team wins...')
//     }
// }
// checkWinner(scoreDolphinnes,scoreKoalas);
// checkWinner(234,111);

//Array in JAVASCRIPTS

// const frnd1="Rahul";
// const frnd2="Varun";
// const frnd3="Rajesh";
// const frnd5="Papa ji";
// console.log(frnd1,frnd2,frnd3,frnd5)

// const friend=['Rajesh','rahul','Varun','Aditya'];
// console.log

// const years=new Array(1964,1958,1990,1967,2002)
// console.log(years)

// console.log(friend[2]);
// console.log(friend[3]);

// console.log(friend.length);
// console.log(friend.length-1);

// friend[2]='Shiva';
// console.log(friend);

// friend[2]=['harry','alice'];
// console.log(friend);

// const firstName='Naurangi';
// const vaName=[firstName,'Lal', 'student',2022-2002,friend];
// console.log(vaName);
// console.log(vaName.length);

// //Excercise

// const clacAge=function(birthyear){
//     return 2022-birthyear;

// }
// const years1=[2000,2015,2018,2021,2022];

// const age1=clacAge(years1[0]);
// const age2=clacAge(years1[1]);
// const age3=clacAge(years1[years1.length-1]);
// console.log(age1,age2,age3);

// const ages=[clacAge(years1[0]),clacAge(years1[2]),clacAge(years1[years1.length-1])];
// console.log(ages);

// const friend=['Rajesh','rahul','Varun','Aditya'];
// //Add Elements
// const newLength=friend.push('Harry');
// console.log(friend);
// console.log(newLength);

// friend.unshift('Alice');
// console.log(friend);

// //Remove elements
// friend.pop();//Remove last element
// const popped=friend.pop();
// console.log(popped);
// console.log(friend);

// //friend.shift();//Remove first element
// const shifted=friend.shift();
// //console.log(shifted);
// console.log(friend);

// console.log(friend.indexOf('rahul'));
// console.log(friend.indexOf('varun'));

// friend.push(27);
// console.log(friend.includes('rahul'));
// console.log(friend.includes('nnnnnnnnnnnnn'));
// console.log(friend.includes(27));

// if(friend.includes('Varun')){

//     console.log('you have a friend called varun');
// }

//Coding Challenge
// const tipClac=function (bill) {
//     return bill>=50&& bill<=300?bill:0.15;
//     bill*0.2;
// }

// // const tipClac=bill=>

// const bills=[225,677,788];
// const tips=[tipClac(bills[0]),tipClac(bills[1]),tipClac(bills[2])];
// const totals=[bills[0],tips[0],bills[1]+tips[1],bills[2]+tips[2]];

// console.log(bills,tips,totals);

//Objects in JAVASCRIPTS

// const naurangiArray=[
//     'naurangi',
//     'lal',
//     2022-2002,
//     'student',
//     ['naurangi','rahul','Varun']
// ];

// console.log(naurangiArray);

// const naurangi={
//     firstName:'naurangi',
//     lastName:'lal',
//     age:2022-2002,
//     status:'student',
//     friend:['naurangi','rahul','Varun']
// };

// console.log(naurangi );
// console.log(naurangi['lastName']);

// //.DOT vs ()BRACKETS notation

// console.log(naurangi.friend);
// console.log(naurangi['lastName']);

// const nameKey='Name';
// console.log(naurangi['first'+nameKey]);
// console.log(naurangi['last'+nameKey])

// const interstedIn=prompt('What do you want about naurangi? Choose b/w firstname ,lastName,age,job firend');

// console.log(naurangi[interstedIn]);

// if(naurangi[interstedIn]){
//     console.log(naurangi[interstedIn]);
// }else{
//     console.log('Wrong request! Choose b/w firstname ,lastName,age,job firend');

// }

// naurangi.location='India';
// naurangi['twitter']='@Nauarangi23';
// console.log(naurangi);

// console.log(`${naurangi.firstName} has ${naurangi.friend.length} friend and best frined is ${naurangi.friend[2]}:`)

//Objects Methods

// const naurangi={
//     firstName:'naurangi',
//     lastName:'lal',
//     birthYear:2002,
//     status:'student',
//     friend:['naurangi','rahul','Varun'],
//     hasDriverLicense:true,

//     // calcAge:function (birthYear) {
//     //     return 2023-birthYear;
//     // }
//     // calcAge:function () {
//     //     //console.log(this);
//     //     return 2023-this.birthYear;
//     // }
//     calcAge:function () {
//         this.age=2023-this.birthYear;
//         return this.age;
//     },
//     getSummary:function(){
//         return`${this.firstName} is a ${this.calcAge()}-year old ${naurangi.status},and he has ${this.hasDriverLicense?'a':'no'} driver's license.`;
//     }
// };
// console.log(naurangi.calcAge());

// console.log(naurangi.age);
// console.log(naurangi.age);
// console.log(naurangi.age);
// // console.log(naurangi['calcAge'](2002));

// console.log(`${naurangi.firstName} is a ${naurangi.age}-year old Student, and he has a driver license${naurangi.hasDriverLicense} `);
// console.log(naurangi.getSummary());

// Coding Challenge

// const naurangi={
//     fullName:'Naurangi',
//     mass:49,
//     height:1.56,
//     calcBMI: function () {
//         this.bmi=this.mass/this.height**2;
//         return this.bmi;

//     }
// }

// const rajesh={
// fullName:'Rajesh',
// mass:55,
// height:1.50,
// calcBMI:function () {
//     this.bmi=this.mass/this.height**2;
//     return this.bmi
// }
// }
// naurangi.calcBMI();
// rajesh.calcBMI();
// console.log(naurangi.bmi,rajesh.bmi);

// if(naurangi.bmi>rajesh.bmi){
//     console.log(`${naurangi.fullName}'s BMI (${naurangi.bmi}) is higher than ${rajesh.fullName}'s BMI ${rajesh.bmi}`);
// }else if(rajesh.bmi>naurangi.bmi){
//     console.log(`${rajesh.fullName}'s BMI (${rajesh.bmi}) is higher than ${naurangi.fullName}'s BMI ${naurangi.bmi}`);
// }

//LOOPS IN JAVASCRIPTS

// let n=5;
// let string="";
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n-i;j++){
//         string+=" ";
//     }
//     for(let k=0;k<i;k++){
//         string+="*"
//     }
//     string+="\n";
// }
// console.log(string);

const naurangiArray = [
  'naurangi',
  'lal',
  2022 - 2002,
  'student',
  ['naurangi', 'rahul', 'Varun'],
  true,
];

types = [];

for (let i = 1; i < naurangiArray.length; i++) {
  console.log(naurangiArray[i], typeof naurangiArray[i]);

  types[i] = typeof naurangiArray[i];
}
console.log(types);
