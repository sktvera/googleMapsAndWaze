import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map/map.component';
import { WazeButtonComponent } from './waze-button/waze-button.component';

import { GeoLocationRoutingModule } from './geolocation-routing.module';

@NgModule({
  declarations: [
    MapComponent,
    WazeButtonComponent
  ],
  imports: [
    CommonModule,
    GeoLocationRoutingModule
  ]
})
export class GeolocationModule { }



