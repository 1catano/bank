import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../shared/contracts/IProduct';

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
