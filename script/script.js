let num = 266219;

num = num + '';

let lengthNum = num.length;

let arr = num.split('');

let multi = 1;
for (let i = 0; i < lengthNum; i++) {
    multi *= +arr[i];
}
console.log(multi);

// или так

let num1 = +arr[0];
let num2 = +arr[1];
let num3 = +arr[2];
let num4 = +arr[3];
let num5 = +arr[4];
let num6 = +arr[5];

multi = num1 * num2 * num3 * num4 *num5 * num6;

console.log(multi);

// возведение в степень

let power = multi ** 3;
power = power + '';

document.write(power[0], power[1]);