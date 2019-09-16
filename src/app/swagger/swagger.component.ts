import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import SwaggerUI from 'swagger-ui';
import { ActivatedRoute } from '@angular/router';

import {ApiService} from '../api-list/api.service';

@Component({
  selector: 'app-swagger',
  templateUrl: './swagger.component.html',
  styles: []
})
export class SwaggerComponent implements AfterViewInit, OnInit {

  file: Object;
  api_id: string;

  constructor(private el: ElementRef, private route: ActivatedRoute, private api_srv: ApiService) {
    route.paramMap.subscribe( (data) => {
      console.log(data);
      this.api_id = data['params']['api_id'];
    });
  }

  ngOnInit() {

    // this.api_srv.get_api_id().subscribe( (data) => {
    //   this.api_id = data;
    //   console.log("WORKS");
    //   console.log(this.api_id);
    // });

    this.file = this.api_srv.build_swagger_data(this.api_id);
    console.log(this.file);
  }

  ngAfterViewInit() {
    const ui = SwaggerUI({
      spec: this.file,
      domNode: this.el.nativeElement.querySelector('.swagger-container'),
      deepLinking: true,
      presets: [
        SwaggerUI.presets.apis
      ],
    });
  }
}
