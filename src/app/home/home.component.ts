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
  public isDesktopDevice: boolean;

  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.isDesktopDevice = this.deviceService.isDesktop();
    this.showSidebar = this.isDesktopDevice ? true : false;
  }

  handleToggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }
}
