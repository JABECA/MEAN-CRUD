import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from './../../services/employee.service';
import { NgForm } from '@angular/forms';

declare var M: any;


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) {

   }

  ngOnInit() {
    this.getEmployees();
  }

  addEmployee(form?: NgForm) {
    console.log(form.value);
    if (form.value._id) {
      this.employeeService.putEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getEmployees();
          M.toast({ html: 'Update Successfuly' });
          console.log(res);
        });
    } else {
      this.employeeService.postEmployee(form.value)
        .subscribe(res => {
          this.getEmployees();
          this.resetForm(form);
          M.toast({ html: 'Save Successfuly' });
          console.log(res);
      });
    }

  }

  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  // deleteEmployee(_id: string) {
  //   this.employeeService.deleteEmployee(_id).subscribe(res => {
  //     console.log(res);
  //     this.getEmployees();
  //   });
  // }

  deleteEmployee(_id: string, form: NgForm) {
    if (confirm('Are you sure you want to delete it?')) {
      this.employeeService.deleteEmployee(_id)
        .subscribe(res => {
          this.getEmployees();
          this.resetForm(form);
          M.toast({html: 'Deleted Succesfully'});
        });
    }
  }


  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(res => {
        this.employeeService.employees = res as Employee[];
        console.log(res);
      });

  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }

}
