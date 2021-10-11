import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-testmarks',
  templateUrl: './testmarks.component.html',
  styleUrls: ['./testmarks.component.css']
})
export class TestmarksComponent implements OnInit {
  user : any;

  constructor(private login : LoginService) { }

  ngOnInit(): void {
    // this.login.getCurrentUser().subscribe(    // here we are taking from server (MySQL)
    //   (user:any)=>{
    //     this.user=user;
    //   },
    //   (error) => {
    //     alert('error');
    //   }
    // );
  }

}
