import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as L from 'leaflet';
import { MarkerService } from '../marker.service';
const iconRetinaUrl = 'assets/markerIcon2x.png';
const iconUrl = 'assets/markerIcon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map-container',
  standalone: true,
  imports: [CommonModule, NgbModule],
  templateUrl: './map-container.component.html',
  styleUrl: './map-container.component.css',
})
export class MapContainerComponent implements AfterViewInit {
  map!: L.Map;

  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 5,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }

  constructor(private markerService: MarkerService) {}

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeCapitalMarkers(this.map);
  }
}
