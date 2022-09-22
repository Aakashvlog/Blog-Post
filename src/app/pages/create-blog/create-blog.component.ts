import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  blog_name:any;
  description:any;
  user:any;
  constructor(private commonService: CommonServiceService, private router : Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("user")|| '{}');
  }

  createBlog(){
    this.commonService.postData('/createTask', {blog_name: this.blog_name, description: this.description, userId: this.user.userId }).subscribe((data)=>{
      this.router.navigate(['list-of-blog']);
    },(err)=>{
      console.log(err);
    })
  }

}
