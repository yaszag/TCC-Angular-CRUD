import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Core/services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserService) {
    this.addForm = this.formBuilder.group({
      id: [],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.AddUser(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['show-user']);
      });
  }
}
