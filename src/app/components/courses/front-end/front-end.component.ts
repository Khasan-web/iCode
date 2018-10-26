import { Component, OnInit, EventEmitter , Output } from '@angular/core';
import { Course } from '../web-design/web-design.model';

@Component({
  selector: 'app-front-end',
  templateUrl: './front-end.component.html',
  styleUrls: ['./front-end.component.css']
})
export class FrontEndComponent implements OnInit {

  totalOwed: string;
  courses: Course[];


  constructor() { 

    this.courses = [
      {
        name: 'HTML',
        cost: 0,
        time: 1,
        info: 'HyperText Markup Language. HTML is the start of any programmer. ',
        img: 'web/html.png'
      },
      {
        name: 'CSS',
        cost: 0,
        time: 2,
        info: 'Sketch is modern design tool for working with UI',
        img: 'web/css.png'
      },
      {
        name: 'BOOTSTRAP',
        cost: 0,
        time: 2,
        info: 'Sketch is modern design tool for working with UI',
        img: 'web/bootstrap.png'
      },
      {
        name: 'JAVA SCRIPT',
        cost: 0,
        time: 2,
        info: 'Sketch is modern design tool for working with UI',
        img: 'web/js.png'
      },
      {
        name: 'JQUERY',
        cost: 0,
        time: 2,
        info: 'Sketch is modern design tool for working with UI',
        img: 'web/jquery.png'
      },
      {
        name: 'ANGULAR 6',
        cost: 0,
        time: 2,
        info: 'Sketch is modern design tool for working with UI',
        img: 'web/angular.png'
      }
    ];

   }


   ngOnInit() {
  }




}
