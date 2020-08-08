import { Component, OnInit } from '@angular/core';
import { TestArrayService } from "../test-array.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private testService: TestArrayService) { }

  ngOnInit(): void {
    this.getPeople();
  }

  people;
  getPeople() {
    this.people = this.testService.getPeople();
  }

}
