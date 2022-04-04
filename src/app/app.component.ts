import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { technologiesModel } from './models/technologiesModel.model';
import { imagesModel } from './models/imagesModel.modet';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class AppComponent implements OnInit {
  constructor(
    private tileService: Title,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private progBar: NgbProgressbarConfig
  ) {
    tileService.setTitle(this.charge + ' | ' + this.name);
    config.backdrop = 'static';
    config.keyboard = false;
    progBar.max = 100;
    progBar.striped = true;
    progBar.animated = true;
    progBar.type = 'success';
    progBar.height = '20px';
  }

  language = '';
  numberOfProjects = 0;

  info = {
    languages: [
      {
        Spanish: {
          description:
            ' Soy Francisco Arroyo un desarrollador Fullstack web mexicano enfocado a C# por su rubustez, escalabilidad e interoperabilidad con otros sistemas, pero eso no es todo también he trabajado con PHP, Angular JS y VB realizando mejoras, migraciones y reparaciones de sistemas existentes. Puedo trabajar en modo freelance o por consultora.',
          recomendations: 'Recomendaciones',
          clients: [
            {
              nombre: 'Octavio Rivas',
              cargo: 'Analist & QA Leader at X1 México',
              testimonio:
                'Gran líder de equipos de trabajo, excelente comunicador e innovador. Trabaja excelente en equipo, con mucho compromiso por sacar adelante todos los proyectos.',
              imagen: '../assets/img/x1mexico-logo.png',
            },
            {
              nombre: 'Hugo Lugo',
              cargo: 'Business Partner en Global Hitss',
              testimonio:
                'Francisco es una persona comprometida, profesional y proactivo, siempre dedicado y a la altura se los retos que se le presenten.',
              imagen: '../assets/img/consolid-logo.png',
            },
            {
              nombre: 'Hiriam Eduardo Perez',
              cargo: 'Subdirector de Sistemas (INAI)',
              testimonio:
                'Francisco fue un gran colaborador a mi cargo para distintos proyectos de desarrollo de software, consultoría tecnológica e inteligencia de negocio.',
              imagen: '../assets/img/inai-logo.jpg',
            },
            {
              nombre: 'Salvador Alvarado Tabuyo',
              cargo: 'IT Manager',
              testimonio:
                'Un excelente elemento y con una capacidad sobre el promedio.',
              imagen: '../assets/img/logo-chubb-2.png',
            },
          ],
          projects: [
            {
              id: '01',
              charge: 'Diseño Web y Webmaster',
              logo: 'assets/img/freelancer.png',
              consultant: 'Freelance',
              startDate: 'Junio 2011',
              endDate: 'Actualidad',
              dates: [{ startDate: '01/06/2011', endDate: 'Today' }],
              starred: false,
              projectImg: "../assets/img/portafolio-iConfianza2020.png",
              abstract:
                'Diseño, Desarrollo, Implementación y mantenimiento de páginas web para clientes finales, en CMS o HTML5 desde cero ',
              activities: [
                { activity: 'Levantamiento  y Analísis de requerimientos' },
                { activity: 'Propuesta de Diseño (Mockups, Wireframes))' },
                { activity: 'Maquetado' },
                {
                  activity:
                    'Implementación de CMS (Joomla, Wordpress), eCommerce (Prestashop y Magento) y LCMS (Moodle)',
                },
                { activity: 'SEO  y Google Analytics' },
                { activity: 'Creación y conexión de perfiles de Social Media' },
              ],
              knowledge: [
                { knowing: 'PHP', color: 'purple', percentage: 60 },
                { knowing: 'HTML5', color: 'red', percentage: 95 },
                { knowing: 'CMS', color: 'red', percentage: 85 },
                { knowing: 'SEO', color: 'green', percentage: 78 },
              ],
            },
            {
              id: '02',
              charge: ' .Net  Developer',
              logo: 'assets/img/ecommerce.png',
              consultant: 'CAMEBRA',
              startDate: 'Abril 2011',
              endDate: 'Febrero 2013',
              dates: [{ startDate: '01/04/2011', endDate: '01/02/2013' }],
              starred: false,
              projectImg: "../assets/img/portafolio-iConfianza2020.png",
              abstract:
                'Colabore en la realización de un sistema web para ventas de productos tecnológicos en ASP.NET 4, Hojas de Estilo CSS 2.1, Jquery y Motor de Base de Datos SQL Server 2008 R2 con objetos sqlclient. También di soporte a otras aplicaciones las cuales contaban con tecnologías como: Entity Framework, Webservices y RIA Services WCF, Silverlight.',
              activities: [
                { activity: 'Desarrollador Web' },
                { activity: 'Participación en Análisis e Implementación' },
                { activity: 'Diseño Web' },
                { activity: 'Soporte de Aplicaciones' },
              ],
              knowledge: [
                { knowing: 'ASP.NET 4', color: 'purple', percentage: 60 },
                { knowing: 'CSS 2.1', color: 'red', percentage: 65 },
                { knowing: 'WCF', color: 'red', percentage: 65 },
                {
                  knowing: ' Entity Framework',
                  color: 'green',
                  percentage: 65,
                },
              ],
            },
            {
              id: '03',
              charge: 'Desarrollador .Net C#',
              logo: 'assets/img/government.png',
              consultant: 'INAI - Indra',
              startDate: 'Marzo 2013',
              endDate: 'Enero 2014',
              dates: [{ startDate: '01/03/2013', endDate: '01/01/2014' }],
              starred: false,
              projectImg: "../assets/img/portafolio-iConfianza2020.png",
              abstract:
                'Colabore en la realización de un Portal para la recepción de denuncias que incluía las tecnologías NHibernate Fluent con SQL Server 2008, en Framework ASP .NET 4.0, CSS, Ajax y JQuery, conectado a varios sistemas SAP CRM, BW-BI de SAP y Open Text como repositorio de documentos por medio de Web Service',
              activities: [
                { activity: 'Desarrollo Web con ASP .NET' },
                { activity: 'Participación en Análisis e Implementación' },
                { activity: 'Diseño Web' },
                { activity: 'OWASP' },
                {
                  activity:
                    'Integración de Sistemas mediante Web Services (SOAP y WCF)',
                },
                { activity: 'Soporte de Aplicaciones existentes' },
                { activity: 'Documentación MAAGTIC' },
              ],
              knowledge: [
                {
                  knowing: '.Net Framework 4.0',
                  color: 'purple',
                  percentage: 80,
                },
                { knowing: 'nHibernate', color: 'red', percentage: 68 },
                { knowing: 'Web Services', color: 'red', percentage: 95 },
                { knowing: 'MAAGTIC', color: 'green', percentage: 80 },
              ],
            },
            {
              id: '04',
              charge: 'Desarrollador MVC .Net',
              logo: 'assets/img/banking.png',
              consultant: 'Unifin Financiera',
              startDate: 'Marzo 2014',
              endDate: 'Julio 2014',
              dates: [{ startDate: '01/03/2014', endDate: '01/07/2014' }],
              starred: false,
              projectImg: "../assets/img/portafolio-iConfianza2020.png",
              abstract:
                'Colabore en la migración de la migración de un Sistema Financiero de Escritorio en Visual Basic 6.0 y 2010 a Plataforma Web con Diseño Responsivo, en arquitectura MVC en lenguaje C# que incluía las tecnologías SQL Server 2008, en Framework ASP .NET 4.0, CSS3, JSON, Bootstrap, Ajax y JQuery. Con funciones como: Cálculos financieros, lectura de archivos, empaquetado de Crystal Reports y comunicación con Dynamics.',
              activities: [
                {
                  activity: 'Migración VB .Net 6.0 a Web MVC C# Framework 4.0',
                },
                { activity: 'Participación en Análisis e Implementación' },
                { activity: 'Maquetado en Responsive Design (Bootstrap)' },
                { activity: 'jQuery, JSON, Ajax y CSS3 ' },
                { activity: 'Crystal Reports' },
              ],
              knowledge: [
                {
                  knowing: '.Net Framework 4.0',
                  color: 'purple',
                  percentage: 95,
                },
                { knowing: 'Jquery', color: 'red', percentage: 95 },
                { knowing: 'AJAX y Json', color: 'red', percentage: 80 },
                {
                  knowing: 'Responsive Design',
                  color: 'green',
                  percentage: 80,
                },
              ],
            },
            {
              id: '05',
              charge: 'Desarrollador .Net Front End',
              logo: 'assets/img/travel.png',
              consultant: 'Gonet - Consolid',
              startDate: 'Agosto 2014',
              endDate: 'Junio 2015',
              dates: [{ startDate: '01/08/2014', endDate: '01/06/2015' }],
              starred: false,
              projectImg: "../assets/img/portafolio-iConfianza2020.png",
              abstract:
                'Diseño e implementación de Administrador de Usuarios, Seguridad, Motor de Búsqueda de Vuelos (Sabre, Navitaire, Volaris), Cambio de Diseño a Responsive Design (Bootstrap), Consumo de Web Services (SOAP, WCF), Arquitectura de 3 Capas, SQL Server 2012 con Entity Framework, CSS3, jQuery.',
              activities: [
                {
                  activity:
                    'Diseño e Implementación de administrador de Usuarios',
                },
                { activity: 'Participación en Análisis e Implementación' },
                { activity: 'Implementación de Seguridad (Simple Membership)' },
                {
                  activity:
                    'Consumo de Webservices ( Sabre, Navitaire 3.0 y 4.0 )',
                },
                { activity: 'Maquetado de Responsive Design Bootstrap' },
                { activity: 'jQuery, JSON, Ajax y CSS3 ' },
              ],
              knowledge: [
                { knowing: 'Web Services', color: 'purple', percentage: 95 },
                { knowing: 'Seguridad', color: 'red', percentage: 95 },
                { knowing: 'Diseño Web', color: 'green', percentage: 95 },
              ],
            },
            {
              id: '06',
              charge: 'Full Stack Web Developer',
              logo: 'assets/img/government.png',
              consultant: 'X1 México',
              startDate: 'Junio 2015',
              endDate: 'Diciembre 2016',
              dates: [{ startDate: '01/06/2015', endDate: '01/12/2016' }],
              starred: true,
              projectImg: "../assets/img/portafolio-procadist.jpg",
              abstract:
                'Programación en Lenguaje C# (Framework 4), PHP para plataforma Web, Maquetado de HTML5, MVC, Capas, Web API, especializado en Front End y Responsive Design, Bases de Datos SQL Server 2014, 2012, 2008 R2, MySQL y Postres 9.4, administración de servidores Azure y CentOS. Implementación, Integración y Configuración de CMS (WordPress y Joomla), desarrollo de funcionalidad en sistema existente en AngularJS, Configuración y reparación de LCMS (Learning Content Management System) Moodle',
              activities: [
                { activity: 'Integración de Joomla con .NET' },
                {
                  activity:
                    'Implementación de CMS (Joomla, Wordpress) y LCMS (Moodle)',
                },
                { activity: 'Consumo de WebAPI' },
                { activity: 'Maquetado usando Bootstrap y MaterializeCSS' },
                { activity: 'Manejo de servers: Azure y CentOs' },
                { activity: 'jQuery, JSON, Ajax y CSS3 ' },
              ],
              knowledge: [
                { knowing: 'WebAPI', color: 'purple', percentage: 80 },
                {
                  knowing: 'Configuración y puesta punto de CMS',
                  color: 'purple',
                  percentage: 90,
                },
                {
                  knowing: 'Manejo de Servidores',
                  color: 'red',
                  percentage: 80,
                },
                { knowing: 'Diseño Web', color: 'green', percentage: 95 },
              ],
            },
            {
              id: '07',
              charge: 'Full Stack .Net Web Developer',
              logo: '../assets/img/freelancer.png',
              consultant: 'Freelance - C3llpoint',
              startDate: 'Diciembre 2020',
              endDate: 'Diciembre 2021',
              dates: [{ startDate: '01/12/2020', endDate: '01/12/2021' }],
              starred: true,
              projectImg: "../assets/img/portafolio-c3-c3llpoint.png",
              abstract:
                'Mantenimiento de Sistemas Financieros y Creación de nuevos módulos, Repositorio de Documentos, Implementación de Wiki para soportar documentación y lecciones aprendidas, tecnologías C# Framework 4 - 4.5 MVC, Angular JS, ASPX, Oracle (Store Procedures), SQL Server 2014, Ajax, Bootstrap, Jquery, CSS 3.0, Internacionalización.',
              activities: [
                { activity: 'Diseño de Base de Datos Relacional' },
                {
                  activity:
                    "Implementación de Manejador de Usuarios",
                },
                {
                  activity:
                    'Implementación de Colores y Diseño de Interfaz de acuerdo los lineamientos del cliente',
                },
                {
                  activity:
                    'Liberación y puesta en producción en SmartASP Hosting',
                },
                {
                  activity:
                    'Creación de WebAPI y consumo ',
                },
                { activity: 'Implementación de DatatableJS' },
                { activity: 'Implementación de Log4Net' },
                { activity: 'Implementación de Google Maps' }
              ],
              knowledge: [
                {
                  knowing: 'Web Services y Web API',
                  color: 'purple',
                  percentage: 80,
                },
                { knowing: 'Creación y Diseño de Plataforma', color: 'purple', percentage: 90 },
                { knowing: 'Google Maps', color: 'purple', percentage: 90 },
                { knowing: 'Versionamiento y Deploy', color: 'red', percentage: 80 },
                { knowing: 'Diseño Web', color: 'green', percentage: 95 },
              ],
            },
            {
              id: '08',
              charge: 'Full Stack .Net Web Developer',
              logo: 'assets/img/insurance.png',
              consultant: 'Gonet - CHUBB Actualidad',
              startDate: 'Diciembre 2016',
              endDate: 'Actualmente',
              dates: [{ startDate: '15/12/2016', endDate: '29/09/2017' }],
              starred: true,
              projectImg: "../assets/img/portafolio-iConfianza2020.png",
              abstract:
                'Mantenimiento de Sistemas Financieros y Creación de nuevos módulos, Repositorio de Documentos, Implementación de Wiki para soportar documentación y lecciones aprendidas, tecnologías C# Framework 4 - 4.5 MVC, Angular JS, ASPX, Oracle (Store Procedures), SQL Server 2014, Ajax, Bootstrap, Jquery, CSS 3.0, Internacionalización.',
              activities: [
                { activity: 'Creación de modulos nuevos' },
                {
                  activity:
                    "Implementación de servicios de calificadora financiera Moody's",
                },
                {
                  activity:
                    'Implementación de servicios de Identificación de riesgos (World Check, ICC Compliance Link)',
                },
                {
                  activity:
                    'Implementación de Pruebas de Usabilidad con Hotjar',
                },
                {
                  activity:
                    'Implementación de recopilador de documentación WikiMedia',
                },
                { activity: 'Repositorio de Documentos' },
                { activity: 'Reparación y Mantenimiento de Core Financiero' },
                { activity: 'Consumo de Web Services SOAP, WCF y REST' },
                {
                  activity:
                    'Creación y Uso de Funciones y Store Procedures SQL Server y Oracle',
                },
                { activity: 'Manejo de versionamiento TFS' },
                {
                  activity:
                    'Creación de Reportes Dinámicos con ChartJS, Typeahead y Web API',
                },
                { activity: 'Kendo, Angular JS,jQuery, JSON, Ajax y CSS3 ' },
              ],
              knowledge: [
                {
                  knowing: 'Web Services y Web API',
                  color: 'purple',
                  percentage: 80,
                },
                { knowing: 'Mantenimiento', color: 'purple', percentage: 90 },
                { knowing: 'Rebranding', color: 'purple', percentage: 90 },
                { knowing: 'Versionamiento', color: 'red', percentage: 80 },
                { knowing: 'Diseño Web', color: 'green', percentage: 95 },
              ],
            }
          ],
        },
        English: {
          description:
            "I'm a Fullstack .Net Developer focused on C# for its hardiness, scalability and interoperability with other systems, I have also worked with PHP, Angular JS and VB making improvements, migrations and repairs of existing systems. I'm able to work in teams, remotely or on site.' I love to keep me updated on new hardware and software solutions, either through online courses, lectures, attend to webinars, read blogs or classroom courses is always better to know what new technologies you can take for your work.",
          recomendations: 'Recomendations',
          clients: [
            {
              nombre: 'Octavio Rivas',
              cargo: 'Analist & QA Leader at X1 México',
              testimonio:
                'Great team leader, excellent communicator and innovator. He works excellent as a team, with a lot of commitment to carry out all the projects',
              imagen: '../assets/img/x1mexico-logo.png',
            },
            {
              nombre: 'Hugo Lugo',
              cargo: 'Business Partner en Global Hitss',
              testimonio:
                'Francisco is a committed, professional and proactive person, always dedicated and up to the challenges that arise.',
              imagen: '../assets/img/consolid-logo.png',
            },
            {
              nombre: 'Hiriam Eduardo Perez',
              cargo: 'Subdirector de Sistemas (INAI)',
              testimonio:
                'Francisco was a great collaborator in my charge for different projects of software development, technology consulting and business intelligence.',
              imagen: '../assets/img/inai-logo.jpg',
            },
            {
              nombre: 'Salvador Alvarado Tabuyo',
              cargo: 'IT Manager',
              testimonio:
                'An excellent element and with a capacity above the average.',
              imagen: '../assets/img/logo-chubb-2.png',
            },

          ],
          projects: [
            {
              id: '01',
              charge: 'Web Design and Webmaster',
              logo: 'assets/img/freelancer.png',
              consultant: 'Freelance',
              startDate: 'June 2011',
              endDate: 'Present',
              dates: [{ startDate: '01/06/2011', endDate: 'Today' }],
              starred: false,
              projectImg: "../assets/img/portafolio-iConfianza2020.png",
              abstract:
                'Design, Development, Implementation and maintenance of web pages for end customers, in CMS or HTML5 from scratch',
              activities: [
                { activity: 'Gathering and analysis of requirements' },
                { activity: 'Design proposal (Mockups, Wireframes))' },
                { activity: 'HTML Layout Design' },
                {
                  activity:
                    'Implementation of CMS (Joomla, Wordpress), eCommerce (Prestashop and Magento) and LCMS (Moodle)',
                },
                { activity: 'SEO  and Google Analytics' },
                { activity: 'Creation and connection of Social Media profiles' },
              ],
              knowledge: [
                { knowing: 'PHP', color: 'purple', percentage: 60 },
                { knowing: 'HTML5', color: 'red', percentage: 95 },
                { knowing: 'CMS', color: 'red', percentage: 85 },
                { knowing: 'SEO', color: 'green', percentage: 78 },
              ],
            },
            {
              id: '02',
              charge: ' .Net  Developer',
              logo: 'assets/img/ecommerce.png',
              consultant: 'CAMEBRA',
              startDate: 'April 2011',
              endDate: 'February 2013',
              dates: [{ startDate: '01/04/2011', endDate: '01/02/2013' }],
              starred: false,
              projectImg: "../assets/img/portafolio-iConfianza2020.png",
              abstract:
                'Partake in the realization of a web system for sales of technological products in ASP.NET 4, CSS 2.1 Style Sheets, Jquery and SQL Server 2008 R2 Database Engine with sqlclient objects. I also gave support to other applications which had technologies such as: Entity Framework, Webservices and RIA Services WCF, Silverlight.',
              activities: [
                { activity: 'Web Development' },
                { activity: 'Participation in Analysis and Implementation' },
                { activity: 'Web Design' },
                { activity: 'Application Support' },
              ],
              knowledge: [
                { knowing: 'ASP.NET 4', color: 'purple', percentage: 60 },
                { knowing: 'CSS 2.1', color: 'red', percentage: 65 },
                { knowing: 'WCF', color: 'red', percentage: 65 },
                {
                  knowing: ' Entity Framework',
                  color: 'green',
                  percentage: 65,
                },
              ],
            },
            {
              id: '03',
              charge: '.Net C# Developer',
              logo: 'assets/img/government.png',
              consultant: 'INAI - Indra',
              startDate: 'March 2013',
              endDate: 'January 2014',
              dates: [{ startDate: '01/03/2013', endDate: '01/01/2014' }],
              starred: false,
              projectImg: "../assets/img/portafolio-iConfianza2020.png",
              abstract:
                'Partake in the realization of a Portal for receiving complaints that included NHibernate Fluent technologies with SQL Server 2008, in ASP .NET 4.0 Framework, CSS, Ajax and JQuery, connected to several SAP CRM systems, SAP BW-BI and Open Text as document repository through Web Service',
              activities: [
                { activity: 'Web Development ASP .NET' },
                { activity: 'Participation in Analysis and Implementation' },
                { activity: 'Web Design' },
                { activity: 'OWASP' },
                {
                  activity:
                    'System Integration through Web Services (SOAP and WCF)',
                },
                { activity: 'Existing Application Support' },
                { activity: 'MAAGTIC Documentation' },
              ],
              knowledge: [
                {
                  knowing: '.Net Framework 4.0',
                  color: 'purple',
                  percentage: 80,
                },
                { knowing: 'nHibernate', color: 'red', percentage: 68 },
                { knowing: 'Web Services', color: 'red', percentage: 95 },
                { knowing: 'MAAGTIC', color: 'green', percentage: 80 },
              ],
            },
            {
              id: '04',
              charge: 'MVC .Net Development',
              logo: 'assets/img/banking.png',
              consultant: 'Unifin Financiera',
              startDate: 'March 2014',
              endDate: 'July 2014',
              dates: [{ startDate: '01/03/2014', endDate: '01/07/2014' }],
              starred: false,
              projectImg: "../assets/img/portafolio-iConfianza2020.png",
              abstract:
                'Collaborate in the migration of a Desktop Financial System in Visual Basic 6.0 and 2010 to a Web Platform with Responsive Design, in MVC architecture in C# language that included SQL Server 2008 technologies, in ASP .NET 4.0 Framework, CSS3, JSON , Bootstrap, Ajax and JQuery. With functions such as: Financial calculations, file reading, Crystal Reports packaging and communication with Dynamics.',
              activities: [
                { activity: 'Migrating VB .Net 6.0 to Web MVC C# Framework 4.0'},
                { activity: 'Participation in Analysis and Implementation' },
                { activity: 'Layout in Responsive Design (Bootstrap)' },
                { activity: 'jQuery, JSON, Ajax and CSS3 ' },
                { activity: 'Crystal Reports' },
              ],
              knowledge: [
                {
                  knowing: '.Net Framework 4.0',
                  color: 'purple',
                  percentage: 95,
                },
                { knowing: 'Jquery', color: 'red', percentage: 95 },
                { knowing: 'AJAX y Json', color: 'red', percentage: 80 },
                {
                  knowing: 'Responsive Design',
                  color: 'green',
                  percentage: 80,
                },
              ],
            },
            {
              id: '05',
              charge: '.Net Front End Developer',
              logo: 'assets/img/travel.png',
              consultant: 'Gonet - Consolid',
              startDate: 'August 2014',
              endDate: 'June 2015',
              dates: [{ startDate: '01/08/2014', endDate: '01/06/2015' }],
              starred: false,
              projectImg: "../assets/img/portafolio-iConfianza2020.png",
              abstract:
                'Design and implementation of User Administration, Security, Flight Search Engine (Sabre, Navitaire, Volaris), Design Change to Responsive Design (Bootstrap), Web Services Consumption (SOAP, WCF), 3 Layer Architecture, SQL Server 2012 with Entity Framework, CSS3, jQuery.',
              activities: [
                {
                  activity:
                    'Design and Implementation of User Manager',
                },
                { activity: 'Participation in Analysis and Implementation' },
                { activity: 'Security Implementation (Simple Membership)' },
                {
                  activity:
                    'Webservices Consumption ( Sabre, Navitaire 3.0 y 4.0 )',
                },
                { activity: 'Responsive Design with Bootstrap' },
                { activity: 'jQuery, JSON, Ajax and CSS3 ' },
              ],
              knowledge: [
                { knowing: 'Web Services', color: 'purple', percentage: 95 },
                { knowing: 'Security', color: 'red', percentage: 95 },
                { knowing: 'Web Design', color: 'green', percentage: 95 },
              ],
            },
            {
              id: '06',
              charge: 'Full Stack Web Developer',
              logo: 'assets/img/government.png',
              consultant: 'X1 México',
              startDate: 'June 2015',
              endDate: 'December 2016',
              dates: [{ startDate: '01/06/2015', endDate: '01/12/2016' }],
              starred: true,
              projectImg: "../assets/img/portafolio-procadist.jpg",
              abstract:
                'Programming in C# Language (Framework 4), PHP for the Web platform, HTML5 Layout, MVC, Layers, Web API, specialized in Front End and Responsive Design, SQL Server 2014, 2012, 2008 R2 Databases, MySQL and Desserts 9.4, Azure and CentOS server management. Implementation, Integration and Configuration of CMS (WordPress and Joomla), development of functionality in existing system in AngularJS, Configuration and repair of LCMS (Learning Content Management System) Moodle',
              activities: [
                { activity: 'Joomla Integration with .NET' },
                {
                  activity:
                    'Implementation of CMS (Joomla, Wordpress) and LCMS (Moodle)',
                },
                { activity: 'WebAPI consumption' },
                { activity: 'Layout using Bootstrap and MaterializeCSS' },
                { activity: 'Server management: Azure and CentOs' },
                { activity: 'jQuery, JSON, Ajax and CSS3 ' },
              ],
              knowledge: [
                { knowing: 'WebAPI', color: 'purple', percentage: 80 },
                {
                  knowing: 'Configuration and setup of CMS',
                  color: 'purple',
                  percentage: 90,
                },
                {
                  knowing: 'Server Managment',
                  color: 'red',
                  percentage: 80,
                },
                { knowing: 'Web Design', color: 'green', percentage: 95 },
              ],
            },
            {
              id: '07',
              charge: 'Full Stack .Net Web Developer',
              logo: '../assets/img/freelancer.png',
              consultant: 'Freelance - C3llpoint',
              startDate: 'December 2020',
              endDate: 'December 2021',
              dates: [{ startDate: '01/12/2020', endDate: '01/12/2021' }],
              starred: true,
              projectImg: "../assets/img/portafolio-c3-c3llpoint.png",
              abstract:
                'Creation of a system for an Insurer in cell phone mode, built on Core .NET 3.1 and MVC with SQL Server Databases, with KnoackoutJs, Bootstrap, Reporting Services. Implementation of Web API to integrate with partners and customers.',
              activities: [
                { activity: 'Relational Database Design' },
                {
                  activity:
                    'User Manager Implementation'
                },
                {
                  activity: "Implementation of Colors and Interface Design according to the client's guidelines"
                },
                {
                  activity:
                    'Release to production in SmartASP Hosting'
                },
                {
                  activity:
                    'WebAPI creation and consumption'
                },
                { activity: 'DatatableJS Implementation' },
                { activity: 'Log4Net Implementation' },
                { activity: 'Google Maps Implementation' }
              ],
              knowledge: [
                {
                  knowing: 'Web Services and Web API',
                  color: 'purple',
                  percentage: 80,
                },
                { knowing: 'Platform Creation and Design', color: 'purple', percentage: 90 },
                { knowing: 'Google Maps', color: 'purple', percentage: 90 },
                { knowing: 'version Control and Deploy', color: 'red', percentage: 80 },
                { knowing: 'Web Design', color: 'green', percentage: 95 },
              ],
            },
            {
              id: '08',
              charge: 'Full Stack .Net Web Developer',
              logo: 'assets/img/insurance.png',
              consultant: 'Gonet - CHUBB Actualidad',
              startDate: 'Diciembre 2016',
              endDate: 'Present',
              dates: [{ startDate: '15/12/2016', endDate: '29/09/2017' }],
              starred: true,
              projectImg: "../assets/img/portafolio-iConfianza2020.png",
              abstract:
                'Maintenance of Financial / Insurance Systems and Creation of new modules, Document Repository, Wiki Implementation to support documentation and lessons learned, C# Framework 4 - 4.5 MVC technologies, Angular JS, ASPX, Oracle (Store Procedures), SQL Server 2014, Ajax , Bootstrap, Jquery, CSS 3.0, Internationalization.',
              activities: [
                { activity: 'New Module Creation' },
                {
                  activity:
                    "Implementation of Moody's financial rating services",
                },
                {
                  activity:
                    'Implementation of risk identification services (World Check, ICC Compliance Link)',
                },
                {
                  activity:
                    'Implementation of Usability Testing with Hotjar',
                },
                {
                  activity:
                    'WikiMedia Documentation Collector Implementation',
                },
                { activity: 'Document Repository' },
                { activity: 'Repair and Maintenance of Insurance Core' },
                { activity: 'Consumo de Web Services SOAP, WCF y REST' },
                {
                  activity:
                    'Creation and Use of Functions and Store Procedures SQL Server and Oracle',
                },
                { activity: 'Version Control (TFS and DevOps)' },
                {
                  activity:
                    'Creation of Dynamic Reports with ChartJS, Typeahead and Web API',
                },
                { activity: 'Kendo, Angular JS,jQuery, JSON, Ajax and CSS3 ' },
              ],
              knowledge: [
                {
                  knowing: 'Web Services and Web API',
                  color: 'purple',
                  percentage: 80,
                },
                { knowing: 'Support', color: 'purple', percentage: 90 },
                { knowing: 'Rebranding', color: 'purple', percentage: 90 },
                { knowing: 'Version Control', color: 'red', percentage: 80 },
                { knowing: 'New Modules', color: 'green', percentage: 95 },
              ],
            }
          ],
        },
      },
    ],
    recomendations: 'Recomendaciones',
    project: {
      id: '01',
      charge: 'Diseño Web y Webmaster',
      logo: 'assets/img/freelancer.png',
      consultant: 'Freelance',
      startDate: 'Junio 2011',
      endDate: 'Actualidad',
      dates: [{ startDate: '01/06/2011', endDate: 'Today' }],
      abstract:
        'Diseño, Desarrollo, Implementación y mantenimiento de páginas web para clientes finales, en CMS o HTML5 desde cero ',
      activities: [
        { activity: 'Levantamiento  y Analísis de requerimientos' },
        { activity: 'Propuesta de Diseño (Mockups, Wireframes))' },
        { activity: 'Maquetado' },
        {
          activity:
            'Implementación de CMS (Joomla, Wordpress), eCommerce (Prestashop y Magento) y LCMS (Moodle)',
        },
        { activity: 'SEO  y Google Analytics' },
        { activity: 'Creación y conexión de perfiles de Social Media' },
      ],
      knowledge: [
        { knowing: 'PHP', color: 'purple', percentage: '60' },
        { knowing: 'HTML5', color: 'red', percentage: '95' },
        { knowing: 'CMS', color: 'red', percentage: '85' },
        { knowing: 'SEO', color: 'green', percentage: '78' },
      ],
    },
    projects: [
      {
        id: '01',
        charge: 'Diseño Web y Webmaster',
        logo: 'assets/img/freelancer.png',
        consultant: 'Freelance',
        startDate: 'Junio 2011',
        endDate: 'Actualidad',
        dates: [{ startDate: '01/06/2011', endDate: 'Today' }],
        starred: false,
        projectImg: "../assets/img/portafolio-iConfianza2020.png",
        abstract:
          'Diseño, Desarrollo, Implementación y mantenimiento de páginas web para clientes finales, en CMS o HTML5 desde cero ',
        activities: [
          { activity: 'Levantamiento  y Analísis de requerimientos' },
          { activity: 'Propuesta de Diseño (Mockups, Wireframes))' },
          { activity: 'Maquetado' },
          {
            activity:
              'Implementación de CMS (Joomla, Wordpress), eCommerce (Prestashop y Magento) y LCMS (Moodle)',
          },
          { activity: 'SEO  y Google Analytics' },
          { activity: 'Creación y conexión de perfiles de Social Media' },
        ],
        knowledge: [
          { knowing: 'PHP', color: 'purple', percentage: 60 },
          { knowing: 'HTML5', color: 'red', percentage: 95 },
          { knowing: 'CMS', color: 'red', percentage: 85 },
          { knowing: 'SEO', color: 'green', percentage: 78 },
        ],
      }
    ],
    clientes: [
      {
        nombre: 'Octavio Rivas',
        cargo: 'Analist & QA Leader at X1 México',
        testimonio:
          'Gran líder de equipos de trabajo, excelente comunicador e innovador. Trabaja excelente en equipo, con mucho compromiso por sacar adelante todos los proyectos.',
        imagen: '../assets/img/x1mexico-logo.png',
      },
      {
        nombre: 'Hugo Lugo',
        cargo: 'Business Partner en Global Hitss',
        testimonio:
          'Francisco es una persona comprometida, profesional y proactivo, siempre dedicado y a la altura se los retos que se le presenten.',
        imagen: '../assets/img/consolid-logo.png',
      },
      {
        nombre: 'Hiriam Eduardo Perez',
        cargo: 'Subdirector de Sistemas (INAI)',
        testimonio:
          'Francisco fue un gran colaborador a mi cargo para distintos proyectos de desarrollo de software, consultoría tecnológica e inteligencia de negocio.',
        imagen: '../assets/img/inai-logo.jpg',
      },
      {
        nombre: 'Salvador Alvarado Tabuyo',
        cargo: 'IT Manager',
        testimonio:
          'Un excelente elemento y con una capacidad sobre el promedio.',
        imagen: '../assets/img/logo-chubb-2.png',
      },
    ],
  };
  title = 'AngularTest';
  name: string = 'Francisco Arroyo';
  charge: string = 'Fullstack .Net Developer';
  imageSrc: string = '../assets/img/bio.jpg';
  description?: string =
    "I'm a Fullstack .Net Developer focused on C# for its hardiness, scalability and interoperability with other systems, I have also worked with PHP, Angular JS and VB making improvements, migrations and repairs of existing systems. I'm able to work in teams, remotely or on site.' I love to keep me updated on new hardware and software solutions, either through online courses, lectures, attend to webinars, read blogs or classroom courses is always better to know what new technologies you can take for your work.";
  newTech: string = 'AngularJs';
  year: number = new Date().getFullYear();
  links: Array<any> = [
    {
      href: 'https://www.linkedin.com/in/francisco-arroyo-83351727/',
      class: 'fa fa-linkedin fa-stack-1x fa-inverse',
      color: ' #006ba3',
      text: 'linkedin.com/francisco-arroyo',
    },
    {
      href: 'https://github.com/controlzeta',
      class: 'fa fa-github fa-stack-1x fa-inverse',
      color: '#000000',
      text: 'github.com/controlzeta',
    },
    {
      href: 'https://pakoarroyo.controlzeta.com.mx/portfolio.html',
      class: 'fa fa-briefcase fa-stack-1x fa-inverse',
      color: '#ff0000',
      text: 'portfolio',
    },
  ];

  stack: Array<imagesModel> = [
    {
      src: '../assets/img/c_sharp_logo.png',
      alt: 'C# Language',
      width: '100%',
    },
    { src: '../assets/img/iis_logo.png', alt: 'IIS Server', width: '100%' },
    { src: '../assets/img/oracle_logo.png', alt: 'Oracle', width: '100%' },
    {
      src: '../assets/img/sql_server_logo.jpg',
      alt: 'SQL Server',
      width: '100%',
    },
    {
      src: '../assets/img/chart-js-logo.jpg',
      alt: 'ChartJS',
      width: '100%',
    },
    { src: '../assets/img/wcf-logo.jpg', alt: 'WCF', width: '100%' },
    {
      src: '../assets/img/web-api-logo.jpg',
      alt: 'Web API',
      width: '100%',
    },
    { src: '../assets/img/js-logo.png', alt: 'Javascript', width: '100%' },
    { src: '../assets/img/css-logo.png', alt: 'CSS 3.0', width: '100%' },
    { src: '../assets/img/jquery-logo.jpg', alt: 'jQuery', width: '100%' },
    { src: '../assets/img/bootstrap.jpg', alt: 'Bootstrap', width: '100%' },
    { src: '../assets/img/angular.png', alt: 'AngularJS', width: '100%' },
    {
      src: '../assets/img/azure-devops.png',
      alt: 'Azure',
      width: '100%',
    },
  ];

  coursesAndCerts: Array<imagesModel> = [
    { src: '../assets/img/logo-platzi.jpg', alt: 'Platzi', href:'https://platzi.com/p/pakito555', width: '100%' },
    { src: '../assets/img/logo-cisco.jpg', alt: 'Cisco', width: '100%' },
    { src: '../assets/img/ps-logo.png', alt: 'Adobe Photoshop', width: '100%' },
    { src: '../assets/img/scrum-logo.png', alt: 'Scrum Fundamentals', width: '100%' },
  ];

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

  register = { name: '', email: '', password: '' };

  // technologies : string[] = ["C#, ASP, ASP.Net, Visual Basic, Html5", "SQL Server 2014, Postgres, MySQL, Oracle 11g", "Visual Studio 2012, Visual Studio 2013, Visual Studio 2015" ]

  btnDisabled = true;
  progressBar = 1;
  show = false;
  paramsObject: any = null;
  // Event Binding
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.language = params['language'];
      }
      );
    this.numberOfProjects = this.info.languages[0].Spanish.projects.length;
    this.changeLanguage(this.language);
  }


  onSave() {
    console.log('Saving!');
    this.progressBar += 5;
    this.show = !this.show;
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
    if (this.progressBar > 100) {
      this.progressBar = 0;
    }
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    this.progressBar = element.scrollTop;
  }

  onKeyUp(event: Event) {
    const element = event.target as HTMLInputElement;
    this.name = element.value;
  }

  addTech() {
    // this.technologies.push( this.newTech );
    this.technologies.push({ utilerias: this.newTech });
    this.newTech = '';
  }

  deleteTech(index: number) {
    this.technologies.splice(index, 1);
  }

  onRegister() {
    console.log(this.register);
  }

  changeLanguage(lang: string) {
    this.language = lang;
    if (lang == 'Spanish') {
      this.description = this.info.languages[0].Spanish?.description;
      this.info.clientes = this.info.languages[0].Spanish?.clients;
      this.info.recomendations = this.info.languages[0].Spanish?.recomendations;
      this.info.projects = this.info.languages[0].Spanish?.projects;
    } else {
      this.description = this.info.languages[0].English?.description;
      this.info.clientes = this.info.languages[0].English.clients;
      this.info.recomendations = this.info.languages[0].English?.recomendations;
      this.info.projects = this.info.languages[0].English?.projects;
    }
  }

  open(id: any, content: any) {
    this.modalService.open(content, { size: 'xl' });
    console.log(id + content);
    this.info.project = id;
  }

  getItemsStarred() {
    return this.info.languages[0].Spanish?.projects.filter((item: any) => item.starred === true);
  }

  getNumber(numero: any) {
    try {
      return parseInt(numero);
    } catch (e) {
      console.log(e)
    }
    return 0;
  }

  getClass(index: any) {
    switch (index) {
      case 1:
      case 5:
      case 9:
        return "info";
      case 2:
      case 6:
      case 10:
        return "success";
      case 3:
      case 7:
        return "warning";
      case 4:
      case 8:
        return "danger";
      default:
        return "primary";
    }
  }
}
