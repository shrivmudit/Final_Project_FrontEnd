import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private snack:MatSnackBar) { }

  public user={
    username:'',
    password:'',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',

  };

    ngOnInit(): void {}

      formSubmit(){
      console.log(this.user);
      if(this.user.username == '' || this.user.username == null){
        // alert('User is required !!');
         this.snack.open('UserName is required !!','ok', {
            duration: 3000,
            // verticalPosition: 'top',
            // horizontalPosition: 'right'
         });
       
        return;
      }

      //calling adduser: coming for userservice
      
      this.userService.addUser(this.user).subscribe(
        (data:any) => {
          // for success 
          console.log(data);
          // alert('success');
          Swal.fire('Successfully registered' , 'User id is' + data.id , 'success')
        },
        (error) => {
          // for error display
          console.log(error);
          // alert('something went wrong');
          this.snack.open('OOPS! something went wrong !!' , '' , {
            duration: 1000
          })
        }
        )
      


  }

}
