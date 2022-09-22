import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name:any;
  email:any;
  password:any;
  constructor(private router: Router, private commonService : CommonServiceService) { }

  ngOnInit(): void {
  }

  openLogin(){
    this.router.navigate(['login']);
  }

  signup(){
    this.commonService.postData('/signup', {name: this.name, email: this.email, password: this.password }).subscribe((data)=>{
      sessionStorage.setItem("user", JSON.stringify(data));
      this.router.navigate(['list-of-blog']);
    },(err)=>{
      console.log(err);
    })
  }

}
