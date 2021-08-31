import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsRowComponent } from './suggestions-row.component';

describe('SuggestionsRowComponent', () => {
  let component: SuggestionsRowComponent;
  let fixture: ComponentFixture<SuggestionsRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionsRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
