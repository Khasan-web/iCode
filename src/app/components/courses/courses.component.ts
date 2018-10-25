import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {


      $('#front-end').mouseover(function () {
        $('#web').css({ "opacity": "1", 'margin-left': '0' });
      });
      $('#front-end').mouseout(function () {
        $('#web').css({ "opacity": "0", 'margin-left': '150px' });
      });

      $('#web-design').mouseover(function () {
        $('#design').css({ "opacity": "1", 'margin-left': '0' });
      });
      $('#web-design').mouseout(function () {
        $('#design').css({ "opacity": "0", 'margin-left': '-200px' });
      });

    
    })
  }

}
