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

## Union Types

Combine types using | (pipe). Example -> value: number | string

## Literal Types

This type is a exact value. Example -> const value = 2.8; // Type is 2.8

## Type aliases / Custom types

Define a new type name to a union type. Example -> type Combinable = number | string;