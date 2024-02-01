//assignment 1
const mexico = {
    id:24,
    name:"Mexico",
    capital:"Mexico City",
    neighbours : ["USA", "Guatemala", "Belize"]
}
console.log(mexico);
mexico.id=25
console.log(mexico);
mexico.neighbours.push("Honduras");
console.log(mexico);

//assignment 2
const myPet = {
    name: "Sudo",
    type : "Dog",
    breed :"Poodle",
    age : 7,
    friends :["Bit", "Byte", "Data"]
}
console.log(myPet);
myPet.colour="black";
// myPet.breed=myPet.Beagle
myPet['Beagle'] = myPet['breed'];
delete myPet['breed']; 
console.log(myPet);
myPet.friends.pop();
console.log(myPet);
myPet.friends.push("Chip");
console.log(myPet);

//assignment 3
const banana = {name: "banana", quantity: 1, price: 1.95}
const apple = {name: "apple", quantity: 1, price: 1.45}
const candy = {name: "candy", quantity: 1, price: 3.50}
const store = {
        storeNumber: 5,
        locationCity :"Milan",
        locationCountry :"Italy",
        products: }











