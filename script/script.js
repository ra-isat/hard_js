"use strict";

// первый способ

let arr = ["2315", "904286", "45672", "42424", "00992", "22222", "55123"];

let nums = arr.filter(function (item) {
    if (item.charAt(0) === '2' || item.charAt(0) === '4') {
        console.log(item);
    }
});

// второй способ
for (let i = 0; i < arr.length; i++) {
    if (arr[i].charAt(0) === '2' || arr[i].charAt(0) === '4') {
        console.log(arr[i]);
    }
}

// простые числа

for (let i = 2;  i <= 100; i++) {
  let count = 0;
  for (let j = 2; j <= i; j++) {
    if (i % j !== 0) {continue;}
    count += 1;
  }
  
  if (count === 1) {console.log(i);}  
  
}

