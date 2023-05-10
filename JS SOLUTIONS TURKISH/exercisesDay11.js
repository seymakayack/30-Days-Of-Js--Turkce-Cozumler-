/*const constants = [2.72, 3.14, 9.81, 37, 100]
const [e,pi,gravity,humanBodyTemp, waterBoilingTemp]=constants;
console.log(e,pi,gravity,humanBodyTemp, waterBoilingTemp);
console.log([...constants]);


const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const[fin, est, sw, den, nor]= countries;
console.log(fin);

const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
};
const {width, height, area,perimetr}=rectangle
console.log(width);

const users = [
    {
    name:'Brook',
    scores:75,
    skills:['HTM', 'CSS', 'JS'],
    age:16
    },
    {
    name:'Alex',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
    },
    {
    name:'David',
    scores:75,
    skills:['HTM','CSS'],
    age:22
    },
    {
    name:'John',
    scores:85,
    skills:['HTML'],
    age:25
    },
    {
    name:'Sara',
    scores:95,
    skills:['HTM', 'CSS', 'JS'],
    age: 26
    },
    {
    name:'Martha',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
    },
    {
    name:'Thomas',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
    }
    ]

//? LEVEL-2
//? SORU-1
for(const user of users){
    const {name,scores,skills,age}=user;
    console.log(user);
}

//? SORU-2
const filteredUsers = users.filter(({skills}) => skills.length < 2);
console.log(filteredUsers);

//? LEVEL-3
//? SORU-1



//? SORU-2
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const[name,languages,[,,score3,score4]]=student;
console.log(name,languages,[,,score3,score4]);

//? SORU-3
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

function convertArrayToObject(arr){
    const convert=[];
    const [[name,lang,nums],[name1,lang1,nums1]]=arr;
    const converObj= {
        first: {
            name:name,
            skills: lang,
            scores:nums
        },
        second: {
            name:name1,
            skills: lang1,
            scores:nums1
        },


    };
    convert.push(converObj);
    return convert;


};
console.log(convertArrayToObject(students));

//? SORU-4
const student = {
    name: 'David',
    age: 25,
    skills: {
    frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
    ],
    backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
        { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
    }
}
const newStudent={...student};
const {skills: {frontEnd}}=newStudent;
const {skills: {backEnd}}=newStudent;
const {skills: {dataBase}}=newStudent;
const {skills: {dataScience}}=newStudent;
newStudent.skills.frontEnd=[...frontEnd, {skill: 'BootStrap',level: 8}];
newStudent.skills.backEnd=[...backEnd, {skill: 'Express',level: 9}];
newStudent.skills.dataBase=[...dataBase, { skill: 'SQL',level: 8}];
newStudent.skills.dataScience=[...dataScience, 'SQL'];
console.log(newStudent);





*/



