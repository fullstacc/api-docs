import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-api',
  templateUrl: './add-api.component.html',
  styleUrls: ['./add-api.component.css']
})
export class AddApiComponent implements OnInit {

  isLinear = false;
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.form = this.fb.group({
      overview: this.fb.group({
        poc_name: ['', Validators.required],
        poc_email: ['', Validators.required],
        api_name: ['', Validators.required],
        backend_protocol: ['', Validators.required],
        server: ['', Validators.required],
        frontend_host: ['', Validators.required],
        backend_host: ['', Validators.required],
        matching_url_prefixes: ['', Validators.required], // THIS NEEDS TO BE A DYNAMIC LIST

      }),
      global_request_settings: this.fb.group({
        default: ['', Validators.required]
      }),
      sub_url_request_settings: this.fb.group({
        default: ['', Validators.required]
      }),
      advanced_request_rewritings: this.fb.group({
        default: ['', Validators.required]
      }),
      advanced_settings: this.fb.group({
        default: ['', Validators.required]
      })
    });

    console.log(this.form);
  }
  isDisabled() {
    return "false";
  }

}
