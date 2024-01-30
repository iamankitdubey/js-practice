//trim string
const name1 = "     Ankit Dubey     ";
console.log(name1.trim());
//trim start and end
console.log(name1.trimStart());
console.log(name1.trimEnd());

const name = "Ankit Dubey"
const friend = "Jerry";
//length
console.log(name.length);
//upper and lower case
console.log(name.toUpperCase());
console.log(name.toLowerCase());

//replace
const name2 = "ankdubeankdubeankdube";
console.log(name2.replace("dub","Sub"));
//replaceall
console.log(name2.replaceAll("dub","Sub"));

//concat
console.log(name.concat(" is a friend of ",friend));
//at
console.log(name.at(-5));
//charAt
console.log(name.charAt(8));
//charCodeAt
console.log(name.charCodeAt(9));
//check position
console.log(name[9]);
//slice
console.log(name.slice(-4,10));
//substring
console.log(name.substring(6,3));
//substr
console.log(name.substr(4,3));
//padstart
const number = "5";
console.log(number.padStart(6,"1"));
//padend
console.log(number.padEnd(6,"3"));
//repeat
console.log(name.repeat(4));











    
