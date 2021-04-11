import { Component, OnInit } from '@angular/core';
import { ApifoodService  } from 'src/app/services/apifood.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor( private foodServices: ApifoodService  ) { }

  ngOnInit(): void {
  }

}
