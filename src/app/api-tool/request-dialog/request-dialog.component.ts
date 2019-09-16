import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface RequestObject{
  name: string;
  in: string;
  required: boolean;
  type: string;
  description: string;
  format?: string;
  minimum?: number;
  maximum?: number;
  schema?: any;
  items?: any;
  collectionFormat?: string;
}

@Component({
  selector: 'app-request-dialog',
  templateUrl: './request-dialog.component.html',
  styleUrls: ['./request-dialog.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ]
})
export class RequestDialogComponent implements OnInit {

  elementData: RequestObject[];
  dataSource;
  columnsToDisplay = ['name', 'required', 'data type', 'input method'];
  columnValues = ['name', 'required', 'type', 'in'];
  expandedElement: RequestObject | null;

  constructor(public dialogRef: MatDialogRef<RequestDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data) {
    this.dataSource = this.data.parameters;
  }

  ngOnInit() {
    this.buildElementData();
  }

  buildElementData() {
    for (let param of this.data.parameters) {
      console.log(param);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
