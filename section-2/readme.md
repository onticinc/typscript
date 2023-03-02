# Typscript Types

### number
All Numbers, no differentiation between integers or floats

### string
All Text Values

### boolean
True False
Just the two, no "truthy" or "falsy" values

### Object
{age:30} 
Any Javascript object, more specific types (type of object) are possible. 

### Array 
[1,2.3,]
Any JavaScript array, type can be flexible or strict(regarding the element types)

### ENUM
enum (NEW, OLD)
Added by TypesScript: Automaticall enumerated global constant identifiers.

```
enum Role {ADMIN, READ_ONLY, AUTHOR}; // Enum = Assigns labels to number values. 

// Object Types & Key "Type" Pairs (Key Value Pairs)
const person = {
    name: "Maximilian",
    age: 30,
    nickname: "Max",
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};

let favoriteActivities: string[];

console.log(person.nickname);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) // !!! ERROR !!!


}
```

### Any Type *
Lets anything go. Should be avoided because it takes away the advantages of TS. 

### Union Types

```
function combine(input1: number | string , input2: number | string ){
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}


const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Anna', 'Max');
console.log(combinedNames);


```