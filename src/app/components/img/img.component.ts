import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img: string = "init";
  @Input() class: string = "init";
  @Output() loaded = new EventEmitter<string>();

  imageDefault = '../../assets/img/not-found.png'

  constructor() { }

  ngOnInit(): void {
  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoaded(){
    console.log('load hijo');
    this.loaded.emit("Ya se logró cargar" + this.img);
  }
}
