
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<base href="/Employee-Management" />
<section class="vh-100 gradient-custom">
   
    <div class="p-3 mb-2 bg-info-subtle text-info-emphasis">𝓜.𝓗.𝓚 𝓔𝓶𝓹𝓲𝓻𝓮</div>
    <div class="container py-5 h-100">
        <div class="row">
            <div class="col-12 text-end">
                <button class="btn btn-sm btn-primary emphasis" (click)="isListView = !isListView"> {{isListView ? 'New':'List' }} </button>
            </div>
        </div>
        <div *ngIf="isListView" class="row justify-content-center align-items-center h-100">
            <div class="col-12">
                <table class="table table-bordered">
                <thead>
                    <tr> 
                        <th>Sr No</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let emp of employeeList; let sr= index">
                        <td>{{sr+1}}</td>
                        <td>{{emp.firstName}} {{emp.lastName}}</td>
                        <td>{{emp.department}}</td>
                        <td>{{emp.email}}</td>
                        <td>
                            <button class="btn btn-sm btn-primary" (click)="onEdit(emp)">Edit</button>
                            <button class="btn btn-sm btn-danger"(click)="onDelete(emp)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>

        <div *ngIf="!isListView" class="row justify-content-center align-items-center h-100">
            <div class="col-12 col-lg-9 col-xl-7">
                <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
                    <div class="card-body p-4 p-md-5">
                        <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 text-center">Employee Management Form</h3>

                            <!-- First Row -->
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <div class="form-outline">
                                        <input type="text" [(ngModel)]="employeeObject.firstName" id="firstName" class="form-control form-control-lg" />
                                        <label class="form-label" for="firstName">First Name</label>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <div class="form-outline">
                                        <input type="text" id="lastName" [(ngModel)]="employeeObject.lastName"  class="form-control form-control-lg" />
                                        <label class="form-label" for="lastName">Last Name</label>
                                    </div>
                                </div>
                            </div>

                            <!-- Second Row -->
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <div class="form-outline">
                                        <select [(ngModel)]="employeeObject.departmentId"  class="form-select form-control-lg">
                                            <option value="" disabled selected>Choose Department</option>
                                            <option value="1">Choose Department</option>
                                            <option value="2">Marketing</option>
                                            <option value="3">Sales</option>
                                            <option value="4">Admin</option>
                                            <option value="5">RnD</option>
                                        </select>
                                        <label class="form-label">Choose Department</label>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <h6 class="mb-2 pb-1">Gender:</h6>
                                    <div class="form-check form-check-inline">
                                        <input [(ngModel)]="employeeObject.firstName" class="form-check-input" type="radio" name="gender" id="femaleGender"
                                            value="Fe-Male" checked />
                                        <label class="form-check-label" for="femaleGender">Female</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input [(ngModel)]="employeeObject.gender" class="form-check-input" type="radio" name="gender" id="maleGender"
                                            value="male" />
                                        <label class="form-check-label" for="maleGender">Male</label>
                                    </div>
                                </div>
                            </div>

                            <!-- Third Row -->
                            <div class="row">
                                <div class="col-md-6 mb-4">
                                    <div class="form-outline">
                                        <input [(ngModel)]="employeeObject.Email"  type="email" id="emailAddress" class="form-control form-control-lg" />
                                        <label class="form-label" for="emailAddress">Email</label>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-4">
                                    <div class="form-outline">
                                        <input [(ngModel)]="employeeObject.phoneNo"  type="tel" id="phoneNumber" class="form-control form-control-lg" />
                                        <label class="form-label" for="phoneNumber">Phone Number</label>
                                    </div>
                                </div>
                            </div>

                            <!-- Fourth Row -->
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-outline">
                                        <select class="form-select form-control-lg">
                                            <option value="" disabled selected>Manage Employee</option>
                                            <option value="1">View Employee</option>
                                            <option value="2">Edit Employee</option>
                                            <option value="3">Assign Task</option>
                                            <option value="4">Generate Report</option>
                                            <option value="4">Approve Leave</option>
                                        </select>
                                        <label class="form-label">Choose Option</label>
                                    </div>
                                </div>
                            </div>

                            <!-- Submit Button -->
                            <div class="mt-4 pt-2 text-center">
                                <button class="btn btn-info emphasis btn-lg" (click)="onCreateEmp()" type="button">Submit</button>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
