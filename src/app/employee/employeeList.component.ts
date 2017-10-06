import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service'

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
    employees: IEmployee[];

    selectedEmployeeCountRadioButton: string = "All";
    
    constructor(private _employeeService: EmployeeService) {
        
    }

    ngOnInit() {
        this.employees = this._employeeService.getEmployees();
    }

    getEmployees() {
        this.employees = this._employeeService.getEmployees();
        this.employees.push({ code: 'emp105', name: 'Lucy', gender: 'Female', annualSalary: 6900.54, dateOfBirth: '04/15/1988' });
    }

    getTotalEmployeesCount() {
        return this.employees.length;
    }

    getTotalMaleEmployeesCount() {
        return this.employees.filter(e => e.gender === "Male").length;
    }

    getTotalFemaleEmployeesCount() {
        return this.employees.filter(e => e.gender === "Female").length;
    }

    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }

    onEmployeeCountSelectionChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }

}