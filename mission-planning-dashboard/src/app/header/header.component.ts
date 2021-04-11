import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  missionName = 'Mars 2030';
  carrierRocket = 'Plasma Max';

  constructor() { }

  ngOnInit() {
  }

}
