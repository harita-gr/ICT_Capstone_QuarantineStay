import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  email='';
  phone='';
  name='';
  message='';

  statusMsg = '';

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(){
    this.statusMsg = "Message sent successfully!";
    console.log("Message sent successfully!");
  }
}
