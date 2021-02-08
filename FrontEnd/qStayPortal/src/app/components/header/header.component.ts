import { Component, OnInit } from '@angular/core';
import { EnrollmentService} from '../../services/enrollment.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _auth:EnrollmentService) { }

  ngOnInit(): void {
  }

}
