import { Injectable } from '@angular/core';
import {technologiesModel} from '../../app/models/technologiesModel.model'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurriculumServiceService {

  technologies: Array<technologiesModel> = [
    {
      ramo: 'Programación',
      nivel: 'Avanzado',
      utilerias: 'C#, ASP, ASP.Net, Visual Basic, Html5',
    },
    {
      ramo: 'Bases de Datos',
      nivel: 'Avanzado',
      utilerias: 'SQL Server 2014, Oracle 11g, Postgres, MySQL',
    },
    {
      ramo: 'IDE',
      nivel: 'Avanzado',
      utilerias: 'Visual Studio 2019 - Visual Studio 2012, Visual Studio Code',
    },
    { ramo: 'Programación', nivel: 'Medio', utilerias: 'PHP' },
    { ramo: 'Lenguajes de Modelado', nivel: 'Medio', utilerias: 'UML' },
    {
      ramo: 'Patrones de Diseño',
      nivel: 'Avanzado',
      utilerias: 'MVC, MVP, N Tier',
    },
    { ramo: 'Metodologías', nivel: 'Medio', utilerias: 'SCRUM, MAAGTIC, CMMI' },
    {
      ramo: 'CMS, LCMS y eCommerce',
      nivel: 'Avanzado',
      utilerias: 'Wordpress, Joomla, Moodle, Magento',
    },
    {
      ramo: 'Diseño Web',
      nivel: 'Avanzado',
      utilerias: 'Bootstrap, Adobe Photoshop, Dreamweaver',
    },
    {
      ramo: 'Programación',
      nivel: 'Principiante',
      utilerias: 'Xamarin, NodeJS, Python, React JS',
    },
    { ramo: 'IDE', nivel: 'Principiante', utilerias: 'Eclipse, NetBeans' },
    { ramo: 'CMS', nivel: 'Principiante', utilerias: 'Drupal' },
    {
      ramo: 'SEO en Google',
      nivel: 'Avanzado',
      utilerias: 'Analytics, Google My Business',
    },
  ];

  constructor( private http : HttpClient  ) {
   }

  ngOnInit() {}

  getTechnologies(){
    return this.technologies;
  }

  addTech(newTech : technologiesModel) {
    // this.technologies.push( this.newTech );
    this.technologies.push( newTech);
  }

  deleteTech(index: number) {
    this.technologies.splice(index, 1);
  }

  getAllProducts(){
    return this.http.get('https://fakestoreapi.com/products');
  }

}

