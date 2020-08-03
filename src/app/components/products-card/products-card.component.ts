import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/contracts/product';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html',
  styleUrls: ['./products-card.component.scss']
})
export class ProductsCardComponent implements OnInit {
  @Input() product: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

}
