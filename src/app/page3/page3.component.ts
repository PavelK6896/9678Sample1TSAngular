import { Component, OnInit } from '@angular/core';
import {Todo1Service} from "../shared/todo1.service";

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  constructor(public todo1Service: Todo1Service) { }

  ngOnInit(): void {

    if (this.todo1Service.todo2.length === 0){

    }else{

    }
  }

}
