import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Core/services/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/Shared/models/user.';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  User$: Observable<User[]>;

  constructor(private router: Router,private userservice:UserService) { }

  ngOnInit(): void {
  
  
    this.GetUsers()

  }

  GetUsers(){
    this.User$ = this.userservice.getUsers();
  }

  addUser() {
    this.router.navigateByUrl('add-user');
  };

  DeleteUser(id){
  
      this.userservice.DeleteUser(id).subscribe(data=>{
        console.log('user Deleted !')
        this.GetUsers()
      }, err=> {
        console.error('error !')
      })

    };
    editUser(id) {
      this.router.navigate(['edit-user',{user:id}]);
    };
  }

