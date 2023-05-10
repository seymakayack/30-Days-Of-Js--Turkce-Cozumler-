/*1-
function fullName(){
    console.log('Şeyma Kayacik')
}

fullName(); 

2-
function fullName(firstName, lastName){
    console.log(firstName, lastName);
}

fullName('Seyma', 'Kayacik');

3-
function addNumbers(num1, num2){
    console.log(num1+num2);
    
    return num1+num2;
}

addNumbers (1,7);

4-
function rectangleArea(length, width){
    console.log(length*width);
}

rectangleArea(3,7);

7-
function circleArea(r){
    let area;
    area=Math.PI*r*r;
    console.log(area);
}

circleArea(5);

13-
function bodyMassIndex(weight, height){
    let bmi;
    bmi=weight/(height*height);
    console.log(bmi);

    if(bmi<18.5){
        console.log('Underweight');
    }

    else if(bmi<=24.9 && bmi>=18.5){
        console.log('Normal weight');
    }

    else if(bmi<=29.9 && bmi>=25){
        console.log('Overweight');
    }

    else {
        console.log('Obese');
    }
}

bodyMassIndex(69, 1.64);

14-
function checkSeason(month){
    const date=new Date();
    let a=date.getMonth()+1;
    console.log(a);
    
    if(a<=11 && a>=9){
        console.log("Autumn");

    }

    else if(a<=5 && a>=3){
        console.log("Spring");
    
    }

    else if(a<=8 && a>=6){
        console.log("Summer");
    }

    else{
        console.log("Winter");
    }

    
}
checkSeason();

15-
function findMax(num1,num2,num3){
    let maxValue=num1;
    if(num2>num1){
        maxValue=num2;
    }

    if(num3>num2){
        maxValue=num3;
    }

    console.log(maxValue);

}

findMax(45,2,0);

LEVEL-2

3-
function printArray(arr){
    console.log(arr);

}

const arr=[1,5,4,3,2]
printArray(arr);x

4-
function showDateTime(){
    let a=new Date();
    let day=a.getDay()+1;
    let month=a.getMonth()+1;
    let year=a.getFullYear();
    let hour=a.getHours();
    let second=a.getMinutes();
    month=(month<10? '0'+month: month);
    day=(day<10? '0'+day: day);
    hour = hour < 10 ? "0" + hour : hour;
    
    let date=`${day}/${month}/${year} ${hour}:${second}`;
    console.log(date);

}

showDateTime();

5-
function swapValues(x,y){
    console.log(`${y}, ${x}`);

}
swapValues(3,4);

6-
function reverseArr(arr2){

    let i=0;
    let arr=[];
    for(i=0;i<5;i++){
        arr.unshift(arr2[i]);
    }
    console.log(arr);
}
const arr2=[1, 2, 3, 4, 5];
reverseArr(arr2);

7-
function capitalizeArray(arr){
    
    const capitalizedArr=[];
    let i=0;
    for(i=0;i<arr.length;i++){
       const capitalizedElements= arr[i].toUpperCase();
       capitalizedArr.push(capitalizedElements);
    }
    console.log(capitalizedArr);

}
capitalizeArray(['Seyma:',  'Salih',' Leman', 'Gülşah', 'Gülay', 'Askimmm']);

10-
function sumOfNumbers(num1,num2){
    let sum=0;
    let i=0;
    let a=num2-num1;
    for(i=0;i<=a;i++){
        
        sum+=num1
        num1++;
        
}
    console.log(sum);
} 

sumOfNumbers(3,6);

15-
function randomUserIp(arr){
    let randomm;
    let i=0;
    
    for(i=0;i<4;i++){

        randomm= Math.floor(Math.random()*255);
        arr.push(randomm);
    }
    console.log(`${arr[0]}.${arr[1]}.${arr[2]}.${arr[3]}`)
}

const arr=[];
randomUserIp(arr);

17-
function randomHexaNumberGenerator(){
   

    let char='0123456789ABCDEF';
    let str='';
    for(let i=0; i<6;i++){
        str+=char.charAt(Math.floor(Math.random()*char.length));
    
    }
    console.log(str);
}

randomHexaNumberGenerator();

//?LEVEL-3
//? 1-
function userIdGenerator() {
    let char='qwertyuıopğüişlkjhgfdsazxcvbnmöç1234567890';
    
    let argument=prompt("Please write the number of characters.");
    let argumentTwo=prompt("Please write the number of ids");
    
    for(let j=0;j<argumentTwo;j++){
        let str='';
        for(let i=0; i<argument;i++){
        str+=char.charAt(Math.floor(Math.random()*char.length));
        }
        console.log(str);
    }
    

    
    
} 

userIdGenerator();

//? 2-
let rgbColorGenerator=()=> {
    let num; 
    let arr=[];
    for(let i=0; i<3;i++){
       num =Math.floor(Math.random()*255);
        arr.push(num);
    }
    console.log(`rgb (${arr[0]},${arr[1]},${arr[0]})`);

}
rgbColorGenerator();

//? 3-
function arrayOfHexaColors(){


    let char='0123456789ABCDEF';
    let str='';
    let arr=[];
    for(let i=0; i<6;i++){
        
        str+=char.charAt(Math.floor(Math.random()*char.length));
    }
    arr.push(str);
    console.log(arr);
    return arr;

}

arrayOfHexaColors();

//? 4-
let arrayOfRgbColors=()=> {
    let num; 
    let arr=[];
    for(let i=0; i<3;i++){
       num =Math.floor(Math.random()*255);
        arr.push(num);
    }
    console.log(`rgb (${arr[0]},${arr[1]},${arr[0]})`);

}
arrayOfRgbColors();



//? SORU-5 HEXACOLOR'I RGB'YE ÇEVİRME
let arr=[];
function arrayOfHexaColors(){

    let char='0123456789ABCDEF';
    let str='';
    
    for(let i=0; i<6;i++){
        
        str+=char.charAt(Math.floor(Math.random()*char.length));
    }
    arr.push(str);
    console.log(arr);
    arr=arr.toString();
    return arr;

}
arrayOfHexaColors();

function convertHexaToRgb(hexa) {
    
    
    // Eğer hexa kodu uygun değilse null döndür
    if (hexa.length !== 6 || /[^a-f0-9]/i.test(hexa)) {
    return null;
    }
    
    var r = parseInt(hexa.slice(0, 2), 16); //? slice kullanarak ilk 2 haneyi alıyoruz rgb'nin her bir 
    var g = parseInt(hexa.slice(2, 4), 16); //?virgüllü kısmı 2 hexadecimmal color'dan oluştuğu için
    var b = parseInt(hexa.slice(4, 6), 16);//? 16'lık sayı old. için 16 yazdık ve decimal değer karşılığını aldık.

    var rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
    console.log(rgb);
        
}

convertHexaToRgb(arr);

//? SORU-6 RGB'Yİ HEXA'YA ÇEVİRME
let arr=[];
let arrayOfRgbColors=()=> {
    let num; 
    
    for(let i=0; i<3;i++){
    num =Math.floor(Math.random()*255);
        arr.push(num);
    }
    console.log(`rgb (${arr[0]},${arr[1]},${arr[2]})`);

}
arrayOfRgbColors();

function convertRgbToHexa(rgb){
    const newArr=[];
    let hexaNumber;
    for(let i=0;i<3;i++){
        let hexa=rgb[i].toString(16);
        newArr.push(hexa);

    }
    
    hexaNumber=newArr.join("");
    console.log(hexaNumber);



}

convertRgbToHexa(arr);


let arr=[];
function arrayOfHexaColors(){

    let char='0123456789ABCDEF';
    let str='';
    
    
        for(let i=0; i<6;i++){
        
        str+=char.charAt(Math.floor(Math.random()*char.length));
        }
    
        
        
    arr.push(str);
    console.log(arr);
    arr=arr.join("");
    return arr;

}
arrayOfHexaColors();


let arr1=[];
let arrayOfRgbColors=()=> {
    let num; 
    
    for(let i=0; i<3;i++){
    num =Math.floor(Math.random()*255);
        arr1.push(num);
    }
    console.log(`rgb (${arr1[0]},${arr1[1]},${arr1[2]})`);

}
arrayOfRgbColors();

//? LEVEL-3 /SORU-7 
let arr=[];
let arr1=[];
function generateColors(type,number){

    switch(type){
    case 'hexa':
        
        let char='0123456789ABCDEF';
    
    
    
        for(let j=0;j<number;j++){
            let str='';
            for(let i=0; i<6;i++){
        
                str+=char.charAt(Math.floor(Math.random()*char.length));
            }
            arr.push(str);
            
        }
        
        
        console.log(arr);
        arr=arr.join("");
        break;

    case 'rgb':
        const arr1=[];
        let num;
        let i=0;
        let j=0; 
        let str;
        const rgbArr=[];
        
        for(let j=0;j<number;j++){
            for(let i=0; i<3;i++){
                num =Math.floor(Math.random()*255);
                arr1.push(num);
                str=`rgb (${arr1[0]},${arr1[1]},${arr1[2]})`
            }
        rgbArr.push(str);    
        }
        console.log(rgbArr);
        break;
}

}
generateColors('rgb',5);

//? SORU-8 ARRAY'DEKİ ELEMANLARI RASTGELE KARIŞTIRIP TEKRAR YAZMA
let shuffleArray= (arr)=> {

for(let i=arr.length-1;i>0;i--){

    const j=Math.floor(Math.random()*(i));

    [arr[i],arr[j]]=[arr[j],arr[i]];

}

return arr;
}

const originalArr=[1,2,3,4,5];
const complexArr=shuffleArray(originalArr);
console.log(complexArr);

//? SORU-9 FAKTÖRİYEL BULAN FONKSİYON
let factorial= (number)=> {
let product=1;
    for(let i=1;i<=number;i++){
        product*=i;

    }
    console.log(product);

}

let j=Math.floor(Math.random()*100);
console.log(j);

factorial(j);

let isEmpty=() =>{

}

//? 10- DEĞİŞKENLERİN ATAMALARININ BOŞ OLUP OLMADIĞI KONTROL EDİLİYOR
function isEmpty(value){
    
        if(value==null || value==undefined){
        return true;
        }

        if(typeof value=='string' && value.length==0){
        return true;
        }

        if(Array.isArray(value) && value.length===0 ){
        return true;
        }

        if(value==true || value==false){
            return false;
        }

        else{
            return false;
        }
    }


const value1=null;
const value2='';
const value3=[];
const value5=0;
const value6=false;
console.log(isEmpty(value1));
console.log(isEmpty(value2));
console.log(isEmpty(value3));
console.log(isEmpty(value5));
console.log(isEmpty(value6));

//? 11-
function sum(...numbers){
    return numbers.reduce((acc,curr)=>acc+curr,0); 
// TODO: reduce fonksiyonundaki acc biriktirilen değişkenleri içerir
// TODO:curr o anki değeri ve sonra okla gösterilen yerde toplama yapılır   
}

console.log(sum(1,2,3));

//? 12- SUM FUNCTION THAT TAKES AN ARRAY PARAMETER
//? 12- PARAMETRE OLARAK DİZİ ALAN TOPLAM FONKSİYONU 
let sum=(argument)=>{
    let sum=0;
    for(let i=0;i<argument.length;i++){
        sum+=argument[i];
    }
    console.log(sum);
}

let arr=[3,6,5,1,0,8,6,5];
sum(arr);

//? 13-
function avarage(arr){
    let sum=0;
    let avarageNumber;
    
    for(let i=0;i<arr.length;i++){
        if(typeof arr[i]!=='number'){
            console.log(arr[i], "number tipinde değil");
        }

        else{
            sum+=arr[i];
        }
        
        
    }
    avarageNumber=sum/arr.length;
    console.log(avarageNumber);
}
numberArr=[5,6,7,1,0,7,6,44,'askim',09,78,4940]
avarage(numberArr);

//? 14-
function modifyArray(arr){
    

    if(arr.length<5){
        console.log("Not found.")
    }

    else{
        arr[4]=arr[4].toUpperCase();
        console.log(arr)
    }
}

const fruits=['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot'];
modifyArray(fruits);


//? 15-
function isPrime(num){
    let count=0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            count++;
        }

    }
    
    if(count==2){
        console.log(num, "is a prime number");
    }
    else{
        console.log(num, "is not a prime number");

    }


}
let number=Math.floor(Math.random()*100);
isPrime(number);

//? 16-
function unique(arr){
    let j=0;
    let i=0;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        
    }
    j++;
    if(arr[i]==arr[j]){
        console.log("This array is not unique")
    }
}
}
const numberArr=[1,12,3,4,4];
const isUnique=[1,2,3];
unique(numberArr);

//? 17-
function control(arr){
    let i=0;
    let j=0;

    if(arr.length<=1){
        return true;
    }
    for(let i=1;i<arr.length;i++){
        
        if(typeof arr[i]!==typeof arr[0]){
            return false;
        }
    }

    return true;
}
const diffArr=[5,'hello', true, []];
const numArr=[5,4,8,10,9];
console.log(control(numArr));
console.log(control(diffArr));

//? 18-
function isValidVariable(alp){
    for(let i=0;i<alp.length;i++){
        if(alp[i]=='$' || alp[i]=='_'){
            console.log(alp[i]," is valid");
        }

        else{
            console.log(alp[i]," is invalid");
        }
    }
}
signArr=['^','+','$','#','%','&','/','=','?','_','-','|','½','*'];
isValidVariable(signArr);

//? 19-
function sevenRandomNum(){
    const randArr=[];
    let i=0;
    let j=0;
    while(randArr.length<7){
        let randomNumber = Math.floor(Math.random() * 10);
        if (!randArr.includes(randomNumber)) {
            randArr.push(randomNumber);
        }
    }
    console.log(randArr);

    

}
sevenRandomNum();

//? 20-
function reverseCountries(arr){
    arr.slice();
    arr.reverse();
    console.log(arr);

}

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
reverseCountries(countries)*/






















































