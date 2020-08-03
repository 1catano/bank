import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { IProduct } from '../shared/contracts/product';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filterdProducts, isLoading } from '../store/products.selectors';
import { GetProducts } from '../store/products.actions';
import { IAppState } from '../shared/contracts/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public showSidebar: boolean;
  public isMobile = true;
  products$: Observable<IProduct[]>;
  isLoading$: Observable<boolean>;

  constructor(private deviceService: DeviceDetectorService, private store: Store<IAppState>) {
    this.products$ = this.store.pipe(select(filterdProducts));
    this.isLoading$ = this.store.pipe(select(isLoading));
  }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
    this.showSidebar = !this.isMobile;
    this.store.dispatch(new GetProducts());
  }

  handleToggleSidebar(event: string): void {
    switch (event) {
      case 'clickOnHamburgerEvent':
        this.showSidebar = !this.showSidebar;
        break;
      default:
        this.showSidebar = false;
        break;
    }
  }
}
