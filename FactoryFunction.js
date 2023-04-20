//factory function: it produces objects

function createCircle(radius){

    const circle = {
    radius : radius, 
        draw(){
            console.log('draw');
        }

    }
    return circle;
}
const c1 = createCircle(1);
console.log(c1);
console.log(c1.radius);
c1.draw();

const c2 = createCircle(1);
console.log(c2.radius);

//Constructor Function: also used to create objects
//Name: camel case: oneTwoThreeFour
//Name: pascal notation: OneTwoThreeFour

function circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

//how to call constructor function: use new keyword
const a = new circle();
console.log(a);
console.log(a.radius);
a.draw();

