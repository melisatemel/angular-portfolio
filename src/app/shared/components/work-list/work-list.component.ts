import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css']
})
export class WorkListComponent implements OnInit {
  @Input()
  years = "";

  @Input()
  companyName= "";

  @Input()
  position = "";


  constructor() { }

  ngOnInit() {
  }

}
