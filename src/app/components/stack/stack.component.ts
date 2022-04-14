import { Component,  Input } from '@angular/core';
import { imagesModel } from 'src/app/models/imagesModel.model';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent {

  constructor() { }

  @Input() myStack : imagesModel = {};

  // ngOnInit(): void {
  // }

}
