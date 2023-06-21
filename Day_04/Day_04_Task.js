// Day_04 Task :-
// Task_01 : How to compare two JSON have the same properties without order?

let obj1 = {name: "Person 1", age: 5};
let obj2 = {age: 5, name: "Person 1"};


let obj1String = JSON.stringify(obj1);
let obj2String = JSON.stringify(obj2);

if (obj1String === obj2String) {
  console.log("The JSON objects have the same properties.");
} else {
  console.log("The JSON objects have different properties.");
}

// <---------------------------Task_01 complete-------------------------------------------------->




// Task_02: Use the rest counries' API  and display all the country flags in the console

var request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all", true);

request.send();

request.onload = function(){
    var result = JSON.parse(request.response);
    for (var i = 0; i < result.length; i++){
        console.log(result[i].flag)
    }
}


// <---------------------------Task_02 complete-------------------------------------------------->




// Task_03: Use the same rest countries and print all countries names, regions, sub-region and populations


request.onload = function(){
    var result = JSON.parse(request.response);
    for (var i = 0; i < result.length; i++){
        console.log(result[i].name.common, result[i].region, result[0].subregion)
    }
}

// <---------------------------Task_03 complete-------------------------------------------------->