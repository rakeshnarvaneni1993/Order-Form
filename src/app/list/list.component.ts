import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  a = false;
  b = false;
  c = false;
  d = false;
  total1 = 0;
  clicked(event: any) {
    console.log(event.target.value);
    this.a = !this.a;
    this.a ? this.total1 = this.total1 + event.target.value : this.total1 = this.total1 - event.target.value;
    return this.a;
  }
  clicked1(event: any) {
    console.log(event.target.value);
    this.b = !this.b;
    this.b ? this.total1 = this.total1 + event.target.value : this.total1 = this.total1 - event.target.value;
    return this.b;
  }
  clicked2(event: any) {
    console.log(event.target.value);
    this.c = !this.c;
    this.c ? this.total1 = this.total1 + event.target.value : this.total1 = this.total1 - event.target.value;
    return this.c;
  }
  clicked3(event: any) {
    console.log(event.target.value);
    this.d = !this.d;
    this.d ? this.total1 = this.total1 + event.target.value : this.total1 = this.total1 - event.target.value;
    return this.d;
  }
}
