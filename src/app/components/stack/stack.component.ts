import { Component, OnInit, Input } from '@angular/core';
import { imagesModel } from 'src/app/models/imagesModel.model';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {

  constructor() { }

  @Input() myStack : imagesModel = {};

  ngOnInit(): void {
  }

}
