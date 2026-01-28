import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { AdminResponse } from '../models/admin-response.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  username = '';
  password = '';
  errorMessage = '';

  constructor(
    private adminService: AdminService,
    private router: Router
  ) {}

  login(): void {
    this.adminService.login({
      username: this.username,
      password: this.password
    }).subscribe({
      next: (admin: AdminResponse) => {
        localStorage.setItem('admin', JSON.stringify(admin));
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.errorMessage = 'Invalid credentials';
      }
    });
  }
}
