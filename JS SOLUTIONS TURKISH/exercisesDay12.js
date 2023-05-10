//? LEVEL-1
//? SORU-1
let str='He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
const annual= str.match(/\d+/g);
console.log(annual);
console.log(Number(annual[0])*12+Number(annual[1])+Number(annual[2])*12);

//? SORU-2
let string='-12,-4,-3,-1,0,4,8';
const points=string.match(/-?\d/g);
points.sort((a,b)=> a-b);
const distance= (points[points.length-1]-points[0]);
console.log(distance);

//? SORU-3
function is_valid_variable(str){
    console.log(
    /^[a-z][a-zA-Z0-9_]*$/g.test(str));
}

is_valid_variable('first_name') //True
is_valid_variable('first-name') //False
is_valid_variable('1first_name') // False
is_valid_variable('firstname') //True

/*//? LEVEL-2
//?SORU-1
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`

function tenMostFrequentWords(prg){
    
    const arr=prg.match(/[a-z]+/gi);
    const unrepeated= new Set(arr);
    const emptyArr=[];
    for(const x of unrepeated){
        const filteredArr=arr.filter(l=>l===x)
        console.log(filteredArr);
        emptyArr.push({word:x, count:filteredArr.length });
        
    }
    console.log(emptyArr);
};


tenMostFrequentWords(paragraph);*/

//? LEVEL-3
//? SORU-1
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
function cleanText(str){
    return str.replace(/\$|@|#|;|&|%|!/g, '');
}

console.log(cleanText(sentence));

function findMostFrequentWords(clean){
    const arr=clean.match(/[a-z]+/gi);
    const unrepeated= new Set(arr);
    const emptyArr=[];
    for(const x of unrepeated){
        const filteredArr=arr.filter(l=>l===x)
        console.log(filteredArr);
        emptyArr.push({word:x, count:filteredArr.length });
        
    }
    console.log(emptyArr);
};


findMostFrequentWords(cleanText(sentence));


