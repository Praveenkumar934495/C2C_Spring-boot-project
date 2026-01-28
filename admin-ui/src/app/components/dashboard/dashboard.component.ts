import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <h2>Admin Dashboard</h2>
    <p>Welcome, {{ adminName }}</p>
  `
})
export class DashboardComponent {

  adminName = '';

  ngOnInit(): void {
    const admin = localStorage.getItem('admin');
    if (admin) {
      this.adminName = JSON.parse(admin).username;
    }
  }
}
