import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebScrapComponent } from './web-scrap.component';

describe('WebScrapComponent', () => {
  let component: WebScrapComponent;
  let fixture: ComponentFixture<WebScrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebScrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebScrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
