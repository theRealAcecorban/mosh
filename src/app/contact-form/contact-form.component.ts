import { Component } from '@angular/core';

@Component({
  selector: 'contactForm',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactMethods = [
    {id:1, name:"Email"},
    {id:2, name:"Phone"},
    {id:3, name:"Text"},
    {id:4, name:"Smoke Signal"}]
  log(val) {
    console.log(val);
  }

  submit(f) {
    alert(f.value.contact.firstNameTB+" "+f.value.commentTB)
  }
}
