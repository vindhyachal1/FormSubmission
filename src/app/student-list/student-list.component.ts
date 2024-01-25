import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Student {
  rollNo: number;
  name: string;
  address: string;
  country: string;
  year: number;
  selected: boolean;
}

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
  providers: [FormsModule],
})
export class StudentListComponent {
  rollNumber!: string;
  students1: any[] = [];
  fetchStudentDetails() {
    // Call your API/service to get student details based on the roll number
    // Example: this.studentService.getStudentDetails(this.rollNumber).subscribe(data => this.students = data);
    // Replace 'this.studentService.getStudentDetails' with your actual service method
  }

  public students: Student[] = [
    { rollNo: 1, name: 'John Doe', address: '123 Main St', country: 'USA', year: 2023, selected: false },
    { rollNo: 2, name: 'Jane Doe', address: '456 Elm St', country: 'Canada', year: 2022, selected: false },
    // Add more students as needed
  ];
}
