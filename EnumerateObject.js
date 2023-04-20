//Enumerating properties of an object
//get all the properties of an object

const circle = {

    radius : 1,
    draw(){
        console.log('draw');
    }
}; 

//for - in loop:
for(let key in circle)
    console.log(key, circle[key]); 

    console.log('------')

    //2. for - of loop:
    for(let key of Object.keys(circle))
    console.log(key);

    for(let key of Object.entries(circle))
    console.log(key);


    //3. in operator:
    //check a property in an object:
    if('price' in circle)
    console.log('Yes'); 

    if('draw' in circle)
    console.log('Yes'); 
