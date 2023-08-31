// geolocation/waze-button/waze-button.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-waze-button',
  templateUrl: './waze-button.component.html',
  styleUrls: ['./waze-button.component.scss']
})
export class WazeButtonComponent {
  openWaze() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        window.location.href = `https://www.waze.com/ul?ll=${latitude},${longitude}&navigate=yes`;
      });
    } else {
      alert('Tu navegador no soporta la geolocalización.');
    }
  }
}
