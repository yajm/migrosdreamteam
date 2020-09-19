import { Component, OnInit } from '@angular/core';
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import {
  faBullseye,
  faCog,
  faCogs,
  faShoppingCart,
  faUtensils,
} from '@fortawesome/pro-light-svg-icons';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  productIcon = faUtensils;
  purchaseIcon = faShoppingCart;
  settingIcon = faCog;
  goalIcon = faBullseye;

  constructor(private swUpdate: SwUpdate) {}

  ngOnInit(): void {
    this.swUpdate.available.subscribe(async (evt) => {
      console.log('update available');
      //         window.location.reload();
    });
  }
}
