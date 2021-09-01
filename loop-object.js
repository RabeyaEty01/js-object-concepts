const bottole = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};
/*
for(let i=0;i<10;i++){}
for(const num of numbers){} // array er khetre use korbo
for(const prop in student){} //object er khetre eta use korbo
*/

for (const prop in bottole) {
    //console.log(bottole.color);
    //console.log(prop, bottole[prop]);
    //console.log(bottole["color"]);
}

const keys = Object.keys(bottole);
//console.log(keys);
for (const prop of keys) {
    // console.log(prop,bottole[prop]);
}

//advanced
const entries = Object.entries(bottole);
// console.log(entries);
// const [key,value] =['color','yellow'];
for (const [key, value] of Object.entries(bottole)) {
    console.log(key, value);
}

//
// const arr = ['color', 'jeans', 'tom']
// arr['color'];