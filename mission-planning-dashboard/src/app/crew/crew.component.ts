import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  crew = ["Jessica", "Raja", 'Jasmin']

  constructor() { }

  ngOnInit() {
  }

}
