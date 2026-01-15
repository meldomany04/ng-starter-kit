import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service.ts';

@Component({
  selector: 'app-auth-callback',
  imports: [],
  templateUrl: './auth-callback.component.html',
  styleUrl: './auth-callback.component.scss',
})
export class AuthCallbackComponent {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  async ngOnInit() {
    if (this.auth.isLoggedIn) {
      this.router.navigateByUrl('/');
    } else {
      this.auth.logout();
    }
  }
}
