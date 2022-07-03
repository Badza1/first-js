var myVariables = 'gio';


let stri = "Aa12#!&$"
if (stri.length < 8 ) {
    console.error('უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს')
}

let mid = `ეს არის ჩემი პირველი java script კოდი`;
let finalmid = mid.slice(13,20);
console.log(finalmid);

let rep =`(ეს არის ჩემი პირველი java script კოდი)`;
let finalrep = rep.replaceAll('java script' , 'js')
console.log(finalrep);

let split =`(ეს არის ჩემი პირველი java script კოდი)`;
let finalsplit = split.split(' ')
console.log(finalsplit);

let start =`ეს არის ჩემი პირველი java script კოდი)`;
let finalstart = start.startsWith('ეს')
console.log(finalstart);

let search =`(ეს არის ჩემი პირველი java script კოდი)`;
let finalsearch = search.search('java')
console.log(finalsearch);

let up =`this is my first java script code`;
let finalup =up.toUpperCase('this is my first java script code');
console.log(finalup);

let tr =`           ეს არის ჩემი პირველი java script კოდი          `;
let finaltr =tr.trim('');
console.log(finaltr);




