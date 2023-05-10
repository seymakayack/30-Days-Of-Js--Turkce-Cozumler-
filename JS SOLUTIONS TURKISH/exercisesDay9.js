/*//? LEVEL-1
//? SORU-2

function evenNumbers(asd){
    return asd+asd;
}

function sum(f,num){
    return f(num)+num;
}

console.log(sum(evenNumbers,3));

//? SORU-3
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const arr=[];
let upperCase= country => { 
    console.log(country);
};
countries.forEach(upperCase);

//? SORU-4
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
let print= peopleName=> console.log(peopleName);
names.forEach(print);

//? SORU-5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach(function(num){
    console.log(num);

})

//? SORU-6
let letterIsImportant= countries.map((huge)=> huge.toUpperCase());
    
console.log(letterIsImportant);

//? SORU-7
const countriesLength= countries.map((country)=> country.length)
console.log(countriesLength);

//? SORU-8
const squareFunc=  numbers.map((square)=> (square*square));
console.log(squareFunc);

//? SORU-10
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

const price= products.map((item)=> Number(item.price)); //TODO : Number methodu string ya da herhangi bi type'ı sayıya çevirir.
console.log(price);

//? SORU-11
const land= countries.filter((country)=> country.includes('land') || country.includes('Land'));
console.log(land);

//? SORU-13
const result=countries.filter(function countryChar(sixChar){
    return sixChar.length>=6;

})
console.log(result);

//? SORU-14
const result1= countries.filter(function firstIndex(ind){
    return ind[0]=='E'
})
console.log(result1);

//? SORU-15
const result2= products.filter(function price(value){
    return Number(value.price);
})
console.log(result2);

//? SORU-16
// TODO: Önemli bir soru.
const complexArr=[5,'hi', true, 'hello'];
function getStringList(arr){
    const stringArr= arr.filter(item=> typeof item== 'string');
    return stringArr;
}
const stringArr= getStringList(complexArr);
console.log(stringArr);

//? SORU-17
const sumNumbers= numbers.reduce((acc, cur)=> acc+cur,2);
console.log(sumNumbers);

//?SORU-18
const countries1 = ["Estonia", "Finland", "Sweden", "Denmark", "Norway", "IceLand"];

const sentence = countries1.reduce((accumulator, currentValue, currentIndex, array) => {
if (currentIndex === array.length - 1) {
    return accumulator + "and " + currentValue + " are north European countries";
} else {
    return accumulator + currentValue + ", ";
}
}, "");

console.log(sentence);

//? SORU-20
const seven= names.some(name=> name.length>7);
console.log(seven);

//? SORU-21
const word=countries.every(contain=> contain.includes('land'));
console.log(word);

//? SORU-23
const firstCountry= countries.find(sixLetter=> sixLetter.length=6);
console.log(firstCountry);

//? SORU-24
const firstCountry1= countries.findIndex(sixLetter1=> sixLetter1.length=6);
console.log(firstCountry1);

//? SORU-25
const position= countries.findIndex(c=> c.includes('Norway'));
console.log(position);

//? SORU-26
const position1= countries.findIndex(c=> c.includes('Russia'));
console.log(position1);


//? LEVEL-2
//? SORU-1
/* const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
] 

const totalPrice=products
.filter((product)=> product.price!=='')
.map((product)=> Number(product.price))
.reduce((acc,cur)=> acc+cur,0);

console.log(totalPrice);

//? SORU-2
const sumOfPrice = products.reduce((acc, cur) => {
    let a = Number(cur.price);
    return acc + a;
},0);

console.log(sumOfPrice); 

//? SORU-3

const categorizeCountries= Countries123.filter((categorize)=> {
    return categorize.name.includes('land');
});

console.log(categorizeCountries);

//? SORU-5
const getFirstTenCountries= Countries123.filter((tenCountry,index)=> index<10);
console.log(getFirstTenCountries);

//? SORU-6
const getLastTenCountries= Countries123.filter((tenCountry,index)=> index>(Countries123.length-11));
console.log(getLastTenCountries);

//? SORU-7
const initialLetter= Countries123
.filter((letter)=>{
    return letter.name[0].includes('F');})
console.log(initialLetter.length);

//? LEVEL-3
//? SORU-1
const byName=Countries123.map(country=> country.name);
console.log(byName.sort());

const byCapital=Countries123.map(country=> country.capital);
console.log(byCapital.sort());

const byPopulation=Countries123.map(country=> country.population);
console.log(byPopulation.sort(function(a,b){
    return a-b;
}));  

//?SORU-2
const languages1=Countries123.map(language=> language.languages)
.map(arr=> arr[0]);

let itemCount=[];
languages1.map(function (x) {
    (itemCount[x]=(itemCount[x] || 0)+1)
})
const language = languages1.filter((item,index) =>{return languages1.indexOf(item)==index; });

const mostSpokenLanguages= language.map (msl=> {
    return {
        language: msl,
        count: itemCount[msl]
    };
})
.sort((a,b)=>b.count-a.count);
console.log(mostSpokenLanguages);


//? SORU-3
const mostPopulatedCountries= Countries123.map((country)=>{ 

    return {
        name:country.name,
        population:country.population
    };

})
.sort((a,b)=>b.population-a.population);
console.log(mostPopulatedCountries);


//? SORU-4
const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
let itemCount=[];
let statistic={
    countFunction: function count(){
        return ages.length;
    },
    
    sum: ages.reduce(function sum(acc,cur){
        return acc+cur;
    }),

    minFunction: function min(){
        return Math.min(...ages);
    },
    
    maxFunction: function max(){
        return Math.max(...ages);
    },

    range: function(bigNumFunc,smallNumFunc){
        return bigNumFunc()- smallNumFunc()
    },

    meanFunction: function mean (){
        return this.sum/ages.length
    },

    median: function median() {
        ages.sort(function sort(a, b) {
        return a - b;
        });
        let middle = Math.floor(ages.length / 2);
        if (ages.length % 2 === 0) {
        return (ages[middle - 1] + ages[middle]) / 2;
        } else {
        return ages[middle];
        }
    },

    mode: function findMode(arr){
        const itemCount={};

        arr.forEach(function(item) {
            itemCount[item]=((itemCount[item]||0)+1);
        });
        
        let modes=[];
        let maxCount=0;
        for(const[key,value] of Object.entries(itemCount)){
            if(value>maxCount){
                modes=[key];
                maxCount=value;
            }
            else if (value==maxCount){
                modes.push(key);
            }
        }
        return modes;
    },

    var: function calculateVariance(fSum, arr) {
        const n = arr.length;
        const xbar = fSum / n;
        let variance = 0;
        for (const x of arr) {
        variance += Math.pow(x - xbar, 2);
        }
        return variance / n;
    },

     

    },

};
console.log('Count:', statistic.countFunction());
console.log('Sum: ', statistic.sum);
console.log('Min: ', statistic.minFunction());
console.log('Max: ', statistic.maxFunction());
console.log('Range',statistic.maxFunction()-statistic.minFunction());
console.log('Mean: ', statistic.meanFunction());
console.log('Median: ',statistic.median());
console.log('Mode: ', statistic.mode(ages));
console.log('Variance: ',statistic.var(statistic.sum,ages));
console.log('Standard Deviation: ', statistic.std(statistic.sum,ages));

*/
















