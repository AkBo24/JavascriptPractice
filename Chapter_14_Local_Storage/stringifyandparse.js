/**
 * JSON provides a stringify() method to convert an array into JSON fomat
 * The .parse() from JSON converts it back into an array
 */
const shop = [
    {item1: "Dragon's Scale", location: "Kol"},
    {item2: "Odin's Bow", location: "Alchemy Pot"},
    {item3: "Sacred Armor", location: "Princess minnie"}
];

const stringify = JSON.stringify(shop);
console.log(stringify);

const parse = JSON.parse(stringify);
console.log(parse);