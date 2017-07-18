"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular 2!';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html' // Working
            //template: `<h1>Hello {{name}}</h1>`,    // Will Work
            /* template:'<h1>Hello {{name}}</h1>',    // Will Work
               template:"<h1>Hello {{name}}</h1>",    // Will Work
          
               temlate: `<h1>                         // Will Work
                          Hello {{name}}
                        </h1>`,
          
               temlate: "<h1>                         // Throw Error - '' & "" does not works with multiple lines template
                          Hello {{name}}
                        </h1>",
          
               temlate: '<h1>                         // Throw Error
                          Hello {{name}}
                        </h1>',
            */
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*
    What are Components ?

        *   A Component in angular is a class with template and a decorator.
                - Template
                - Class
                - Decorator
        *   Templatre defines the user interface.Contains the HTML, directives and data bindings.

        *   Class contains the code required for the the template.

        *   Decorator adds meta data to the class making it an angular Component.

        *   By Convention root component of Angular is called as AppComponent

        *   @Component - Applying Component decorator to a class to add metadata into it.
                         It is exactly same as applying attributes to class in C#.NET

        *   my-app is the directive present in index.html which produces output of below template.

    Angular template Vs templateUrl:

        *   Angular template may contains '' & "" but with only single line template.

        *   With an Inline template -
                1. We loose Visual Studio Intellisense, Code Editor, Formatiing Features etc..
                2. TypeScript code is not easier to read and understand when it is mixed with the
                   inline template HTML.
        *   To overcome above issues we can seperate out template in seperate HTML file.
        *   With an external view template -
                1. We get Visual Studio Intellisense, Code Editor, Formatiing Features etc..
                2. Not only the "app.component.ts" code is clean it is also easier to read
                   and understand.
            
*/ 
//# sourceMappingURL=app.component.js.map