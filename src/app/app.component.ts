import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private tileService : Title) {
      tileService.setTitle(this.charge);
  }

  title = 'AngularTest';
  name : string = 'Francisco Arroyo';
  charge: string = 'Fullstack .Net Developer';
  imageSrc: string = 'https://controlzeta.github.io/img/bio.jpg';
  btnDisabled = true;
  progressBar = 99;
}
