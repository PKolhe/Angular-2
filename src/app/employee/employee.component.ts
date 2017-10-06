
import { Component } from "@angular/core";

@Component ({
    selector: "my-employee",
    templateUrl: "app/employee/employee.component.html",
    //styles: ["table { color: #369;font-family: Arial, Helvetica, sans-serif; font-size: large; border-collapse:collapse; font-style:italic;}", "td {border: 1px solid black;}"]
    styleUrls: ["app/employee/employee.component.css"]
})

export class EmployeeComponent {
    name: string = "Two Way Data Binding";
    ngModelVariable: string = "Using ngModel";
    firstName: string = "Pankaj";
    colspan = 2;
    lastName: string = "Kolhe";
    gender: string = "Male"
    age: number = 31;
    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}

/*

Nesting Component -
    * Including a componenet inside another component
    * Angular 2 is all about components. A Component in Angular allows us to create reusable UI widget.
    * A Component can be used by any other component.

    Example : We need to show below output -

                Employee Details    -> Root Component

                FirstName: Pankaj   -> Child Component
                LastName: Kolhe
                Gender: Male
                Age: 31

    Note: Page Header 'Employee Details comes from the root componenet "AppComponent"
          Employee Details table comes from the another component "EmployeeComponent"

    We need to nest EmployeeComponent into AppComponent : There are few steps for that -

    Step 1: Import EmployeeComponent into app.module.ts, Also add EmployeeComponent in declartations array.

        What is AppModule ?
            AppModule is the root module which bootstraps and launches the angular application.
            We can rename it whatever we want but by convention it is called as AppModule.

            Refer "app.module.ts" file which imports BrowserModule and NgModule by default -

                BrowserModule - is rquired by all angular applications that run in a web browser.
                NgModule - is required to add an metadata to AppModule
                    Ex. Component decorator adds metadata into a AppComponent in similar fashion
                        NgModule decorator adds metadata to AppModule.
                        If we decorate a class with the component decorator then that class becomes Angular
                        Component.
                        In Similar fashion, If a class is decorated with NgModule decorator then that class
                        becomes Angular Component.
                NgModule contains Metadata -
                    * imports - which contains browserModule
                    * declarations  - it is array of components , registering components to AppModule.
                    * bootstrap - bootstraping AppComponent, AppComponenet is the root component which
                                  bootstraps our application. We need to specify this component in our
                                  host page i.e. index.html which contains my-app directive of AppComponent.
         
     Step 2: In "app.component.ts" file include "my-employee" as a directive.


*/