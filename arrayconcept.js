const num = [3, 4];

console.log(num.length);
console.log(num[0]);

//add an element at end of the array:
num.push(5,6);
console.log(num);

//add an element at beginning of the array:
num.unshift(1,2);
console.log(num);

//add an element at the middle of the array:
num.splice(2,0,'a', 'b');
console.log(num);


//how to print all the values from the array:
for (const key in num) {
    const element = num[key];
    
}
//find elements in array: (primitive type):

const s = [1,2,3,1,4];
console.log(s.indexOf(1));//1st ocurrence of 1
console.log(s.indexOf(5))
console.log(s.indexOf('a'))
console.log(s.indexOf('1'))
console.log(s.indexOf(1, 1))

//find elements in array: (ref type):
//Array can have Objects...

const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'}
];

//console.log(courses.includes({id: 1, name: 'a'})); //false
const c3 = courses.find(course => course.name === 'a');
   

console.log(c1);
console.log(c1.name);
console.log(c1.id);

const c2 = courses.findIndex(function(course){
    return course.name === 'a';
});

console.log(c2);

