// ### Object Types & Key "Type" Pairs (Key Value Pairs)
// ### Using a tuple to define the role property of the person object.
// 
// const person: {
//     name: string;
//     age: number;
//     nickname?: string; // ? makes the property optional
//     hobbies: string[]; // Array
//     role: [number, string]; // Tuple

// } = {
//     name: "Maximilian",
//     age: 30,
//     nickname: "Max",
//     hobbies: ["Sports", "Cooking"],
//     role: [2, "author"]
// };

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