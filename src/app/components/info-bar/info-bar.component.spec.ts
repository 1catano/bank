import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { InfoBarComponent } from './info-bar.component';

describe('InfoBarComponent', () => {
  let component: InfoBarComponent;
  let fixture: ComponentFixture<InfoBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoBarComponent ],
      imports: [
        TranslateModule.forRoot(),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
