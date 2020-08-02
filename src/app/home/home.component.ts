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

  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();
    this.showSidebar = !this.isMobile;
  }

  handleToggleSidebar(event: string): void {
    switch (event) {
      case "clickOnHamburgerEvent":
        this.showSidebar = !this.showSidebar;
        break;
      default:
        this.showSidebar = false;
        break;
    }
  }
}
