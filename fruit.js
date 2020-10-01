var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};

let fruitCount = 0;
for (f in fruit) {
    fruitCount += fruit[f];
}
console.log(fruitCount);