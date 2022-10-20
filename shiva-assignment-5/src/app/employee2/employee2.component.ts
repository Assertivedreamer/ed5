import { Component, OnInit } from '@angular/core';
import { Employee2Service } from '../services/employee2.service';
import { Employee2 } from '../models/employee2.model';

@Component({
  selector: 'app-employee2',
  templateUrl: './employee2.component.html',
  styleUrls: ['./employee2.component.css']
})
export class Employee2Component implements OnInit {

  constructor(public Employee2Service:Employee2Service) { }

  ngOnInit(): void {
  
  }

}
