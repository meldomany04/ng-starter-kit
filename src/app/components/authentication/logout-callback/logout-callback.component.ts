import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-callback',
  imports: [],
  templateUrl: './logout-callback.component.html',
  styleUrl: './logout-callback.component.scss',
})
export class LogoutCallbackComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
