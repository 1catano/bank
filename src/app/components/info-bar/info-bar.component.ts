import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Store, select } from '@ngrx/store';
import { selectedFilter } from '../../store/products.selectors';
import { FilterProductsByBank } from '../../store/products.actions';
import { IAppState } from '../../shared/contracts/app.state';
import { Subscription } from 'rxjs';
import { Banks } from 'src/app/shared/contracts/banks.enum';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss']
})
export class InfoBarComponent implements OnInit, OnDestroy {
  private filterSelectedSubscription: Subscription;
  private bypass = true;
  public faAngleRightIcon = faAngleRight;
  public faAngleLeftIcon = faAngleLeft;
  public selectedFilter: string;

  constructor(translate: TranslateService, private store: Store<IAppState>) { }

  ngOnInit(): void {
    this.filterSelectedSubscription = this.store.pipe(select(selectedFilter)).subscribe((filter) => {
      this.selectedFilter = filter;
    });
  }

  ngOnDestroy(): void {
    this.filterSelectedSubscription.unsubscribe();
  }

  handleToggle(): void {
    if (!this.bypass) {
      this.bypass = !this.bypass;
      return;
    }
    switch (this.selectedFilter) {
      case Banks.Bank1: {
        this.store.dispatch(new FilterProductsByBank({ filter: Banks.ALL }));
        break;
      }
      case Banks.ALL: {
        this.store.dispatch(new FilterProductsByBank({ filter: Banks.Bank1 }));
        break;
      }
    }
    this.bypass = !this.bypass;
  }
}
