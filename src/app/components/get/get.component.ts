import { Component, OnInit, EventEmitter , Output} from '@angular/core';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  @Output() answer = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onCourseSelecte(nameCourse){

  }

}
