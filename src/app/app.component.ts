import { Component } from '@angular/core';
import { headersToString } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Courses';
  courses = [
    {
      name: "Java",
      id: 1,
      price: 8000,
      duration:4,
      offer:true
    },
    {
      name: "spring",
      id: 2, 
      price: 6000
    },
    {
      name: "Hibernate",
      id: 3,
      price: 2000,
      duration:4,
      offer:200
    },
    {
      name: "angular",
      id: 4,
      duration:4,
      price: 3000
    },
    {
      name: "JPA",
      id: 5,
      duration:4,
      price: 9000
    },
    {
      name: "Maven",
      id: 6,
      duration:4,
      price: 1000,
      offer:true
    }
  ]
}
