import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  status: boolean = false;
  phonestatus: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  hiddeclass(){
    this.status = !this.status;
}


  hiddephoneclass(){
    this.phonestatus = !this.phonestatus;
}

}
