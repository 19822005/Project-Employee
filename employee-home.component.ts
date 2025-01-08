import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; // Import CommonModule for directives like *ngIf
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-employee-home',
  standalone: true,
  imports: [
    CommonModule, // Include CommonModule for *ngIf and other structural directives
    HttpClientModule, // Include HttpClientModule for HTTP functionality
    FormsModule, // Include FormsModule for [(ngModel)] binding
  ],
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css'],
})
export class EmployeeHomeComponent implements OnInit {
  employeeData: any[] = [];
  employeeList: any[] = [];
  isListView: boolean = true;
  employeeObject: any = {
    firstName: '',
    lastName: '',
    gender: '',
    departmentId: '',
    email: '',
    phoneNo: '',
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadEmployeeData();
    this.loadEmployee();
  }

  loadEmployeeData(): void {
    this.http.get('assets/employee-data.json').subscribe((res: any) => {
      this.employeeData = res.data;
    });
  }

  loadEmployee(): void {
    this.http.get('assets/listEmployee.json').subscribe((res: any) => {
      this.employeeList = res.data;
    });
  }

  onCreateEmp(): void {
    debugger;
    this.http.post('assets/detailsEmployee.json', this.employeeObject).subscribe((res: any) => {
      alert(res.message);
      this.loadEmployee();


    });


    
     
      this.http.delete('assets/delete.json', this.employeeObject).subscribe((res: any) => {
        alert(res.message);
        this.loadEmployee();
  
        
      });

      

    }
  onEdit(item: any){
    debugger;
    this.employeeObject = item;
    this.isListView = false;

  }

  
  onDelete(item: any){
    debugger;
    this.employeeObject = item;
    this.isListView = false;

  }
}
