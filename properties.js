const bottole = { color: 'yellow', hold: 'water', price: 50, isCleaned: true };
//getting all properties names
const keys = Object.keys(bottole);
//console.log(keys);

//getting all values of a object
const values = Object.values(bottole);
//console.log(values);

const pairs = Object.entries(bottole);
//console.log(pairs);

//Object.seal(bottole); 
/*seal mne hosse kono ekta object er existing property k change korte parbo but delete korte parbona othoba onno kono new property add korte parbona.*/

Object.freeze(bottole);
/*freeze mne hoilo kono object er property change ba delete ba new kono property add kora eshb kono kichui korte parbona.*/

bottole.price = 100;
bottole.height = 16;

//object property deletting
delete bottole.isCleaned;
console.log(bottole);





