import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slides = [{
    img: 'https://avatars2.githubusercontent.com/u/15111402?s=460&v=4',
    text: 'Asrul Harahap'
  }, {
    img: 'https://avatars3.githubusercontent.com/u/38931702?s=460&v=4',
    text: 'Anis Fikriyyah'
  }, {
    img: 'https://avatars0.githubusercontent.com/u/51555828?s=460&v=4',
    text: 'Rifki Hilman'
  }]

  constructor() { }

  ngOnInit() {
  }

}
