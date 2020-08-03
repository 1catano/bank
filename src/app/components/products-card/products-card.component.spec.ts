import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCardComponent } from './products-card.component';

describe('ProductsCardComponent', () => {
  let component: ProductsCardComponent;
  let fixture: ComponentFixture<ProductsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // products-card.component.spec.ts
  it('should correctly render the passed @Input value', () => {
    component.product = {
      accountInformation: {
        accountIdentifier: '1315000185',
        productType: 'CREDIT',
        bank: 'BANCO_2'
      }
    };
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('label').textContent).toBe('1315000185');
  });
});
