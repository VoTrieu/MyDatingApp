import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../_model/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
private accountService = inject(AccountService);
cancelRegister = output<boolean>();
model:User = {username: "", password:""};

register() {
  this.accountService.register(this.model).subscribe({
    next: response => {
      console.log(response)
      this.cancel()
    },
    error: error => console.log(error)
  })
}

cancel() {
  this.cancelRegister.emit(false);
}



}
