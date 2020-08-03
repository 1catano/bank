import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/contracts/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: Array<IProduct>;
  constructor() { }

  ngOnInit(): void {
  }

}
