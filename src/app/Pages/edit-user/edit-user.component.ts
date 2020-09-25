import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Shared/models/user.';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Core/services/user.service';
import { first } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User;
  userId;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute, private userService: UserService) {

    this.editForm = this.formBuilder.group({
      id: [''],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
    
    });
   }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('user')
    console.log(this.userId)
    this.GetUserByID();
    }


    GetUserByID(){
      this.userService.getUserById(+this.userId)
      .subscribe( data => {
        this.user=data;
        console.log(data)
        this.editForm.setValue(data);
      });
    }
  onSubmit() {
 
    this.userService.UpdateUser(this.userId,this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['show-user']);
        },
        error => {
          console.error(error);
        });
  }
  Back(){
    this.router.navigateByUrl('show-user')
  }
}
