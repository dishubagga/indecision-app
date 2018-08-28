'use strict';

var add = function add(a, b) {
    return a + b;
};

console.log(add(1, 2));

// const user = {
//     name:"Dishu",
//     cities:['Rajpura, Arezzo, New York'],
//     printPlacesLived: function() {
//         console.log(this.name);
//         console.log(this.cities);
//         const that = this;
//         this.cities.forEach(function(city){
//             console.log(that.name + " has lived in " + city);
//         });
//     }
// }

var user = {
    name: "Dishu",
    cities: ['Rajpura', 'Arezzo', 'New York'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        var cityMessages = this.cities.map(function (city) {
            return _this.name + " has lived in " + city;
        });
        return cityMessages;
    }
};

console.log(user.printPlacesLived());

var multiplier = {
    numbers: [2, 4, 6, 7],
    multiplyBy: 2,
    // multiply(){
    //     const result = this.numbers.map((num)=>{
    //         return num*this.multiplyBy;
    //     });
    //     return result;
    // }
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (num) {
            return num * _this2.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());
