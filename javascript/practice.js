let user = {};
user["name"] = "John";
user["surname"] = "Smith";
// console.log(user);
user["name"] = "Pete";
// console.log(user);
delete user["name"];
// console.log(user);

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// console.log(user);
// user.name = "Pete";
// console.log(user);
// delete user.name;
// console.log(user);

function isObjEmpty(obj){
    for(let property in obj){
        return false;
    };
    return true;
};
console.log(isObjEmpty(user));




// let name = "Husniddin"
// let propertyName = "fav games"

// let user = {
//     name,
//     age:18,
//     "can fly":false,
//     [propertyName]:["ZZZ", "WuWa", "Starcraft2", "Dota2", "Lol"],
// };

// for(let propKey in user){
//     console.log(propKey);
//     console.log(user[propKey]);
// }





let salaries = {
    John:100,
    Ann:160,
    Pete:130
};

function SumSalaries(salaries){
    let sum = 0;
    for(let name in salaries){
        sum+=salaries[name];
    };
    return sum;
};
console.log(SumSalaries(salaries));




let menu = {
    width:200,
    height:300,
    title:"menu"
};

function multiplyNumeric(obj){
    for(let propKey in obj){
        if(typeof obj[propKey] === 'number'){
            obj[propKey] = obj[propKey] * 2 
        }
    };
};

multiplyNumeric(menu);
console.log(menu);