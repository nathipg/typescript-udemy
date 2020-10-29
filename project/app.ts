// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // Tuple
// } = {
//     name: 'Pissuti',
//     age: 23,
//     hobbies: [
//         'Sports',
//         'Cooking'
//     ],
//     role: [2, 'author']
// };

// person.role.push('admin'); // Works
// person.role[1] = 10; // Doesn't work
// person.role = [10, 'admin']; // Works
// person.role = [10, 'admin', 999]; // Doesn't work

// for(const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
// }

// let favoriteActivities: any[]; // Avoid
// favoriteActivities = ['Sports', 30];

// Camel case because is a custom type
enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
};

// Also possible assign numbers or strings
// enum Role {
//     ADMIN = 5,
//     READ_ONLY, // 6
//     AUTHOR = 'AUTHOR'
// };

const person = {
    name: 'Pissuti',
    age: 23,
    hobbies: [
        'Sports',
        'Cooking'
    ],
    role: Role.AUTHOR
};

console.log(person);

if(person.role === Role.AUTHOR) {
    console.log('AUTHOR');
}