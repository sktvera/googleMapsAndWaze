// geolocation/map/map.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  ngOnInit() {
    if (navigator.permissions) {
      navigator.permissions.query({ name: 'geolocation' }).then(permission => {
        if (permission.state === 'prompt') {
          // Aquí puedes mostrar un mensaje o una solicitud para obtener permisos de geolocalización.
        }
      });
    }
  }
}
