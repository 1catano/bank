import { Component, OnInit, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public faBarsIcon = faBars;
  public faUserCircleIcon = faUserCircle;
  public faSortDownIcon = faSortDown;
  public faBellIcon = faBell;
  public faSignOutAltIcon = faSignOutAlt;
  public showProfileMenu = false;
  public username = 'Miguel';

  @Output() clickOnHamburgerEvent = new EventEmitter<string>();

  constructor(translate: TranslateService, private eRef: ElementRef) { }

  ngOnInit(): void {
  }

  handlerClickHamburger(): void {
    this.clickOnHamburgerEvent.emit('clickOnHamburgerEvent');
  }

  @HostListener('document:click', ['$event'])
  clickout(): void {
    this.showProfileMenu = this.showProfileMenu ? !this.showProfileMenu : this.showProfileMenu;
  }

  handleClickProfile(): void {
    this.showProfileMenu = !this.showProfileMenu;
  }
}
