import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggerTemplate } from './blogger-template';

describe('BloggerTemplate', () => {
  let component: BloggerTemplate;
  let fixture: ComponentFixture<BloggerTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloggerTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloggerTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
