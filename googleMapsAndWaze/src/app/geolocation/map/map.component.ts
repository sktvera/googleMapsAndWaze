// geolocation/map/map.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  showGoogleMaps = false;
  showWazeMap = false;

  toggleGoogleMaps() {
    this.showGoogleMaps = !this.showGoogleMaps;
    if (this.showGoogleMaps && this.showWazeMap) {
      this.showWazeMap = false;
    }
  }

  toggleWazeMap() {
    this.showWazeMap = !this.showWazeMap;
    if (this.showGoogleMaps && this.showWazeMap) {
      this.showGoogleMaps = false;
    }
  }

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
