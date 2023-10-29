import getClasses from "./getClasses"

console.log('ran froM index.js')
getClasses();

const obj = {a: 'alpha', b: 'bravo'};
const newObj = { ...obj, c: "charlie"};
console.log(newObj);
