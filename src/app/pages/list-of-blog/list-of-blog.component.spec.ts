import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfBlogComponent } from './list-of-blog.component';

describe('ListOfBlogComponent', () => {
  let component: ListOfBlogComponent;
  let fixture: ComponentFixture<ListOfBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOfBlogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
