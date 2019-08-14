import { Component } from '@angular/core';

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
      price: 8000
    },
    {
      name: "spring",
      id: 2, price: 6000
    },
    {
      name: "Hibernate",
      id: 3,
      price: 2000
    },
    {
      name: "angular",
      id: 4,
      price: 3000
    },
    {
      name: "JPA",
      id: 5,
      price: 9000
    },
    {
      name: "Maven",
      id: 6,
      price: 1000
    }
  ]
}
