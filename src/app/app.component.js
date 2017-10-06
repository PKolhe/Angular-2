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
        this.pageHeader = 'Employee Details';
        this.userText = 'PankajK';
        this.imagePath = 'http://www.pragimtech.com/images/logo.jpg';
        this.firstName = 'Pankaj';
        this.lastName = 'Kolhe';
        this.classesToApply = 'italicClass boldClass colorClass';
        this.applyBoldClass = true;
        this.appyItalicClass = true;
        this.isbold = true;
        this.fontSize = 20;
        this.badHTML = 'Hello<script> alert("Hacked")</script> World';
        this.isItalic = true;
        this.isDisabled = false;
    }
    AppComponent.prototype.addClasses = function () {
        var classes = {
            boldClass: this.applyBoldClass,
            italicClass: this.appyItalicClass
        };
        return classes;
    };
    AppComponent.prototype.addStyles = function () {
        var styles = {
            'font-size.px': this.fontSize,
            'font-style': this.isItalic ? 'italic' : 'normal',
            'font-weight': this.isbold ? 'bold' : 'normal'
        };
        return styles;
    };
    AppComponent.prototype.getFullName = function () {
        return this.firstName + this.lastName;
    };
    AppComponent.prototype.onClick = function () {
        console.log('Button Clicked');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html'
            /*template: `Your Text: <input type='text' [(ngModel)]='userText'/><br/><br/>
                        <simple [simpleInput]='userText'></simple>`*/
            // Since the view template HTML is just 3 lines we have used an inline template instead of external template.
            /*templateUrl: 'app/app.component.html'   // Will Work
        
            //template: `<h1>Hello {{name}}</h1>`,    // Will Work
        
             template:'<h1>Hello {{name}}</h1>',    // Will Work
             template:"<h1>Hello {{name}}</h1>",    // Will Work
        
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
        *   Angular 2 recommends if the viewTemplate HTML is more than 3 lines we need to extract template into
            seperate file i.e. external template.
*/ 
//# sourceMappingURL=app.component.js.map