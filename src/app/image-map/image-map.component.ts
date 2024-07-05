import { AfterViewInit, Component, OnInit } from '@angular/core';
declare const imageMapResize: any;
@Component({
  selector: 'app-image-map',
  standalone: true,
  imports: [],
  templateUrl: './image-map.component.html',
  styleUrl: './image-map.component.scss',
})
export class ImageMapComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const maps = document.querySelectorAll('map');
    console.log('Found maps:', maps);
    maps.forEach((map) => {
      console.log('Resizing map:', map);
      imageMapResize(map);
    });
  }
}
