"use strict";

function getCutString(str) {
    if (typeof(str) !== "string") {
        alert("Мы так не договаривались");
    } else {
        console.log(str.trim().substring(0, 31) + '...');
    }
}
let x = "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nam corrupti fugiat eaque facilis quasi maiores, dolor, quos quisquam voluptatibus tempora dignissimos eius esse, voluptate consectetur non ipsum minima omnis?";
// x = 1;
getCutString(x);