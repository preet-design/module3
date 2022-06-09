
//spread operator with array
// let arr = [1,2,3,4,5];
// let arr2 = arr;

// // arr2[1] = 5;

// console.log(arr);
// console.log(arr2);

//spread operator with object

let obj={
    name:"mann",
     address : {
        country:"punjab",
        state:{
           statename: "jalandhar",
           pincode :"1234"
        }
    }

}

//shallow copy

let obj2 ={...obj};

obj2.name = "preet";
// obj2.address.country = "india";


// obj2.address.country = "India";


console.log(obj.name);
console.log(obj.address);
console.log("####################")
console.log(obj2.name);
console.log(obj2.address);


// //deep copy
let obj3 = JSON.parse(JSON.stringify(obj))

obj3.address.country = "Japan";
console.log(obj.address.country);
console.log(obj3.address.country);