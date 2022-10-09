import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addresult',
  templateUrl: './addresult.component.html',
  styleUrls: ['./addresult.component.css']
})
export class AddresultComponent implements OnInit {


  constructor(public http:HttpClient,private router:Router) { }

  ngOnInit(): void {
  }

  creatResult =new FormGroup({
    rollno: new FormControl(''),
    name:new FormControl(''),
    date:new FormControl(''),
    score:new FormControl('')
  })


  onSubmit(){
    this.addResultInfo();
    
  }

  addResultInfo()
  {
    console.log(this.creatResult);
    this.http.post<any>('http://localhost:3004/create',this.creatResult.value).subscribe(
      response=>{
        //console.log(response);
        alert("Submited");
        this.router.navigate(['home']);
      }
    );
  }

}
