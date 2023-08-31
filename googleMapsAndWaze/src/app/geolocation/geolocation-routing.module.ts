import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WazeButtonComponent} from './waze-button/waze-button.component'
import { MapComponent} from './map/map.component'


const routes: Routes = [
  {
     path: '', 
   redirectTo: 'geolocation',
   pathMatch:'full'
  }, 
  {
    path:'waze-button',
    component: WazeButtonComponent
  },
  {
    path:'map',
    component: MapComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class GeoLocationRoutingModule {}
