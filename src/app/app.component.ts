import { Component } from '@angular/core';

@Component({
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
export class AppComponent  {
    pageHeader: string = 'Employee Details';
    userText: string = 'PankajK';
    imagePath: string = 'http://www.pragimtech.com/images/logo.jpg';

    firstName: string = 'Pankaj';
    lastName: string = 'Kolhe';
    classesToApply: string = 'italicClass boldClass colorClass';
    applyBoldClass: boolean = true;
    appyItalicClass: boolean = true;
    isbold: boolean = true;
    fontSize: number = 20;
    badHTML: string = 'Hello<script> alert("Hacked")</script> World';
    isItalic: boolean = true;
    addClasses() {
        let classes = {
            boldClass: this.applyBoldClass,
            italicClass: this.appyItalicClass
        }
        return classes;
    }

    addStyles() {
        let styles = {
            'font-size.px': this.fontSize,
            'font-style': this.isItalic ? 'italic' : 'normal',
            'font-weight': this.isbold ? 'bold' : 'normal'
        }
        return styles;
    }

    isDisabled = false;
    getFullName(): string {
        return this.firstName + this.lastName;
    }

    onClick() {
        console.log('Button Clicked');
    }

}

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