import { Component } from '@angular/core';
import {faProductHunt} from '@fortawesome/free-brands-svg-icons';
import {faCog, faCogs, faShoppingCart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  productIcon = faProductHunt;
  purchaseIcon = faShoppingCart;
  settingIcon = faCog;
}
