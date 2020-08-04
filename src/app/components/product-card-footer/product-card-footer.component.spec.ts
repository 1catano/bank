import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardFooterComponent } from './product-card-footer.component';

describe('ProductCardFooterComponent', () => {
  let component: ProductCardFooterComponent;
  let fixture: ComponentFixture<ProductCardFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCardFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
