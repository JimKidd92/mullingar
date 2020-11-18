import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit, AfterViewInit {
  @ViewChild(GoogleMap) map: any;

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const latlng: google.maps.
      LatLng =
        new google.maps.LatLng({ lat: 53.526425, lng: -7.338116 });
      if (this.map) {
        this.map.googleMap.setCenter(latlng);
      }
    },
      200);
  }

  ngOnInit(): void {
  }

}
