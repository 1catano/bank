import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public faBarsIcon = faBars;
  public username = 'Miguel';

  @Output() clickOnHamburgerEvent = new EventEmitter<string>();

  constructor(translate: TranslateService) { }

  ngOnInit(): void {
  }

  handlerClickHamburger(): void {
    this.clickOnHamburgerEvent.emit('clickOnHamburgerEvent');
  }

}
