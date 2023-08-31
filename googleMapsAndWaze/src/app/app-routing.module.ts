import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent} from './routes/homepage/homepage.component'

const routes: Routes = [
  {
     path: '', 
   redirectTo: 'home',
   pathMatch:'full'
  }, 
  {
    path:'home',
    component: HomepageComponent
  },
  {
    path: 'maps', 
   loadChildren:()=> import('./geolocation/map/map.component').then(m=> m.MapComponent)
 }, 
 {
  path: 'waze', 
 loadChildren:()=> import('./geolocation/waze-button/waze-button.component').then(m=> m.WazeButtonComponent)
}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
