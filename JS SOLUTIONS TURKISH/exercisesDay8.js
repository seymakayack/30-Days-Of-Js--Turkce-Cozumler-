//? LEVEL1
//? SORU-1,2,3,5,6

/* const dog= {
    name: 'Misha',
    legs: 4,
    color: 'white',
    age:3,
    bark(){
        return ("Woof woof");
    }
}

console.log(dog.bark());
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
*/

/*//? LEVEL-2 
//? SORU-2
const user = {
    Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
    },
    Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
    },
    Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
    },
    Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
    },
    John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
    },
    Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
    },
    Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
    }
}

let count=0;
for( let x in users){
    if(users[x].isLoggedIn){
        count++;
    }
}
console.log(count);

let point50Counter=0;
for (let a in users){
    if(users[a].points>=50){
        point50Counter++;
    }
}

console.log(point50Counter);

//? SORU-3
for(let name in users){
    if(users[name].skills.includes('MongoDB', 'Express', 'React', 'Node')){
        console.log(name);
    }
}

//?SORU-4
let copyObject= Object.assign({}, users);
copyObject.name='Seyma';
console.log(copyObject);

//?SORU-5
for(let keys in users){
    console.log(keys);
}

//?SORU-6
let value=Object.values(users);
console.log(value);

//? LEVEL-3
//? SORU-1

const personAccount= {
    firstName:'Seyma',
    lastName:'Kayacik',
    incomes:0,
    expenses:3000,
    totalIncome: function (){
        return this.incomes;
    },

    totalExpenses: function(){
        return this.expenses;
    },

    accountInfo: function(){
        return `firstname is ${this.firstName} and lastname is ${this.lastName}`;
    },

    addIncome: function(){
        return this.incomes+2000;
    },

    addExpenses: function(){
        return this.expenses+2500;
    }
}

console.log(personAccount.addIncome());

//?SORU-2

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
]

//? 2-a
function signUp(user){
    
    let newId= {
        _id: 'dfgdfg',
        username: 'Tom',
        email: 'tom@tom.com',
        password: '123123',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    };

    let emailExist=false;

    for(let i=0;i<user.length;i++){
        if(user[i].email==newId.email){
            emailExist=true;
            console.log('Please enter another email address');
            break;
        }
    }

    if(!emailExist){
        user.push(newId);
    }
    console.log(user);
}
signUp(users);

//? 2-b
function signIn(member){

        member.isLoggedIn=true;
        console.log(member);
}

signIn(users[0]);

//? SORU-3
const products = [
    {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
    },
    {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
    },
    {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
    }
]

//? 2-a
function rateProduct(productB){

    productB.ratings=[{userId: 'skdjhd', rate: 7 }];
    console.log(productB);
}


//? 2-b
let avarageRating= ()=>{
    let sum=0;
    let avr;
    for(let i=0;i<1;i++){ // Burada sadece products[0]'da 2 tane rate old. için onun ortalamasını aldım.
        for(let j=0;j<2;j++){
            sum+=products[i].ratings[j].rate;
        }
        avr=sum/products[0].ratings.length;
    }
    console.log(avr);
}

avarageRating();

console.log(products[0].likes[0]);
//? SORU-4
likeProduct=(id,product)=>{
    if(product.likes.includes(id)){
        product.likes.splice()
    }

    else{
        product.likes.push(id);
    }
    console.log(product.likes);
}

likeProduct('ab12ex',products[0]);
*/


