"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Interface in TypeScript


Interfaces in TypeScript
    1. Use interface keyword to create an interface
    2. It is common to prefix the interface name with capital letter I. However, some interfaces in Angular does not have the prefix I.
       For example, OnInit interface
    3. Interface members are public by default and does not require explicit access modifiers. It is a compile time error to include
       an explicit access modifier. You will see an error message like - public modifier cannot appear on a type member.
    4. A class that implements an interface must provide implementation for all the interface members unless the members are marked
       as optional using the ? operator
    5. Use the implements keyword to make a class implement an interface.
    6. TypeScript interfaces exist for developer convenience and are not used by Angular at runtime.
       During transpilation, no JavaScript code is generated for an interface. It is only used by Typescript for type checking
       during development.
    7. To reduce the amount of code you have to write, consider using short-hand syntax to initialise class properties with
       constructor parameters

*/ 
//# sourceMappingURL=employee.js.map