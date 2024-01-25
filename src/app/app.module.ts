import { FormsModule } from '@angular/forms';
import { StudentListComponent } from './student-list/student-list.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // ... other components
    StudentListComponent,
  ],
  imports: [
    // ... other modules
    FormsModule, // Add FormsModule here
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
