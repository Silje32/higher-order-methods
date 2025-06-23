/* En funksjon som tar inn en funksjon */
/* Vi skal ha 2 funksjoner: */

const logger = (result) => console.log(`LOG: ${result}`);

const add = (a, b, callbackFn) => callbackFn(a + b);
/* function add(a, b, callbackFn) {
    callbackFn(a + b)
} */
add(1, 5, logger);
/* E.G:
const add = (a, b, callbackFn) => callbackFn(a + b);
add(1, 5, logger); - a = 1, b = 5, callbackFn = logger;

HADDE VÆRT SOM OM VI SKREV:
const add = (a, b, logger) => logger(a + b);
add(1, 5, logger);
*/

add(1, 5, (result) => console.log(result + 1));

/* INNEBYGDE FUNKSJONER I JAVASCRIPT */
// forEach - For hver frukt så ønsker vi å console.logge den frukten.
const fruits = ["apple", "strawberry", "pear"];
fruits.forEach((fruit) => console.log("Fruit:", fruit));
fruits.forEach(logger);

//map
const names = ["Sander", "Erik", "Jens", "Snabelfanten"];
const nicknames = names.map((name) => `The amazing ${name}`);
console.log("names:", names);
console.log("Super heros:", nicknames);

// some
const dungeonParty = ["Tank", "Sander", "Healer"];
const hasSander = dungeonParty.some((name) => name === "Sander");
console.log("Has Sander:", hasSander);

/* SHOP EXAMPLE: Sort, Reduce, Filter */
const gold = 1000; //Our money
const shop = [
  {
    name: "Plot Armor",
    price: 1000000,
  },
  {
    name: "Sword of Kodehode",
    price: 1000,
  },
  {
    name: "Potion of concentration",
    price: 500,
  },
  {
    name: "Jørunds Helmet of Confusion",
    price: 100,
  },
];

// reduce (redusere hele shoppen til en sum)
const totalShopPrice = shop.reduce((acc, curr) => acc + curr.price, 0); //acc = acumulator : Hvor mye har vi samlet opp i pris.
console.log("Total shop price:", totalShopPrice);

// filter (tar inn true eller false)
const affordableItems = shop.filter((item) => item.price <= gold);
console.log(`With ${gold} gold, we can afford`, affordableItems);

// sort (sortere med prisen fra lavest til høyest)
const sortedShop = shop.sort((a, b) => a.price - b.price);
console.log(sortedShop);
console.log(shop);
