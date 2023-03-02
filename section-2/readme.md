# Typscript Basics and Basic Types

---

### Number Type

All Numbers, no differentiation between integers or floats

```

```

### string

All Text Values

### boolean

***boldtext*** True or False
Just the two, no "truthy" or "falsy" values


```

How Typscript assigns vales for numbers or strings.

function add(n1: number, n2: number, showResult: boolean, phrase: string){

    if (showResult){
        console.log(phrase + n1 + n2)
    } else {
    return n1 + n2;
}}

const number1 = 1;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is:'


add(number1, number2, printResult, resultPhrase);

```


How javascript would handle the same thing

```


function add(n1 + n2){
    if (typeof n1 === 'number' || typeof n2 === 'number'){
        throw new Error('Incorrect input!');`
    }
}


```

### Object

{age:30}
Any Javascript object, more specific types (type of object) are possible.

### Array

[1,2.3,]
Any JavaScript array, type can be flexible or strict(regarding the element types)

### Tuples


Using a tuple to define the role property of the person object. 

```
    const person: {
        name: string;
        age: number;
        nickname?: string; // ? makes the property optional
        hobbies: string[]; // Array
        role: [number, string]; // Tuple

    } = {
        name: "Maximilian",
        age: 30,
        nickname: "Max",
        hobbies: ["Sports", "Cooking"],
        role: [2, "author"]
};
```

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

### Any Type \*

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
