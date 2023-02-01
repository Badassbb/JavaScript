function multiply(number1, number2)
{
    resultMultiply = number1*number2;
    return resultMultiply*2;
}

var a = 5;
var b = 6;

var result = multiply(a,b);

console.log(resultMultiply);

var fruits = ["Pomme", "Banane", "Orange", "Citron"];
console.log(fruits);
console.log(fruits[0]);

for(var i = 0; i < fruits.length; i++)
{
console.log (fruits[i]);
}


fruits.push("kiwi");
console.log(fruits);

fruits.pop();
console.log(fruits);

var agrumes = fruits.slice(2,4);
console.log(fruits);
