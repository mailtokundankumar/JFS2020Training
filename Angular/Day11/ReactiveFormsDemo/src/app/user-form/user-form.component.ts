import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  //userName: String;
  //userName: FormControl; //variable is declared
  user: FormGroup; //One Single Form Group Created
  constructor(private fb: FormBuilder) { }
  userName: string;
  ngOnInit(): void {

  //   controls: {
  //     [key: string]: AbstractControl;
  // }

  // this.user = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(5)]),
  //   account: new FormGroup({
  //     email: new FormControl('',[Validators.required,Validators.email]),
  //     confirm: new FormControl('',Validators.required)
  //   })
  // });
  this.user = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    account: this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      confirm: ['',Validators.required]
    })

  });

   // this.userName = new FormControl('Default Name:Sabari');
    //this.userName.setValue('Sabari Balaji');
  }

  //Array Destructuring
  // onDataSubmit({value,valid}:{value: User, valid: boolean}){
  //   //console.log(user.controls.name.value);
  //   //console.log(user);
  //   //console.log(user.controls.account.controls.email.value);
  //   //console.log(user.value);
  //   console.log(value,valid);
  // }

  onDataSubmit(){
    console.log(this.user);
  }

  getClassNameErrorCondition(){
    return (this.user.get('name').hasError('required') && this.user.controls.name?.touched);
  }

}

export interface User {
  name: string;
  account: {
    email: string;
    confirm: string;
  };
}
