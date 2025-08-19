import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blogger } from './blogger';

describe('Blogger', () => {
  let component: Blogger;
  let fixture: ComponentFixture<Blogger>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blogger]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blogger);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
