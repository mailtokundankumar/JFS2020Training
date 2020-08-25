import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddressDetailComponent } from './user-address-detail.component';

describe('UserAddressDetailComponent', () => {
  let component: UserAddressDetailComponent;
  let fixture: ComponentFixture<UserAddressDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddressDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddressDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
