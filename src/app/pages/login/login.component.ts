import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  constructor(private router: Router, private commonService : CommonServiceService) { }

  ngOnInit(): void {
  }

  openSignUp(){
    this.router.navigate(['signup']);
  }

  login(){
    this.commonService.postData('/login', {email: this.email, password:  this.password}).subscribe((data)=>{
      sessionStorage.setItem("user",JSON.stringify(data));
      this.router.navigate(['list-of-blog']);
    },(err)=>{
      console.log(err);
    })
  }

}
