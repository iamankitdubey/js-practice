//ques.1
const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};
console.log(Object.keys(student));

//ques.2
const student1 = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};
console.log(Object.keys(student1));
delete student1['rollno']; 
console.log(Object.keys(student1));

//ques.3
const student2 = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};
console.log(Object.keys(student2).length);

//ques.4
const library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
 ];
 for(let i=0;i<library.length;i++){
    let rs = Object.values(library[i]);
    console.log(rs);
}





