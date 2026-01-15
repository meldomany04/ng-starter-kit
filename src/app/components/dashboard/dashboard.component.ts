import { Component, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AuthService } from 'src/services/auth.service.ts';
@Component({
    selector: 'app-dashboard',
    imports: [CardModule, ButtonModule, TranslateModule],
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    // this.me()
  }

  async logout(){
    await this.authService.logout();
  }

  me(){
    this.authService.me();
  }
}
