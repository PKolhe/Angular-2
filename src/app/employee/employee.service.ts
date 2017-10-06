import { Injectable } from '@angular/core';
import { IEmployee } from './employee';

@Injectable()
export class EmployeeService {

    getEmployees(): IEmployee[] {
        return [
                { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '6/25/1988' },
                { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
                { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
                { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/14/1980' },
        ];
    }

}

/*

    Why do we need a service in Angular
        A service in Angular is generally used when you need to reuse data or logic across multiple components.
        Anytime you see logic or data-access duplicated across multiple components, think about refactoring that piece of logic or
        data-access code into a service. Using a service ensures we are not violating one of the Software principles -
        DRY ((Don't repeat yourself).
        The logic or data access is implemented once in a service, and the service can be used across all the components in our application.

        Without the service you would have to repeat your code in each component.
        Imagine the overhead in terms of time and effort required to develop, debug, test and maintain the duplicated code across
        multiple places instead of having that duplicated code at one central place like a service and reusing that service where required.

    Creating a service in Angular :
          create employee.service.ts file as Service.

    Difference between constructor and ngOnInit
        A class constructor is automatically called when an instance of the class is created.
        It is generally used to initialise the fields of the class and it's sub classes.

        ngOnInit is a life cycle hook method provided by Angular.
        ngOnInit is called after the constructor and is generally used to perform tasks related to Angular bindings.
        For example, ngOnInit is the right place to call a service method to fetch data from a remote server.
            We can also do the same using a class constructor, but the general rule of thumb is, tasks that are time consuming
            should use ngOnInit instead of the constructor.
            As fetching data from a remote server is time consuming, the better place for calling the service method is ngOnInit.

        The dependency injection is done using the class constructor and the actual service method call is issued
        from ngOnInit life cycle hook as shown.
*/