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
        products: [banana, apple, candy]};
    
        console.log(store);
        console.log(store.products);
        console.log(store.products[2]);
        store.products[0].price=1.75;
        console.log(store);
        console.log(banana);
        store.candy=4.99;
        console.log(store);
        console.log(candy);

//assignment 4
const houseForSale={
        area :940,
        value : 320000,
        streetName : "Fifth Street",
        built :"2012",
        owner : {name: "Blake", age: 29},
        offers : [290000, 295000, 315000, 312000]
}
     console.log(houseForSale);
     delete houseForSale['built']; 
     console.log(houseForSale);
     houseForSale.owner.age=30;
     console.log(houseForSale);
     const{offers}=houseForSale
     let max=offers[0];
     for(let a=0;a<offers.length;a++){
    if(max<offers[a]){
        max=offers[a]
    }
}
     console.log(max);
     houseForSale.salePrice=312000;
     console.log(houseForSale);




























