import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { technologiesModel } from './models/technologiesModel.model';

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
  imageSrc: string = '../assets/img/bio.jpg';
  description: string = "I'm a Fullstack .Net Developer focused on C# for its hardiness, scalability and interoperability with other systems, I have also worked with PHP, Angular JS and VB making improvements, migrations and repairs of existing systems. I'm able to work in teams, remotely or on site.' I love to keep me updated on new hardware and software solutions, either through online courses, lectures, attend to webinars, read blogs or classroom courses is always better to know what new technologies you can take for your work.";
  newTech: string = 'AngularJs';
  year: number = new Date().getFullYear();
  links: Array<any> = [
    {href : 'https://www.linkedin.com/in/francisco-arroyo-83351727/', class:'fa fa-linkedin fa-stack-1x fa-inverse', color:' #006ba3', text: 'linkedin.com/francisco-arroyo'},
    {href : 'https://github.com/controlzeta', class:'fa fa-github fa-stack-1x fa-inverse', color:'#000000', text: 'github.com/controlzeta'},
    {href : 'https://pakoarroyo.controlzeta.com.mx/portfolio.html', class:'fa fa-briefcase fa-stack-1x fa-inverse', color:'#ff0000', text: 'portfolio'}
  ]
  technologies: Array<technologiesModel> = [
		{ ramo : "Programación", nivel : "Avanzado", utilerias : "C#, ASP, ASP.Net, Visual Basic, Html5" },
		{ ramo : "Bases de Datos", nivel : "Avanzado", utilerias : "SQL Server 2014, Postgres, MySQL, Oracle 11g" },
		{ ramo : "IDE", nivel : "Avanzado", utilerias : "Visual Studio 2012, Visual Studio 2013, Visual Studio 2015" },
		{ ramo : "Programación", nivel : "Medio", utilerias : "PHP" },
		{ ramo : "Lenguajes de Modelado", nivel : "Medio", utilerias : "UML" },
		{ ramo : "Patrones de Diseño", nivel : "Avanzado", utilerias : "MVC, MVP, N Tier" },
		{ ramo : "Metodologías", nivel : "Medio", utilerias : "SCRUM, MAAGTIC, CMMI" },
		{ ramo : "CMS, LCMS y eCommerce", nivel : "Avanzado", utilerias : "Wordpress, Joomla, Moodle, Magento" },
		{ ramo : "Diseño Web", nivel : "Avanzado", utilerias : "Bootstrap, Adobe Photoshop, Dreamweaver" },
		{ ramo : "Programación", nivel : "Principiante", utilerias : "Xamarin, NodeJS, Python, React JS" },
		{ ramo : "IDE", nivel : "Principiante", utilerias : "Eclipse, NetBeans" },
		{ ramo : "CMS", nivel : "Principiante", utilerias : "Drupal" },
		{ ramo : "SEO en Google", nivel : "Avanzado", utilerias : "Analytics, Google My Business" }
	];

    register = { name:'', email: '', password : ''}

  // technologies : string[] = ["C#, ASP, ASP.Net, Visual Basic, Html5", "SQL Server 2014, Postgres, MySQL, Oracle 11g", "Visual Studio 2012, Visual Studio 2013, Visual Studio 2015" ]

  btnDisabled = true;
  progressBar = 1;
  show = false;

  // Event Binding
  onSave(){
    console.log('Saving!')
    this.progressBar += 5;
    this.show = !this.show;
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

  addTech(){
    // this.technologies.push( this.newTech );
    this.technologies.push( {utilerias : this.newTech });
    this.newTech = '';
  }

  deleteTech(index:number){
    this.technologies.splice(index,1);
  }

  onRegister(){
    console.log(this.register);
  }
}
