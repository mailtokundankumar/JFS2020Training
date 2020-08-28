import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  message = '';
  name: string;
  password: string;
  subscription: Subscription;
  constructor(private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.subscription = this.authService.authenticationResultEvent.subscribe(

      (result) => {
        if (result) {
          const url = this.activatedRoute.snapshot.queryParams['requested'];
          this.router.navigateByUrl(url);
          //console.log(url);
        } else {
          this.message = "Your Username or Password is Invalid";
        }
      }

    );


  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onSubmit() {

    this.authService.authenticate(this.name, this.password);

  }


}

// if (this.authService.authenticate(this.name, this.password)) {
//   const url = this.activatedRoute.snapshot.queryParams['requested'];
//   this.router.navigateByUrl(url);
//   //console.log(url);
// } else {
//   this.message = "Your Username or Password is Invalid";
// }
