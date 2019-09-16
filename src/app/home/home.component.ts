import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavService } from '../nav/nav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  site_title = '{ NASA APIs }';

  constructor(private router: Router, public nav_srvc: NavService) { }

  ngOnInit() {
  }

}
