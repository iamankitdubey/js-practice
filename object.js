//object.assign 1
const obj1 = {
    id:1,
    name:"ankit",
    email:"a@gmail.com"
}
const obj2 = {
    id2:2,
    name2:"smit",
    email2:"s@gmail.com"
}


const obj3 = Object.assign(obj1,obj2);
console.log(obj3); 

//use spread operator
const obj12 = {...obj1,...obj2};
console.log(obj12); 


//object.key 2
console.log(Object.keys(obj3));

//object.value 3
console.log(Object.values(obj3));

//object.create 4
const obj6 = {
    id:5,
    name:"dubey",
    email:"d@gmail.com"
}

const obj7 = Object.create(obj6);
console.log(obj7)
obj7.id=7;
obj7.name="patel"
obj7. email='p' 
console.log(obj7);

//object.entries 5
console.log(Object.entries(obj3));

//object.freeze 6
const obj8 = {
    id:8,
    name:"anki",
    email:"t@gmail.com"
}
console.log(Object.freeze(obj8));
obj8.id=9;
console.log(obj8);

//object.isFrozen 7
console.log(Object.isFrozen(obj8));

//object.seal 8

const obj9 = {
    id:8,
    name:"anki",
    email:"t@gmail.com"
}
console.log(Object.seal(obj9));
console.log(obj9)
obj9.name= 'jenis'
console.log(obj9)

//Object.isSealed 9
console.log(Object.isSealed(obj9))

//Object.is 10
const obj10 = {
    id8:9,
    name0:"anki",
    email9:"t@gmail.com"
}
console.log(Object.is(obj9.id, obj10.email9));














