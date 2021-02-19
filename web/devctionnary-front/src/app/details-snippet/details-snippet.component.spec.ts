import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSnippetComponent } from './details-snippet.component';

describe('DetailsSnippetComponent', () => {
  let component: DetailsSnippetComponent;
  let fixture: ComponentFixture<DetailsSnippetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsSnippetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
