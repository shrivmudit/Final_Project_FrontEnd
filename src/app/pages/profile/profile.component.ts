import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user : any;
  constructor(private login: LoginService) { }

  ngOnInit(): void {

    // this.user = this.login.getUser(); // this one is for taking values friom local storage

    this.login.getCurrentUser().subscribe(    // here we are taking from server (MySQL)
      (user:any)=>{
        this.user=user;
      },
      (error) => {
        alert('error');
      }
    );

  }

}
