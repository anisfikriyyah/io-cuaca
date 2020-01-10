import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-cuaca',
  templateUrl: './cuaca.page.html',
  styleUrls: ['./cuaca.page.scss'],
})
export class CuacaPage implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  onSubmitForm(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}