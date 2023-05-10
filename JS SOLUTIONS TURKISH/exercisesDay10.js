//?LEVEL-1
/* const x= new Set();
for(let i=0;i<10;i++){
    x.add(i);
}
console.log(x);
x.delete(2);
console.log(x);
x.clear();
console.log(x);

const arr=['seyma','salih','gülay','hayri','kıymet'];
const set=new Set(arr);
console.log(set);

const countries = ['United States', 'Canada', 'Mexico', 'Brazil', 'Argentina', 'France', 'Germany', 'Spain', 'Italy', 'Japan'];

const countryMap = new Map();
for(let i=0;i<countries.length;i++){
    countryMap.set(countries[i], countries[i].length);
}
console.log(countryMap);
for(const country of countryMap){
    console.log(country);
}

//? LEVEL-2
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway'];

let c =[...a,...b];
let A=new Set(a);
let B=new Set(b);
console.log(new Set(c));

let intersection=a.filter(num=> B.has(num))
console.log(new Set(intersection));

let aWithB= a.filter(num=> !B.has(num));
console.log(aWithB);

//? LEVEL-3
const howMany=new Set(Countries123);
console.log(howMany.size);

const countriesData = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

const language=Countries123.map(l=> l.languages)
.map(arr=> arr[0]);
console.log(language);

const langSet= new Set(language);
console.log(langSet);

const counts=[];

for(const l of langSet){
    const filteredLang=language.filter((lng)=> lng===l);
    console.log(filteredLang);
    counts.push({lang:l, count: filteredLang.length});
}
console.log(counts);*/