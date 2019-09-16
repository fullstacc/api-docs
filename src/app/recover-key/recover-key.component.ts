import { Component, OnInit } from '@angular/core';
import { NavService        } from '../nav/nav.service';

import { FormControl,
  FormGroup,
  Validators               } from '@angular/forms';


@Component({
  selector: 'app-recover-key',
  templateUrl: './recover-key.component.html',
  styleUrls: ['./recover-key.component.css']
})
export class RecoverKeyComponent implements OnInit {

  form: FormGroup;
  new_key: string;

  constructor(private nav_srvc: NavService) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email]
      })
    });
  }

  onSubmit() {

    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value.first_name);
    console.log(this.form.value.last_name);
    console.log(this.form.value.email);
    console.log(this.form.value.api_use);

    this.new_key = "DqO0luEtsDO028fNJ41hLhIaHdIuySSHCTLPiH0b";
  }

}
