import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavService implements OnInit {

  public active = "";
  public menu = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.active = this.router.url.replace('/','');
      console.log(this.active);
    });
  }
  setMenu(val: boolean) {
    this.menu = val;
  }
  isActive(label: string) {
    const cond = this.active == label;
    return cond ? 'active' : 'inactive';
  }
  onClick(text: string) {
    this.setMenu(false);
    if (text === "") {
      this.active = "";
      this.router.navigate(["/"]);
    } else if (text === "key") {
      this.active = "key";
      this.router.navigate(["/key"]);
    } else if (text === "recover") {
        this.active = "recover";
        this.router.navigate(["/recover"]);
    } else if (text === "add") {
      this.active = "add";
      this.router.navigate(["/add"]);
    } else if (text === "apis") {
      this.setMenu(true);
      this.active = "apis";
      this.router.navigate(["/apis"]);
    }
  }
}
