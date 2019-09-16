import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavService } from './nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  site_title = '{APIs}';



  constructor(private router: Router, private route: ActivatedRoute, public nav_srvc: NavService) { }

  ngOnInit() {
    setTimeout(() => {
      this.nav_srvc.active = this.router.url.replace('/','');
    });
  }


}
