# typescript-udemy

## Compile

tsc app.ts

## Core Types

number -> 1, 5.3, -10 (All numbers)

string -> 'Hi', "Hi", \`Hi` (All text values)

boolean -> true, false

object -> {age: 23} (Any JavaScript object, more specific types are possible)

Array -> [1, 2, 3] (Any Javascript array, type can be flexible or strict)

Tuple -> [1, 2] (Added by Typescript: Fixed-length array)

Enum -> enum { NEW, OLD } (Added by typescript: Automatically enumerated global constant identifiers)

Any -> * (Any kind of value, no specific type assignment. Avoid)

unknown -> Allow assign any value to a variable of this type, but is not allow to assign unknown to a variable with defined type without make sure it's the right type

## Function return types

All regular types

void -> Return nothing (undefined)

never -> Never return anything (Not even undefined)

## Union Types

Combine types using | (pipe). Example -> value: number | string

## Literal Types

This type is a exact value. Example -> const value = 2.8; // Type is 2.8

## Type aliases / Custom types

Type aliases can be used to "create" your own types. 

You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

Example 1 -> type Combinable = number | string;
Example 2 -> type User = { name: string; age: number };