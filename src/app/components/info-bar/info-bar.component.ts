import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss']
})
export class InfoBarComponent implements OnInit {
  public faAngleRightIcon = faAngleRight;
  public faAngleLeftIcon = faAngleLeft;

  constructor(translate: TranslateService) { }

  ngOnInit(): void {
  }

}
