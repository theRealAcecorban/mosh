import { Component } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {
  title = "List of Authors:";
  authors;
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  getTitle() {
    return this.title;
  }
}
