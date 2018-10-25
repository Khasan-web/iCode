import { Component, OnInit } from '@angular/core';
import { Course } from './web-design.model';

@Component({
  selector: 'app-web-design',
  templateUrl: './web-design.component.html',
  styleUrls: ['./web-design.component.css']
})
export class WebDesignComponent implements OnInit {

  totalOwed: number;

  courses: Course[];

  constructor() { 

    this.courses = [
      {
        name: 'SKETCH',
        cost: 50,
        time: 2,
        info: 'Sketch is modern design tool for working with UI',
        img: 'design/sketch.png'
      },
      {
        name: 'WORK WITH FORMATS',
        cost: 30,
        time: 2,
        info: 'Sketch is modern design tool for working with UI',
        img: 'design/img.png'
      },
      {
        name: 'MATERIAL DESIGN',
        cost: 50,
        time: 2,
        info: 'Sketch is modern design tool for working with UI',
        img: 'design/md.png'
      },
      {
        name: 'FLOAT DESIGN',
        cost: 50,
        time: 2,
        info: 'Sketch is modern design tool for working with UI',
        img: 'design/fd.png'
      }
    ];

   }

  ngOnInit() {
    this.getOwed();
  }

  getOwed(){
    this.totalOwed = this.courses.reduce((total, course) => {
      return total + course.cost;
    }, 0)
  }
  

}
