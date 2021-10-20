import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  bio:any ={};

  constructor(private bioService:UserServiceService) { }

  ngOnInit(): void {
    this.bioService.getBio().subscribe(
      (resp :any)=>{
        this.bio = resp
      },// success response
      (err)=>{
        console.log(err)
      }, // error response
    )
  }

}
