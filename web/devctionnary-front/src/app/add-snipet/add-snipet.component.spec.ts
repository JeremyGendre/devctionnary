import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSnipetComponent } from './add-snipet.component';

describe('AddSnipetComponent', () => {
  let component: AddSnipetComponent;
  let fixture: ComponentFixture<AddSnipetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSnipetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSnipetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
