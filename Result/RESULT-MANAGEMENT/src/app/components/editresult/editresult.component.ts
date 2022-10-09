import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editresult',
  templateUrl: './editresult.component.html',
  styleUrls: ['./editresult.component.css']
})
export class EditresultComponent implements OnInit {

  id:any;
  constructor(private route:ActivatedRoute, private httpClient:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.getResultById();
  }

  editResult =new FormGroup({
    id: new FormControl(''),
    rollno: new FormControl(''),
    name:new FormControl(''),
    date:new FormControl(''),
    score:new FormControl('')
  })

  getResultById() {
    this.httpClient.get<any>('http://localhost:3004/show/'+this.id).subscribe(
      response =>{
        console.log(response[0]);
            this.editResult =new FormGroup({
              id: new FormControl(this.route.snapshot.params['id']),
              rollno: new FormControl(response[0]['rollno']),
              name:new FormControl(response[0]['name']),
              date:new FormControl(response[0]['date']),
              score:new FormControl(response[0]['score'])
            })    
        }
      );
  }

  formSubmit(){
    
      var yes = confirm("Do you want to update..!!");
      if(yes){
        this.httpClient.put<any>('http://localhost:3004/update/',this.editResult.value).subscribe(
          response=>{
            alert("Update SuccessFully");
            this.router.navigate(['home']);
          }
        )
      }
  }

}
