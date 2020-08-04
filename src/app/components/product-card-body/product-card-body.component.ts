import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProductType } from 'src/app/shared/contracts/products.enum';

@Component({
  selector: 'app-product-card-body',
  templateUrl: './product-card-body.component.html',
  styleUrls: ['./product-card-body.component.scss']
})
export class ProductCardBodyComponent implements OnInit {

  public productTypeName: string;

  @Input() productType: string;
  @Input() number: string;
  @Input() value : string;

  constructor( translate: TranslateService ) { }

  ngOnInit(): void {
    this.setProductTypeName();
  }

  private setProductTypeName() {
      switch(this.productType) {
        case ProductType.SAVINGS_ACCOUNT: {
          this.productTypeName = "card.saving_account";
          break;
        }
        case ProductType.CHECKING_ACCOUNT: {
          this.productTypeName = "card.checking_account";
          break;
        }
        case ProductType.CDT: {
          this.productTypeName = "card.cdt";
          break;
        }
        case ProductType.CREDIT_CARD: {
          this.productTypeName = "card.credit-card";
          break;
        }
        case ProductType.CREDIT: {
          this.productTypeName = "card.credit1";
          break;
        }
      }
  }

}
