import { routes } from './../../app.routes';
import { Component, inject } from '@angular/core';
import { BG_IMG_URL, LOGO_URL } from '../../constants/config';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
bgURL = BG_IMG_URL;
checked = true;
email!: string;
password!:string
loginService = inject(LoginService)
router = inject(Router)
toasterService = inject(ToastrService)

ngOnInit(): void {
  if(this.loginService.isLoggedIn){
    this.router.navigateByUrl("/browse");
  }
  else{
    this.router.navigateByUrl("/login");
  }
}

onSubmit(){
  if(!this.email || !this.password){
    this.toasterService.error("provide email or password");
    return; 
  }
  this.loginService.login(this.email, this.password);
  this.toasterService.success("login success");
  this.router.navigateByUrl('/browse');
  
}


}
