const add = (a,b)=>{
    return a+b;
}

console.log(add(1,2));


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

const user = {
    name:"Dishu",
    cities:['Rajpura', 'Arezzo', 'New York'],
    printPlacesLived(){
        const cityMessages = this.cities.map((city) =>{
            return this.name + " has lived in " + city;
        });
        return cityMessages;
    }
}

console.log(user.printPlacesLived());



const multiplier = {
    numbers:[2,4,6,7],
    multiplyBy:2,
    // multiply(){
    //     const result = this.numbers.map((num)=>{
    //         return num*this.multiplyBy;
    //     });
    //     return result;
    // }
    multiply(){
        return this.numbers.map((num) => num * this.multiplyBy);
    }
}
console.log(multiplier.multiply());
