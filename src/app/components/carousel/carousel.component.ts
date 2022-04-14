import { Component, ViewChild,OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource,NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { imagesModel } from 'src/app/models/imagesModel.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  // images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);
  // images = ["../assets/img/portafolio-iConfianza2020.png","../assets/img/portafolio-procadist.jpg", "../assets/img/portafolio-c3-c3llpoint.png"]

  @Input() images:any;
  @Output() loaded = new EventEmitter<any>();
  
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;
  showNavigationArrows = true;
  showNavigationIndicators = true;
  constructor() {
    
   }

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel | undefined;

  ngOnInit(): void {
  }

  togglePaused() {
    if (this.paused) {
      this.carousel?.cycle();
    } else {
      this.carousel?.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  projectClick($event: any) {
    this.loaded.emit($event);
    console.log('Project Click: ',$event)
  }

}
