import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { faBoxTissue } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public showSidebar: boolean;
  public isMobile = true;
  public products = [
    {
      accountInformation: {
        accountIdentifier: '1315000180',
        productType: 'CREDIT',
        bank: 'BANCO_2'
      }
    },
    {
      accountInformation: {
        accountIdentifier: '1315000181',
        productType: 'CREDIT',
        bank: 'BANCO_2'
      }
    },
    {
      accountInformation: {
        accountIdentifier: '1315000182',
        productType: 'CREDIT',
        bank: 'BANCO_2'
      }
    },
    {
      accountInformation: {
        accountIdentifier: '1315000183',
        productType: 'CREDIT',
        bank: 'BANCO_2'
      }
    },
    {
      accountInformation: {
        accountIdentifier: '1315000184',
        productType: 'CREDIT',
        bank: 'BANCO_2'
      }
    },
    {
      accountInformation: {
        accountIdentifier: '1315000185',
        productType: 'CREDIT',
        bank: 'BANCO_2'
      }
    }
  ];

  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
    this.showSidebar = !this.isMobile;
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
