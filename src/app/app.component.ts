import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private tileService : Title) {
      tileService.setTitle(this.charge + ' | ' + this.name);
  }

  title = 'AngularTest';
  name : string = 'Francisco Arroyo';
  charge: string = 'Fullstack .Net Developer';
  imageSrc: string = 'https://controlzeta.github.io/img/bio.jpg';
  description: string = "I'm a Fullstack .Net Developer focused on C# for its hardiness, scalability and interoperability with other systems, I have also worked with PHP, Angular JS and VB making improvements, migrations and repairs of existing systems. I'm able to work in teams, remotely or on site.' I love to keep me updated on new hardware and software solutions, either through online courses, lectures, attend to webinars, read blogs or classroom courses is always better to know what new technologies you can take for your work.";
  btnDisabled = true;
  progressBar = 1;

  // Event Binding
  onSave(){
    console.log('Saving!')
    this.progressBar += 5;
  }

  toggleButton(){
    this.btnDisabled= !this.btnDisabled;
    if(this.progressBar > 100){
      this.progressBar = 0;
    }
  }

  onScroll(event : Event){
    
    const element = event.target as HTMLElement; 
    this.progressBar = element.scrollTop;
  }

  onKeyUp(event : Event){
    const element = event.target as HTMLInputElement;
    this.name = element.value;
  }
}
