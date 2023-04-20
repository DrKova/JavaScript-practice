//Arithmetic
//assignment
//Ternary
//comparison
//logical
//bitwise

//Arithmetic:
//let x = 10;
//let y = 20;
//console.log(x + y);
//console.log(x - y);
//console.log(x * y);
//console.log(y / x);
//console.log(x / y);
//console.log(2 ** 2);

//++ and --
//let p = 1;
//let q = p++;
//console.log(p++);//2
//console.log(q);//1

//let p1 = 1;
//let q1 = ++p1;
//console.log(p1);//2
//console.log(q1);//2

//let m = 2;
//console.log(m--);
//console.log(m);

//assignment
//let x = 10;
//let c = x+10;
//console.log(x+c);

//x = x * 10;
//x*= 10;
//console.log(x);

//let j = 5;
//j+= 5;
//console.log(j);

//comparison

//let x = 10;
//console.log(x>=10);

//console.log(x===10); 
//strict equality - type and value
//console.log(1===1);

//lose equality - value
//console.log('1' == 1);
//console.log(1 == 1);
//console.log(true == 1);


//Ternary

//let points = 110;
//let type = points > 100 ? 'gold' : 'silver';
//console.log(type);

//logical:
//AND (&&);

//let highIncome = true;
//let goodCreditScore = false;
//let eligibleForLoan = highIncome && goodCreditScore;

//console.log(eligibleForLoan);

//OR (||):

//NOT (!)
//let isActive = true;
//console.log(!isActive);
//console.log(!(10<5));

//logical oper with Non Boolean:
//falsy (false);
//undifined
//null
//0
//false
//''
//NaN

//truthy values : which are not falsy
//console.log(false || 'naveen');
//console.log(false || 1 || 2);
//console.log(true || 1 || 2);
//console.log(true || null);

//real time example
//let userColor = 'red';
//let defaultColor = 'blue';
//let currentColor = userColor || defaultColor;

//console.log(currentColor);


//bitwise
//1 = 00000001
//2 = 00000010
//3 = 00000011 -- |
//0 = 00000000 -- &

console.log(1 | 2);//3
console.log(1 & 2);//3

//Operator precedence:
console.log((2+3)*4);

//swap two values:
//let a = 10;
//let b = 20;
//let c = a; //10
  //  a = b; //20
   // b = c; //10
//console.log("a ->" + a);//20
//console.log("b ->" + b);//10

//6 am to 12 pm -- Good Morning
//12 pm to 6 pm -- Good AfterNoon
//else --- Good Evening





