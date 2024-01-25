import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

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
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  public students: Student[] = [
    { rollNo: 1, name: 'John Doe', address: '123 Main St', country: 'USA', year: 2023, selected: false },
    { rollNo: 2, name: 'Jane Doe', address: '456 Elm St', country: 'Canada', year: 2022, selected: false },
    // Add more students as needed
  ];
}
