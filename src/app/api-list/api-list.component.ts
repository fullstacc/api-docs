import { Component,
         OnInit,
         ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Api         } from '../api/api.model';
import api from '../../assets/apis.json';
import {ApiService} from './api.service';
import {DomSanitizer} from '@angular/platform-browser';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ApiListComponent implements OnInit {

  apis: Api[];

  // Vars for filtered search
  myControl = new FormControl();
  options: string[];
  filteredOptions: Observable<string[]>;

  prevPanel;
  constructor(private api_srv: ApiService, private dom_san:DomSanitizer) {
  }

  ngOnInit() {

    // 'api' imported from '../../assets/apis.json'
    this.apis = api;

    this.options = this.apis.map((val, index, arr) => {
      return val.name;
    });

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


}
