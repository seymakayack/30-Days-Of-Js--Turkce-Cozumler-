/* const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
 
for(let i=0;i<11;i++){
    console.log(i);
}
let i=0;
while(i<11){
    console.log(i);
    i++;
}

let i=0;
do{
   
    console.log(i);
    i++
} while(i<11)

let i;
let j;
for(i=0;i<7;i++){
   for(j=0;j<i;j++){
    console.log('#') ;
   }
   
}
let i;
let j;
for(i=0;i<7;i++){
   for(j=0;j<i;j++){
    console.log('#') ;
    }
}

let str = "";
for (let i = 0; i < 7; i++) {
    str += "#";
    console.log(str)
}

let i=0;
for(i=0;i<11;i++){

    console.log(`${i}*${i}=${i*i}`);
}

for(i=0;i<11;i++){
    console.log(i);
    
}  */

/*
let i;
let j;
for(i=0;i<7;i++){
   for(j=0;j<i;j++){
    console.log('#') ;
   
    }
    
} 
let product=1;
for(let i=1;i<11;i++){
    
    product*=i;
    console.log(product);

}

for(let i=0; i<=101;i++){
    console.log(i, i**2, i*i*i);
}*/

//? PRIME NUMBER CODE
/*let count=0
let i,j 
for(j=2;j<=100;j++)
{
for( i=1;i<=j;i++)
{
    if(j%i==0)
    count++
}

if(count==2)

console.log(j)
count=0



} 
let i=0;
let sum=0;
for(i=0; i<=100;i++){
sum+=i;

}
console.log(sum);

let i=0;
let sum1=0;
let sum2=0;
for(i=0; i<=100;i++){
    if(i%2==0){
        sum1+=i;
    }

    else{
        sum2+=i;
    }

}
console.log(`Sum of even numbers are ${sum1}`);
console.log(`Sum of odd numbers are ${sum2}`);


//?SUM'LARI ARRAY OLARAK YAZDIRMAK
let i=0;
let sum1=0;
let sum2=0;
const arr=[];
for(i=0; i<=100;i++){
    if(i%2==0){
        sum1+=i;
    }

    else{
        sum2+=i;
    }
    

}
arr.push(sum1);
arr.push(sum2);
console.log(arr);

//?RASTEGELE TEKRAR ETMEYEN 5 SAYI OLUŞTURMA
const arr=Array ();
for( let i=0;i<5;i++){
    let r=Math.floor(Math.random()*10);
    if(arr.indexOf(r)==-1){
        arr.push(r);
    }
    else{
        i--;
    }


}
console.log(arr);

//?RASTGELE KARAKTER YAZDIRMAK(ŞİFRE İÇİN)
let chars='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let num;
let str=" ";
for(let i=0; i<chars.length; i++){
    str+=chars.charAt(Math.floor(Math.random()*chars.length));
    
}
console.log(str);

//?RASTGELE HEXADECIMAL KARAKTER ŞİFRELEME
let char='0123456789ABCDEF';
let str='';
for(let i=0; i<char.length;i++){
    str+=char.charAt(Math.floor(Math.random()*char.length));

}
console.log(str);

//?RGB(240,180,80)RANDOM NUMBERS
let num=Array();
for(let i=0;i<3;i++){
n=(Math.floor(Math.random()*255));
num.push(n);
numm=num.toString();


}
console.log("rgb(", numm,")");

//?ARRAY ELEMANLARININ UZUNLUĞUNDA YENİ ARRAY OLUŞTURMA
const arr=["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
let newArr=Array();
for(let i=0;i<arr.length;i++){
   a= arr[i].length;
   newArr.push(a);
}
console.log(newArr);

//?  ['albania', 'ALB', 7] ŞEKLİNDE ARRAY OLUŞTURMA
const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];

const countryData = [];

for (let i = 0; i < countries.length; i++) {
  const country = countries[i];
  const countryName = country.toLowerCase();
  const countryCode = country.substring(0, 3).toUpperCase();
  const countryNameLength = country.length;
  countryData.push([countryName, countryCode, countryNameLength]);
}

console.log(countryData);

//? 7-'LAND' İLE BİTEN ÜLKELERİ ARRAY İÇİNDE YAZDIRMA
const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
let arr=[];
for(let i=0;i<countries.length; i++){
    let countryData=countries[i];
    countriesLength=countryData.length;
    a=countriesLength-4;
    a=countryData.substring(a,countriesLength);
    if(a=='LAND'){
        arr.push(countries[i]);
        
    }
    
}
console.log(arr);


//? 8-'ia' İLE BİTEN ÜLKELERİ YAZDIRMA
const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
let arr=[];
for(let i=0;i<countries.length;i++){
    let countryData=countries[i];
    a=countryData.substring((countryData.length-2),countryData.length);
    if(a=='IA'){
        arr.push(countries[i]);
    }
}
console.log(arr);

//? 9-COUNTRİES ARRAY'DEKİ EN UZUN DİZİ ELAMANINI BULMA
const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
let i=0;
maxNumber=countries[0].length;
for(i=0;i<countries.length;i++){

    if(maxNumber>countries[i].length){

    }
    else{
        maxNumber=countries[i].length;
        maxLengthCountry=countries[i];
    }
    
}
console.log(maxLengthCountry);

//? 10-COUNTRY CONTAINING ONLY 5 CHARACTERS
const countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
let i=0;
let arr=[]
for(i=0;i<countries.length;i++){

    if(countries[i].length==5){
        arr.push(countries[i])
    }
    
    }
console.log(arr);

//?11-LONGEST WORD IN THE WEBTECHS ARAY
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
let i=0;
let maxLength;
for(i=0;i<webTechs.length;i++){
    maxLength=webTechs[0].length;
    if(maxLength<webTechs[i].length){
        maxLength=webTechs[i].length;
        maxLengthWT=webTechs[i];
    }
} 
console.log(maxLengthWT);

//?12-[["HTML", 4], ["CSS", 3]....] FORMATINDA YAZMA
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  let i=0;
  let webTName;
  let webTLength;
  let arr=[];
  for(i=0;i<webTechs.length;i++){
    webTName=webTechs[i];
    webTLength=webTechs[i].length;
    arr.push([webTName, webTLength]);
  }
console.log(arr);

//? 13-DİZİ ELEMANLARININ İLK HARFİNDEN DİZİ OLUŞTURMA
let mernStack=['MongoDB', 'Express', 'React', 'Node'];
let mernLetter=[];
let firstLetter;
for(i=0;i<mernStack.length;i++){
    firstLetter=mernStack[i].substring(0,1);
    mernLetter.push(firstLetter);
}
console.log(mernLetter);

//?DİZİYİ TERSTEN YAZDIRMA(REVERSE METHODU KULLANMADAN)
const fruits=['banana', 'orange', 'mango', 'lemon'];
let i=0;
let arr=[];
for(i=0;i<fruits.length;i++){
    arr.unshift(fruits[i]);
}
console.log(arr);

//?16- ÇIKTISI:
//?HTML
//?CSS
//?.
//?. OLAN KOD.
const fullStack = [  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];

for (let i = 0; i < fullStack.length; i++) {
  for (let j = 0; j < fullStack[i].length; j++) {
    console.log(fullStack[i][j]);
  }
}

//? LAND KELİMESİNİ İÇEREN ELEMANLARI DİZİDEN SİL VE YENİ DİZİYE AT
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  let country;
  let newArr=[];
  let a;
  let b;
  for (let i = 0; i < countries.length; i++){
    a=countries[i].length-4
    b=countries[i].length
    country=countries[i].substring(a,b);
    if(country=='land'){
        newArr.push(countries[i]);
        countries.splice(i,1);

    }
  }
  console.log(newArr);
  console.log(countries);
//?LEVEL3 SORU 9
  const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  countries.reverse();
  for (let i = 0; i < countries.length; i++){

    console.log(countries[i].toUpperCase());

     for(let i=0;i<3;i++){
    let arr1=[];
    let a=rgb[i]/16; 
    a=Math.floor(a);
    let b=rgb[i]%16;
    arr1.push(a);
    arr1.push(b);
    arr1=arr1.toString();
    console.log(arr1);

    }

  }*/
  





























































