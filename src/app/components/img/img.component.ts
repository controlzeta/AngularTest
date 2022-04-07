import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';


@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  // @Input() img: string = 'init';

  @Input('img') set img(newImg:string){
    this.imageDefault = newImg;
    console.log("The Image has changed" + this.imageDefault)
  }

  @Input() class: string = 'init';
  @Output() loaded = new EventEmitter<string>();

  imageDefault = '../../assets/img/not-found.png';

  counter = 60;
  counterFn: number  | undefined;

  constructor() {
    console.log('constructor ' + 'img = ', this.img);
  }

  ngOnChanges( changes : SimpleChanges): void {
    //before & during render
    //changes inputs
    console.log('onChanges ' + 'img = ', this.img);
    console.log(changes);
  }

  ngOnInit(): void {
    //before render
    //async - fetch
    console.log('ngOnInit ' + 'img = ', this.img);
    // this.counterFn= window.setInterval(() => { this.counter-=1; console.log(this.counter); }, 1000);
  }

  ngAfterViewInit(): void {
    //after render
    console.log('ngAfterViewInit ' + 'img = ', this.img);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy ' + 'img = ', this.img);
    window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('load hijo');
    this.loaded.emit('Ya se logró cargar' + this.img);
  }
}
