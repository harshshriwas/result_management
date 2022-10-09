import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  loginResult =new FormGroup({
    email: new FormControl(''),
    password:new FormControl(''),
  })

  getResultByRollno() {
    this.http.post<any>('http://localhost:3004/login/',this.loginResult.value).subscribe(
      response =>{
        if(response)
        {
          if(response[0]['roll']=="Teacher")
          {
            this.router.navigate(['home']);
          }
          else{
            this.router.navigate(['serchresult']);
          }
        }
        }
      );
  }
}
