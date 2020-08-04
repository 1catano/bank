import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardBodyComponent } from './product-card-body.component';

describe('ProductCardBodyComponent', () => {
  let component: ProductCardBodyComponent;
  let fixture: ComponentFixture<ProductCardBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCardBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
