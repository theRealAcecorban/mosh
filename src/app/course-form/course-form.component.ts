import { Component } from '@angular/core';

@Component({
  selector: 'courseForm',
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.css'
})
export class CourseFormComponent {

  categories = [
    {id:1, name: "Development"},
    {id:2, name: "Art"},
    {id:3, name: "Languages"}];
  submit(f) {
    console.log(f);
  }
}
