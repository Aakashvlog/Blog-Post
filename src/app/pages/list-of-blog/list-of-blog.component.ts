import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-list-of-blog',
  templateUrl: './list-of-blog.component.html',
  styleUrls: ['./list-of-blog.component.css']
})
export class ListOfBlogComponent implements OnInit {
  blogList = [];
  blogId:string|undefined;
  showBlogList:any;
  showSeperateBlog=false;
  showEditIcon=true;  
  zeroBlog:any;
  user:any;
  blog={
    _id: "",
    blog_name: 'Dummy Blog Name',
    description: "Dummy Description"
  };
  newDescription:any;
  constructor(private commonService: CommonServiceService, private router: Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("user") || '{}');
    if(this.user){
      this.callListOfBlogApi(this.user.userId);
    }
  }

  callListOfBlogApi(userId: any) {
    this.commonService.postData('/getAllTask', { userId }).subscribe((data) => {
      this.blogList = data.blogs;
      if (data.count === 0) {
        this.showBlogList = false;
        this.zeroBlog = true;
      } else {
        this.showBlogList = true;
        this.zeroBlog = false;
      }
      console.log(this.blogList);
    }, (err) => {
      console.log(err);
    })
  }

  gotoBlog(blogId: any){
    this.commonService.postData('/getATask',{userId: this.user.userId, blogId }).subscribe((data)=>{
      this.blog=data;
      this.showBlogList = false;
      this.showSeperateBlog =true;
    },(err)=>{
      console.log(err);
    })
  }

  goBack(){
    this.showSeperateBlog=false;
    this.showBlogList = true;
    this.zeroBlog=false;
  }

  deleteBlog(blogId:any){
    this.commonService.postData('/deleteTask',{blogId}).subscribe((data)=>{
      this.callListOfBlogApi(this.user.userId);
    },(err)=>{
      console.log(err);
    })
  }

  createBlog(){
    this.router.navigate(['create-blog']);
  }

  submit(){
    const payload = {userId: this.user.userId, blogId: this.blog._id, description: this.newDescription}
    this.commonService.postData('/updateTask',payload).subscribe((data)=>{
      this.blog.description = data.description;
      this.showEditIcon=true;
    },(err)=>{
      console.log(err);
    })
  }

  editBlog(){
    this.showEditIcon=false;
    this.newDescription = this.blog.description;  
  }

}
