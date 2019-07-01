import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitePreviewComponent } from './site-preview.component';

describe('SitePreviewComponent', () => {
  let component: SitePreviewComponent;
  let fixture: ComponentFixture<SitePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
