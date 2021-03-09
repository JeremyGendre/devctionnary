import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSnippetComponent } from './all-snippet.component';

describe('AllSnippetComponent', () => {
  let component: AllSnippetComponent;
  let fixture: ComponentFixture<AllSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllSnippetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
