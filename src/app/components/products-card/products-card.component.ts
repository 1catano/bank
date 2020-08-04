import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/contracts/product';
import { TranslateService } from '@ngx-translate/core';
import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import { faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';
import { ProductType } from '../../shared/contracts/products.enum';
import { faHandHolding } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent implements OnInit {
  public headerIcon = faMoneyCheckAlt;
  public productType: string;

  @Input() product: IProduct;

  constructor(translate: TranslateService) {
  }

  ngOnInit(): void {
    this.initialize();
  }

  private initialize(): void {
    const regex: RegExp = new RegExp('^4');

    if (this.product.id.match(regex) != null) {
      this.headerIcon = faCcVisa;
      return;
    }

    if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(this.product.id)) {
      this.headerIcon = faCcMastercard;
      return;
    }

    if (this.product.typeAccount === ProductType.CREDIT) {
      this.headerIcon = faMoneyBillWave;
      return;
    }

    if (this.product.typeAccount === ProductType.CHECKING_ACCOUNT) {
      this.headerIcon = faMoneyCheck;
      return;
    }
  }

}
