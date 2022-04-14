import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ImgComponent } from './components/img/img.component';
import { StackComponent } from './components/stack/stack.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeagoPipe } from './pipes/timeago.pipe';
import { HighlightDirective } from './directives/highlight.directive'


@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    StackComponent,
    CarouselComponent,
    ReversePipe,
    TimeagoPipe,
    HighlightDirective
  ],
  exports: [CarouselComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule, 
    NgbModule, 
    NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

