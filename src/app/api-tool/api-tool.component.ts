import { Component, Inject, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from '../api-list/api.service';
import { ActivatedRoute } from '@angular/router';
import {RequestDialogComponent} from './request-dialog/request-dialog.component';

export interface Language {
  name: string;
  code: string;
}

@Component({
  selector: 'app-api-tool',
  templateUrl: './api-tool.component.html',
  styleUrls: ['./api-tool.component.css']
})

export class ApiToolComponent implements OnInit {

  readonly LOCKED = "https://img.icons8.com/android/24/686868/lock.png";
  readonly UNLOCKED = "https://img.icons8.com/android/24/21B55F/unlock.png";

  api_id: string;
  file: Object;

  tags = [
    {
      name: "images",
      description: "DESC",
      requests: [
        {
          type: "GET",
          description: "desc",
          path: "/planetary/apod"
        },
        {
          type: "GET",
          description: "desc",
          path: "/planetary/apod"
        },
        {
          type: "GET",
          description: "desc",
          path: "/planetary/apod"
        },
      ]
    },
    {
      name: "admin",
      description: "DESC",
      requests: [
        {
          type: "GET",
          description: "desc",
          path: "/planetary/apod"
        },
        {
          type: "GET",
          description: "desc",
          path: "/planetary/apod"
        },
        {
          type: "GET",
          description: "desc",
          path: "/planetary/apod"
        },
      ]
    },
    {
      name: "users",
      description: "DESC",
      requests: [
        {
          type: "GET",
          description: "desc",
          path: "/planetary/apod"
        },
        {
          type: "GET",
          description: "desc",
          path: "/planetary/apod"
        },
        {
          type: "GET",
          description: "desc",
          path: "/planetary/apod"
        },
      ]
    },
    {
      name: "objects",
      description: "DESC",
      requests: [
        {
          type: "GET",
          description: "desc",
          path: "/planetary/apod"
        },
        {
          type: "GET",
          description: "desc",
          path: "/planetary/apod"
        },
        {
          type: "GET",
          description: "desc",
          path: "/planetary/apod"
        },
      ]
    },
    {
      name: "extra",
      description: "DESC",
      requests: [
        {
          type: "GET",
          description: "desc",
          path: "/planetary/apod"
        },
        {
          type: "GET",
          description: "desc",
          path: "/planetary/apod"
        },
        {
          type: "GET",
          description: "desc",
          path: "/planetary/apod"
        },
      ]
    }
  ];
  models;
  schemes = [
    {
      value: "http",
      viewValue: "HTTP"
    },
    {
      value: "https",
      viewValue: "HTTPS"
    }
  ];
  selected_lang = {
    name: "Python",
    code: 'import requests\n' +
      '\n' +
      '    headers = { }\n' +
      '\n' +
      '    r = requests.get(\'https://api.nasa.gov?api_key=DEMO_KEY\',\n' +
      '                  headers = { })'
  };

  languages = [
    {
      name: 'Python',
      code: 'import requests\n' +
        '\n' +
        '    headers = { }\n' +
        '\n' +
        '    r = requests.get(\'https://api.nasa.gov?api_key=DEMO_KEY\',\n' +
        '                  headers = { })'
    },
    {
      name: 'Shell',
      code: "hello"
    },
    {
      name: 'JavaScript',
      code: "js"
    },
    {
      name: 'Java',
      code: "js"
    },
  ];

  name;
  animal;

  constructor(public dialog: MatDialog, private api_srv: ApiService, private route: ActivatedRoute) {
    route.paramMap.subscribe( (data) => {
      this.api_id = data['params']['api_id'];
    });
  }

  ngOnInit() {
    this.file = this.api_srv.build_swagger_data(this.api_id);
    this.models = Object.keys(this.file["definitions"]);
  }

  getColor(type: string) {
    return {
      "post": type==='post',
      "get": type==='get',
      "put": type==='put',
      "delete": type==='delete',
      "head": type==='head',
      "connect": type==='connect',
      "options": type==='options',
      "trace": type==='trace'
    }
  }

  getRequestClass(ind, len) {
    if (ind === 0) {
      return {
        "request-card-top": true
      }
    } else if (ind == len-1) {
      return {
        "request-card-bottom": true
      }
    } else {
      return {
        "request-card-middle": true
      }
    }
  }

  isDefined(v: any) {
    return typeof v !== 'undefined';
  }

  openSecurityDialog(): void {
    const dialogRef = this.dialog.open(SecurityDialog, {
      width: '500px',
      height: '165px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openRequestDialog(request): void {
    const dialogRef = this.dialog.open(RequestDialogComponent, {
      width: '80vw',
      height: '80vh',
      data: request
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}


@Component({
  selector: 'security-dialog',
  templateUrl: 'security-dialog.html',
  styleUrls: ['security-dialog.css']
})
export class SecurityDialog {

  constructor(
    public dialogRef: MatDialogRef<SecurityDialog>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
